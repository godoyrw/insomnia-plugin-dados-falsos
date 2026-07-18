/**
 * Gerador de Título de Eleitor
 * ============================
 * Responsável por gerar e validar números de Título de Eleitor
 * utilizando o algoritmo oficial da Justiça Eleitoral.
 *
 * O Título de Eleitor possui 12 dígitos:
 * - 8 dígitos sequenciais
 * - 2 dígitos do código de estado (01–28)
 * - 2 dígitos verificadores
 *
 * @module generators/tituloEleitor
 */

import { randInt } from '../utils';

/**
 * Gera um número de Título de Eleitor válido.
 *
 * @returns {string} Título de Eleitor com 12 dígitos.
 * @example
 * genTituloEleitor() // "123456780167"
 */
export function genTituloEleitor(): string {
  const digits = Array.from({ length: 8 }, () => randInt(0, 9));

  // Código da UF (01–28)
  const uf = randInt(1, 28);
  const ufDigits = uf.toString().padStart(2, '0').split('').map(Number);

  // Primeiro dígito verificador
  const weights1 = [2, 3, 4, 5, 6, 7, 8, 9];
  let sum1 = 0;
  for (let i = 0; i < 8; i++) {
    sum1 += digits[i] * weights1[i];
  }
  let dv1 = sum1 % 11;
  if (dv1 === 10) dv1 = 0;

  // Segundo dígito verificador
  const sum2 = ufDigits[0] * 7 + ufDigits[1] * 8 + dv1 * 9;
  let dv2 = sum2 % 11;
  if (dv2 === 10) dv2 = 0;

  return digits.join('') + ufDigits.join('') + dv1 + dv2;
}

/**
 * Valida um número de Título de Eleitor.
 *
 * @param {string} value Título a ser validado.
 * @returns {boolean} true se válido.
 * @example
 * validarTituloEleitor("123456780167") // true
 */
export function validarTituloEleitor(value: string): boolean {
  const titulo = value.replace(/\D/g, '');

  if (!/^\d{12}$/.test(titulo)) return false;
  if (/^(\d)\1{11}$/.test(titulo)) return false;

  const digits = titulo.substring(0, 8).split('').map(Number);
  const ufDigits = titulo.substring(8, 10).split('').map(Number);
  const dvInformado1 = Number(titulo[10]);
  const dvInformado2 = Number(titulo[11]);

  // Primeiro DV
  const weights1 = [2, 3, 4, 5, 6, 7, 8, 9];
  let sum1 = 0;
  for (let i = 0; i < 8; i++) {
    sum1 += digits[i] * weights1[i];
  }
  let dv1 = sum1 % 11;
  if (dv1 === 10) dv1 = 0;

  // Segundo DV
  const sum2 = ufDigits[0] * 7 + ufDigits[1] * 8 + dv1 * 9;
  let dv2 = sum2 % 11;
  if (dv2 === 10) dv2 = 0;

  return dv1 === dvInformado1 && dv2 === dvInformado2;
}
