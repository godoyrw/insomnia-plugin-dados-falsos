import { pickRandom } from '../utils';

/**
 * Tipos sanguíneos válidos conforme sistema ABO e fator Rh
 * @returns {string} Tipo sanguíneo no formato A+, A-, B+, B-, AB+, AB-, O+, O-
 * @example
 *   genBloodType() // "O+"
 */
export function genBloodType(): string {
  const BLOOD_TYPES = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  return pickRandom(BLOOD_TYPES);
}

