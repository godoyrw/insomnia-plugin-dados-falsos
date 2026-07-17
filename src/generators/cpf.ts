/**
 * Gerador de CPF
 * ===============
 * Responsável por gerar e validar CPFs com dígitos verificadores.
 * Utiliza o algoritmo oficial da Receita Federal.
 * Suporta listas de variáveis de ambiente do Insomnia (CPF_LIST).
 *
 * @module generators/cpf
 */

import { randInt, pickRandom, parseNumbersByLength, getEnvValue } from '../utils';
import { InsomniaContext } from '../types';

/**
 * Calcula dígito verificador de CPF
 * Algoritmo: multiplicação decrescente + módulo 11
 *
 * @param {string} digits - Primeiros 9 ou 10 dígitos do CPF
 * @returns {number} Dígito verificador (0-9)
 * @example
 * calcCpfDigit('123456789') // 0
 */
function calcCpfDigit(digits: string): number {
  let sum = 0;
  let multiplier = digits.length + 1;
  for (let i = 0; i < digits.length; i++) {
    sum += parseInt(digits[i]) * multiplier--;
  }
  const remainder = sum % 11;
  return remainder < 2 ? 0 : 11 - remainder;
}

/**
 * Valida CPF — algoritmo oficial Receita Federal
 * @param {string} cpf - CPF a ser validado
 * @returns {boolean} True se válido
 * @example
 * validarCpf('12345678909') // true
 * validarCpf('12345678900') // false
 */
export function validarCpf(cpf: string): boolean {
  if (!/^\d{11}$/.test(cpf)) return false;
  if (/^(\d)\1{10}$/.test(cpf)) return false;
  const calc = (len: number) => {
    let sum = 0;
    for (let i = 0; i < len; i++) sum += parseInt(cpf[i]) * (len + 1 - i);
    const r = (sum * 10) % 11;
    return r === 10 || r === 11 ? 0 : r;
  };
  return calc(9) === parseInt(cpf[9]) && calc(10) === parseInt(cpf[10]);
}

/**
 * Gera CPF válido com dígitos verificadores
 * Cria 9 dígitos aleatórios e calcula os 2 dígitos verificadores
 * usando o algoritmo oficial de validação de CPF da Receita Federal
 *
 * @returns {string} CPF válido com 11 dígitos
 * @example
 * generateValidCpf() // "12345678901"
 */
export function generateValidCpf(): string {
  let cpf = '';
  for (let i = 0; i < 9; i++) {
    cpf += String(randInt(0, 9));
  }
  const digit1 = calcCpfDigit(cpf);
  const digit2 = calcCpfDigit(cpf + digit1);
  return cpf + digit1 + digit2;
}

/**
 * Gera CPF com suporte a lista de variáveis de ambiente.
 * Se CPF_LIST estiver definida no contexto Insomnia, seleciona um CPF da lista.
 * Caso contrário, gera um CPF válido aleatório.
 *
 * @param {InsomniaContext} [context] - Contexto do Insomnia com variáveis de ambiente.
 * @returns {string} CPF válido com 11 dígitos.
 * @example
 * genCpf()         // CPF gerado aleatoriamente
 * genCpf(context)  // Usa CPF_LIST se disponível
 */
export function genCpf(context?: InsomniaContext): string {
  const list = getEnvValue(context, 'CPF_LIST');
  let cpf: string;

  if (list && list.trim()) {
    const values = parseNumbersByLength(list, 11);
    cpf = values.length > 0 ? pickRandom(values) : generateValidCpf();
  } else {
    cpf = generateValidCpf();
  }

  if (!validarCpf(cpf)) {
    throw new Error(`genCpf gerou um valor inválido: "${cpf}"`);
  }

  return cpf;
}
