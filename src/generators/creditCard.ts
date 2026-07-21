/**
 * Gerador de Cartão de Crédito
 * =============================
 * Responsável por gerar e validar números de cartão de crédito
 * sintéticos, válidos pelo algoritmo de Luhn (ISO/IEC 7812).
 *
 * Suporta as bandeiras mais comuns no mercado brasileiro: Visa,
 * Mastercard, Elo, Hipercard e American Express — cada uma com seu
 * prefixo (BIN), comprimento de número e comprimento de CVV corretos.
 *
 * @module generators/creditCard
 */

import { randInt, pickRandom } from '../utils';

/**
 * Definição de uma bandeira de cartão suportada.
 */
interface CardBrand {
  name: string;
  prefixes: string[];
  length: number;
  cvvLength: number;
}

/**
 * Bandeiras suportadas com seus prefixos (BIN), comprimento total do
 * número e comprimento do CVV.
 */
const CARD_BRANDS: CardBrand[] = [
  { name: 'Visa', prefixes: ['4'], length: 16, cvvLength: 3 },
  { name: 'Mastercard', prefixes: ['51', '52', '53', '54', '55'], length: 16, cvvLength: 3 },
  { name: 'Elo', prefixes: ['4011', '4312', '4389', '4514', '4573', '6363', '6550'], length: 16, cvvLength: 3 },
  { name: 'Hipercard', prefixes: ['606282'], length: 16, cvvLength: 3 },
  { name: 'American Express', prefixes: ['34', '37'], length: 15, cvvLength: 4 }
];

/**
 * Resolve a bandeira solicitada (case-insensitive) ou retorna uma
 * bandeira aleatória caso não seja informada ou não seja reconhecida.
 *
 * @param {string} [bandeira] Nome da bandeira desejada.
 * @returns {CardBrand} Bandeira resolvida.
 */
function resolveBrand(bandeira?: string): CardBrand {
  if (!bandeira) return pickRandom(CARD_BRANDS);

  const found = CARD_BRANDS.find(
    (b) => b.name.toLowerCase() === bandeira.toLowerCase()
  );

  return found ?? pickRandom(CARD_BRANDS);
}

/**
 * Calcula o dígito verificador de Luhn para um número parcial
 * (sem o último dígito).
 *
 * @param {string} numeroParcial Número sem o dígito verificador.
 * @returns {number} Dígito verificador calculado (0-9).
 */
function calcularDigitoLuhn(numeroParcial: string): number {
  let sum = 0;
  let dobrar = true;

  for (let i = numeroParcial.length - 1; i >= 0; i--) {
    let d = Number(numeroParcial[i]);

    if (dobrar) {
      d *= 2;
      if (d > 9) d -= 9;
    }

    sum += d;
    dobrar = !dobrar;
  }

  return (10 - (sum % 10)) % 10;
}

/**
 * Gera número de cartão de crédito válido (algoritmo de Luhn) para
 * uma bandeira específica ou aleatória.
 *
 * @param {string} [bandeira] Nome da bandeira (ex: "Visa", "Mastercard").
 * Se omitido ou não reconhecido, uma bandeira aleatória é usada.
 * @returns {string} Número do cartão, apenas dígitos.
 *
 * @example
 * genNumeroCartao() // "4539148803436467"
 * genNumeroCartao('American Express') // "374245455400126"
 */
export function genNumeroCartao(bandeira?: string): string {
  const brand = resolveBrand(bandeira);
  const prefix = pickRandom(brand.prefixes);
  const remaining = brand.length - prefix.length - 1;

  const middle = Array.from({ length: remaining }, () => randInt(0, 9)).join('');
  const partial = prefix + middle;
  const checkDigit = calcularDigitoLuhn(partial);

  return partial + checkDigit;
}

/**
 * Gera o nome de uma bandeira de cartão aleatória.
 *
 * @returns {string} Nome da bandeira.
 *
 * @example
 * genBandeiraCartao() // "Mastercard"
 */
export function genBandeiraCartao(): string {
  return pickRandom(CARD_BRANDS).name;
}

/**
 * Gera um CVV válido para uma bandeira específica ou aleatória.
 * American Express usa 4 dígitos; as demais bandeiras usam 3.
 *
 * @param {string} [bandeira] Nome da bandeira.
 * @returns {string} CVV gerado.
 *
 * @example
 * genCvv() // "382"
 * genCvv('American Express') // "1234"
 */
export function genCvv(bandeira?: string): string {
  const brand = bandeira
    ? resolveBrand(bandeira)
    : CARD_BRANDS.find((cardBrand) => cardBrand.name !== 'American Express') ?? CARD_BRANDS[0];

  const digits = Array.from({ length: brand.cvvLength }, () => randInt(0, 9));
  return digits.join('');
}

/**
 * Gera uma data de validade futura no formato MM/YY (entre 1 e 5
 * anos a partir do ano atual).
 *
 * @returns {string} Data de validade no formato MM/YY.
 *
 * @example
 * genValidadeCartao() // "08/29"
 */
export function genValidadeCartao(): string {
  const mes = String(randInt(1, 12)).padStart(2, '0');
  const anoAtual = new Date().getFullYear() % 100;
  const ano = String(anoAtual + randInt(1, 5)).padStart(2, '0');

  return `${mes}/${ano}`;
}

/**
 * Gera um conjunto completo de dados de cartão de crédito
 * (número, bandeira, CVV e validade) coerentes entre si.
 *
 * @param {string} [bandeira] Nome da bandeira desejada.
 * @returns {{ numero: string; bandeira: string; cvv: string; validade: string }}
 * Objeto com os dados do cartão.
 *
 * @example
 * genCartaoCompleto()
 * // { numero: "4539148803436467", bandeira: "Visa", cvv: "382", validade: "08/29" }
 */
export function genCartaoCompleto(bandeira?: string): {
  numero: string;
  bandeira: string;
  cvv: string;
  validade: string;
} {
  const brand = resolveBrand(bandeira);

  return {
    numero: genNumeroCartao(brand.name),
    bandeira: brand.name,
    cvv: genCvv(brand.name),
    validade: genValidadeCartao()
  };
}

/**
 * Valida um número de cartão de crédito pelo algoritmo de Luhn.
 * Aceita apenas dígitos, com comprimento entre 13 e 19.
 *
 * @param {string} numero Número do cartão a ser validado.
 * @returns {boolean} true se válido.
 *
 * @example
 * validarCartao("4539148803436467") // true
 * validarCartao("1234567890123456") // false
 */
export function validarCartao(numero: string): boolean {
  if (!/^\d{13,19}$/.test(numero)) return false;
  if (/^(\d)\1+$/.test(numero)) return false;

  let sum = 0;
  let dobrar = false;

  for (let i = numero.length - 1; i >= 0; i--) {
    let d = Number(numero[i]);

    if (dobrar) {
      d *= 2;
      if (d > 9) d -= 9;
    }

    sum += d;
    dobrar = !dobrar;
  }

  return sum % 10 === 0;
}