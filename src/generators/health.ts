import { pickRandom, randInt } from '../utils';

/**
 * Gera um número de convênio de saúde fictício
 * @returns {string} Nome de convênio de saúde fictício
 * @example
 *   genHealthPlan() // "Amil"
 */
export function genHealthPlan(): string {
  const HEALTH_PLANS = [
    'Amil',
    'SulAmérica',
    'Bradesco Saúde',
    'UniHealth',
    'NotreDame Intermédica',
    'Espírito Santo Saúde',
    'São Francisco Saúde',
    'Care Plus',
    'Yellow Cross',
    'Green Line Health'
  ];
  return pickRandom(HEALTH_PLANS);
}

/**
 * Gera uma alergia fictícia comum
 * @returns {string} Descrição de alergia fictícia
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
    'Marisco',
    'Amendoim',
    'Ovos',
    'Soja',
    'Farinha',
    'Poeira',
    'Álcool',
    'Latex'
  ];
  return pickRandom(ALLERGIAS);
}

/**
 * Gera um número de prontuário médió fictício
 * @returns {string} Número de prontuário no formato numérico (6-8 dígitos)
 * @example
 *   genMedicalRecordNumber() // "123456"
 */
export function genMedicalRecordNumber(): string {
  // Prontuários geralmente têm 6-8 dígitos
  const num = randInt(100000, 99999999);
  return String(num);
}

/**
 * Valida CNS (Cartão Nacional de Saúde) - algoritmo simplificado para formato fictício
 * @param {string} cns - Número do CNS a ser validado
 * @returns {boolean} True se válido
 */
function validarCns(cns: string): boolean {
  if (!/^\d{15}$/.test(cns)) return false;

  // Primeiro dígito verificador (posições 1-12)
  const primeiros12 = cns.slice(0, 12);
  const pesos1 = [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
  let soma = 0;
  for (let i = 0; i < 12; i++) {
    soma += parseInt(primeiros12[i]) * pesos1[i];
  }
  const resto1 = soma % 11;
  const digito1 = resto1 < 2 ? 0 : 11 - resto1;

  // Segundo dígito verificador (posições 1-13, incluindo primeiro dígito verificador)
  const primeiros13 = cns.slice(0, 13) + digito1;
  const pesos2 = [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
  soma = 0;
  for (let i = 0; i < 13; i++) {
    soma += parseInt(primeiros13[i]) * pesos2[i];
  }
  const resto2 = soma % 11;
  const digito2 = resto2 < 2 ? 0 : 11 - resto2;

  return parseInt(cns[12]) === digito1 && parseInt(cns[13]) === digito2;
}

/**
 * Gera um número de CNS (Cartão Nacional de Saúde) fictício válido
 * @returns {string} CNS no formato 000000000000000 (15 dígitos com DV válido)
 * @example
 *   genCnsNumber() // "123456789012345"
 */
export function genCnsNumber(): string {
  let cns;
  do {
    // Gera 13 dígitos aleatórios + calcula os 2 dígitos verificadores
    const base = Array.from({length: 13}, () => Math.floor(Math.random() * 10)).join('');
    const pesos1 = [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
    let soma = 0;
    for (let i = 0; i < 13; i++) {
      soma += parseInt(base[i]) * pesos1[i];
    }
    const resto1 = soma % 11;
    const digito1 = resto1 < 2 ? 0 : 11 - resto1;

    const baseComDigito1 = base + digito1;
    const pesos2 = [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
    soma = 0;
    for (let i = 0; i < 13; i++) {
      soma += parseInt(baseComDigito1[i]) * pesos2[i];
    }
    const resto2 = soma % 11;
    const digito2 = resto2 < 2 ? 0 : 11 - resto2;

    cns = base + digito1 + digito2;
  } while (!validarCns(cns)); // Garantir que seja válido (embora o cálculo já deva garantir)

  return cns;
}