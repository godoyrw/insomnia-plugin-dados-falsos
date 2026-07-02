import { pickRandom } from '../utils';

/**
 * Gera descrições de alergias fictícias comuns
 * @returns {string} Descrição de alergia
 * @example
 *   genAllergy() // "Penicilina"
 */
export function genAllergy(): string {
  const ALLERGIAS = [
    'Penicilina',
    'Lactose',
    'Glúten',
    'Pólen',
    'Ácaro',
    'Marisco (camarão, lagosta, etc.)',
    'Amendoim',
    'Castanhas',
    'Ovos',
    'Leite',
    'Soja',
    'Trigo',
    'Peixe',
    'Frutas cítricas',
    'Álcool',
    'Latex',
    'Picada de inseto',
    'Poeira',
    'Mofo',
    'Medicamentos à base de sulfa'
  ];
  return pickRandom(ALLERGIAS);
}