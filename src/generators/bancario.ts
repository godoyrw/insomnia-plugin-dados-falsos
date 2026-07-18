/**
 * Gerador de Dados Bancários
 * ==========================
 * Responsável por gerar dados bancários sintéticos para testes.
 *
 * Os valores gerados seguem formatos comuns utilizados por bancos
 * brasileiros, porém não representam contas reais.
 *
 * Chave Pix Aleatória segue o formato UUID v4 definido pelo Banco Central.
 *
 * @module generators/bancario
 */

import { randInt } from '../utils';
import { genUuid } from './identifiers';

/**
 * Gera uma agência bancária sintética.
 *
 * Formato: XXXX (4 dígitos)
 *
 * @returns {string} Agência com 4 dígitos.
 * @example
 * genAgencia() // "4532"
 */
export function genAgencia(): string {
  return randInt(1000, 9999).toString();
}

/**
 * Gera um número de conta bancária sintética.
 *
 * Formato: XXXXX-X (5 dígitos + dígito verificador)
 *
 * @returns {string} Conta bancária sintética.
 * @example
 * genConta() // "56789-3"
 */
export function genConta(): string {
  const numero = randInt(10000, 99999);
  const dv = randInt(0, 9);
  return `${numero}-${dv}`;
}

/**
 * Gera uma chave Pix Aleatória no formato UUID v4.
 *
 * Conforme definido pelo Banco Central do Brasil,
 * a chave Pix aleatória é um UUID v4.
 *
 * @returns {string} Chave Pix Aleatória (UUID v4).
 * @example
 * genPixAleatoria() // "550e8400-e29b-41d4-a716-446655440000"
 */
export function genPixAleatoria(): string {
  return genUuid();
}
