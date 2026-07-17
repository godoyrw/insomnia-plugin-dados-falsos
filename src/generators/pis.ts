/**
 * Gerador de PIS/PASEP
 * ====================
 * Responsável por gerar e validar números de PIS/PASEP válidos.
 * Suporta PIS_LIST via variável de ambiente do Insomnia.
 *
 * @module generators/pis
 */

import { pickRandom, getEnvValue, parseNumbersByLength } from '../utils';
import { InsomniaContext } from '../types';

/**
 * Calcula o dígito verificador de um número de PIS/PASEP.
 *
 * Algoritmo:
 *
 * 1. Multiplica cada um dos 10 primeiros dígitos pelos pesos:
 *    3,2,9,8,7,6,5,4,3,2
 *
 * 2. Soma todos os resultados.
 *
 * 3. Calcula:
 *
 *      DV = 11 - (soma % 11)
 *
 * 4. Caso o resultado seja 10 ou 11,
 *    o dígito verificador passa a ser 0.
 *
 * @param {string} base Número base contendo exatamente 10 dígitos.
 * @returns {number} Dígito verificador calculado.
 */
function calculatePISDigit(base: string): number {
  // Pesos oficiais definidos para o cálculo do PIS/PASEP
  const weights = [3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

  let sum = 0;

  // Multiplica cada dígito pelo respectivo peso
  for (let i = 0; i < 10; i++) {
    sum += Number(base[i]) * weights[i];
  }

  // Calcula o resto da divisão por 11
  const remainder = 11 - (sum % 11);

  // Regra oficial:
  // Se o resultado for 10 ou 11,
  // o dígito verificador deve ser zero.
  return remainder === 10 || remainder === 11
    ? 0
    : remainder;
}

/**
 * Gera um número de PIS/PASEP válido.
 * Se PIS_LIST estiver definida no contexto, seleciona um PIS da lista.
 *
 * @param {InsomniaContext} [context] - Contexto do Insomnia
 * @returns {string} Número de PIS/PASEP válido com 11 dígitos.
 *
 * @example
 * genPIS()         // "12345678901"
 * genPIS(context)  // usa PIS_LIST se disponível
 */
export function genPIS(context?: InsomniaContext): string {
  const list = getEnvValue(context, 'PIS_LIST');
  if (list && list.trim()) {
    const values = parseNumbersByLength(list, 11);
    if (values.length > 0) return pickRandom(values);
  }
  // Gera os 10 primeiros dígitos aleatoriamente
  const base = Array.from(
    { length: 10 },
    () => Math.floor(Math.random() * 10)
  ).join('');

  return base + calculatePISDigit(base);
}

/**
 * Valida um número de PIS/PASEP.
 *
 * Processo de validação:
 *
 * 1. Verifica se possui exatamente 11 dígitos numéricos;
 * 2. Separa os 10 primeiros dígitos;
 * 3. Recalcula o dígito verificador;
 * 4. Compara o resultado com o dígito informado.
 *
 * @param {string} pis Número do PIS/PASEP a ser validado.
 * @returns {boolean} Retorna true se o número for válido; caso contrário, false.
 *
 * @example
 * validarPis("12345678901")
 * // true
 */
export function validarPis(pis: string): boolean {
  // Verifica se contém exatamente 11 dígitos
  if (!/^\d{11}$/.test(pis)) {
    return false;
  }

  // Obtém os 10 primeiros dígitos
  const base = pis.substring(0, 10);

  // Obtém o dígito verificador informado
  const digit = Number(pis[10]);

  // Recalcula o dígito e compara
  return calculatePISDigit(base) === digit;
}