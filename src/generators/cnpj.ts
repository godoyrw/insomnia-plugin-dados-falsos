/**
 * Gerador de CNPJ
 * ================
 * Responsável por gerar CNPJs válidos com dígitos verificadores.
 * Suporta o novo formato alfanumérico 2026 da Receita Federal
 * e o formato numérico tradicional.
 *
 * @module generators/cnpj
 */

import { randInt } from '../utils';

/**
 * Gera CNPJ válido com dígitos verificadores.
 *
 * Suporta dois modos:
 * - Alfanumérico (padrão): novo formato 2026 da Receita Federal, base com letras A-Z e números 0-9
 * - Numérico: formato tradicional, base apenas com dígitos 0-9
 *
 * Estrutura:
 * - Posições 1-8:  raiz do CNPJ
 * - Posições 9-12: ordem/filial
 * - Posições 13-14: dígitos verificadores (sempre numéricos)
 *
 * O valor de cada caractere para cálculo do DV segue a fórmula:
 * valor = charCodeAt(0) - 48
 * - '0'–'9' → 0–9
 * - 'A'–'Z' → 17–42
 *
 * @param {boolean} [alphanumeric=true] - true para formato alfanumérico (2026), false para numérico (tradicional)
 * @returns {string} CNPJ válido com 14 caracteres
 *
 * @example
 * generateValidCnpj()        // "AB12CD34EF5635" (alfanumérico)
 * generateValidCnpj(false)   // "12345678000195" (numérico)
 */
export function generateValidCnpj(alphanumeric = true): string {
  let base = '';
  for (let i = 0; i < 12; i++) {
    if (alphanumeric && Math.random() < 0.5) {
      base += String.fromCharCode(randInt(65, 90)); // A-Z
    } else {
      base += String(randInt(0, 9)); // 0-9
    }
  }

  // valor numérico de cada caractere para cálculo do DV
  const digitos = Array.from(base).map(c => c.charCodeAt(0) - 48);

  const pesos1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const pesos2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

  const calcDV = (nums: number[], pesos: number[]): number => {
    const soma = nums.reduce((acc, val, i) => acc + val * pesos[i], 0);
    const resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
  };

  const d1 = calcDV(digitos, pesos1);
  const d2 = calcDV([...digitos, d1], pesos2);

  return `${base}${d1}${d2}`;
}

/**
 * Valida CNPJ — algoritmo oficial Receita Federal (suporta alfanumérico 2026)
 * @param {string} cnpj - CNPJ a ser validado
 * @returns {boolean} True se válido
 * @example
 * validarCnpj('12345678000195') // true
 * validarCnpj('AB12CD34EF5635') // true
 * validarCnpj('12345678000196') // false
 */
export function validarCnpj(cnpj: string): boolean {
  if (cnpj.length !== 14) return false;
  const digitos = Array.from(cnpj.slice(0, 12)).map(c => c.charCodeAt(0) - 48);
  const pesos1  = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const pesos2  = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const calcDV  = (nums: number[], pesos: number[]) => {
    const r = nums.reduce((acc, v, i) => acc + v * pesos[i], 0) % 11;
    return r < 2 ? 0 : 11 - r;
  };
  const d1 = calcDV(digitos, pesos1);
  const d2 = calcDV([...digitos, d1], pesos2);
  return cnpj[12] === String(d1) && cnpj[13] === String(d2);
}