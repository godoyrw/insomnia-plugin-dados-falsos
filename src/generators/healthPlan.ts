import { pickRandom } from '../utils';

/**
 * Gera nomes de planos de saúde fictícios
 * @returns {string} Nome de plano de saúde
 * @example
 *   genHealthPlan() // "Amil"
 */
export function genHealthPlan(): string {
  const PLANOS_SAUDE = [
    'Amil',
    'SulAmérica',
    'Bradesco Saúde',
    'Unimed',
    'NotreDame Intermédica',
    'Hapvida',
    'Santa Casa',
    'Biomédica',
    'Freedom Health',
    'GNDI',
    'Golden Cross',
    'Filipenson',
    'Qualicorp',
    'Porto Seguro Saúde',
    'Allianz Saúde'
  ];
  return pickRandom(PLANOS_SAUDE);
}