/**
 * Geradores de Data e Hora
 * ==========================
 * Módulo responsável por gerar dados temporais:
 * - Data e hora em formato ISO 8601
 * - Fuso horário brasileiro
 *
 * Útil para testes de APIs que lidam com timestamps, agendamentos
 * e operações sensíveis a timezone.
 *
 * @module generators/datetime
 */

import { randInt, pad } from '../utils';

/**
 * Gera data e hora em formato ISO 8601
 * Formato: YYYY-MM-DDTHH:MM:SSZ
 * Gera timestamp aleatório do ano atual
 *
 * @returns {string} Data e hora em formato ISO 8601
 * @example
 * genDatetimeIso() // "2026-03-15T14:35:20Z"
 */
export function genDatetimeIso(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = pad(randInt(1, 12), 2);
  const day = pad(randInt(1, 28), 2);
  const hour = pad(randInt(0, 23), 2);
  const minute = pad(randInt(0, 59), 2);
  const second = pad(randInt(0, 59), 2);
  return `${year}-${month}-${day}T${hour}:${minute}:${second}Z`;
}
