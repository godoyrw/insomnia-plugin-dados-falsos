/**
 * Gerador de CNH (Carteira Nacional de Habilitação)
 * ==================================================
 * Responsável por gerar e validar números de CNH válidos.
 *
 * A CNH possui 11 dígitos:
 * - 9 dígitos base
 * - 2 dígitos verificadores calculados pelo algoritmo oficial do DENATRAN
 *
 * @module generators/cnh
 */

import { randInt } from '../utils';

/**
 * Gera número de CNH válido com dígitos verificadores.
 *
 * Algoritmo oficial DENATRAN:
 * - D1: soma ponderada decrescente (peso 9→1) módulo 11
 * - D2: soma ponderada crescente (peso 1→9) − dsc, módulo 11
 *
 * @returns {string} Número de CNH válido com 11 dígitos.
 *
 * @example
 * genCnh() // "12345678909"
 */
export function genCnh(): string {
  const digits = Array.from({ length: 9 }, () => randInt(0, 9));

  let dsc = 0;
  let sum = 0;

  for (let i = 0, weight = 9; i < 9; i++, weight--) {
    sum += digits[i] * weight;
  }

  let d1 = sum % 11;

  if (d1 >= 10) {
    d1 = 0;
    dsc = 2;
  }

  sum = 0;

  for (let i = 0, weight = 1; i < 9; i++, weight++) {
    sum += digits[i] * weight;
  }

  let d2 = (sum % 11) - dsc;

  if (d2 < 0) d2 += 11;
  if (d2 >= 10) d2 = 0;

  return [...digits, d1, d2].join('');
}

/**
 * Valida número de CNH.
 *
 * @param {string} cnh Número da CNH a ser validado.
 * @returns {boolean} true se válido.
 *
 * @example
 * validarCnh("12345678909") // true
 */
export function validarCnh(cnh: string): boolean {
  if (!/^\d{11}$/.test(cnh)) return false;
  if (/^(\d)\1{10}$/.test(cnh)) return false;

  const digits = cnh.slice(0, 9).split('').map(Number);

  let dsc = 0;
  let sum = 0;

  for (let i = 0, weight = 9; i < 9; i++, weight--) {
    sum += digits[i] * weight;
  }

  let d1 = sum % 11;

  if (d1 >= 10) {
    d1 = 0;
    dsc = 2;
  }

  sum = 0;

  for (let i = 0, weight = 1; i < 9; i++, weight++) {
    sum += digits[i] * weight;
  }

  let d2 = (sum % 11) - dsc;

  if (d2 < 0) d2 += 11;
  if (d2 >= 10) d2 = 0;

  return d1 === Number(cnh[9]) && d2 === Number(cnh[10]);
}
