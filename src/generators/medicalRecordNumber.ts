import { pickRandom, randInt } from '../utils';

/**
 * Gera números de prontuário médico fictícios
 * @returns {string} Número de prontuário
 * @example
 *   genMedicalRecordNumber() // "PRONT 123456"
 */
export function genMedicalRecordNumber(): string {
  const PREFIXOS = ['PRONT', 'PRONTUARIO', 'HC', 'HOSP', 'CLIN'];
  const prefixo = pickRandom(PREFIXOS);
  const numero = randInt(1000, 999999); // 4-6 dígitos
  return `${prefixo} ${numero}`;
}