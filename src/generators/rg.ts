/**
 * Gerador de RG (Registro Geral)
 * ===============================
 * Responsável por gerar RGs válidos usando o algoritmo de validação de São Paulo.
 *
 * @module generators/rg
 */

import { randInt } from '../utils';

/**
 * Gera um número de RG válido (algoritmo de São Paulo).
 *
 * O RG possui 9 caracteres:
 * - 8 dígitos base
 * - 1 dígito verificador (0-9 ou X)
 *
 * @returns Número de RG válido com 9 caracteres.
 *
 * @example
 * genRg() // "123456782"
 */
export function genRg(): string {
  const digits = Array.from({ length: 8 }, () => randInt(0, 9));

  const weights = [2, 3, 4, 5, 6, 7, 8, 9];

  let sum = 0;

  for (let i = 0; i < 8; i++) {
    sum += digits[7 - i] * weights[i];
  }

  const remainder = sum % 11;
  const dv = 11 - remainder;

  let checkDigit: string;

  if (dv === 10) {
    checkDigit = 'X';
  } else if (dv === 11) {
    checkDigit = '0';
  } else {
    checkDigit = String(dv);
  }

  return digits.join('') + checkDigit;
}

/**
 * Valida um número de RG (algoritmo de São Paulo).
 *
 * @param value RG a ser validado.
 * @returns true se válido.
 */
export function isValidRg(value: string): boolean {
  const rg = value.replace(/[^\dX]/gi, '').toUpperCase();

  if (!/^\d{8}[\dX]$/.test(rg)) {
    return false;
  }

  if (/^(\d)\1{7}[\dX]$/.test(rg)) {
    return false;
  }

  const digits = rg
    .substring(0, 8)
    .split('')
    .map(Number);

  const weights = [2, 3, 4, 5, 6, 7, 8, 9];

  let sum = 0;

  for (let i = 0; i < 8; i++) {
    sum += digits[7 - i] * weights[i];
  }

  const remainder = sum % 11;
  const dv = 11 - remainder;

  const expected =
    dv === 10
      ? 'X'
      : dv === 11
      ? '0'
      : String(dv);

  return rg[8] === expected;
}