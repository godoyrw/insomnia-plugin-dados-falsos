import { pickRandom, randInt } from '../utils';

/**
 * Gera números de conselhos profissionais (CRM, CREA, OAB, etc.)
 * @param {string} [tipo] - Tipo de conselho: 'CRM', 'CREA', 'OAB' ou outro (aleatório se não especificado)
 * @returns {string} Número de conselho profissional formatado
 * @example
 *   genProfessionalRegistration() // "CRM-SP 12345"
 *   genProfessionalRegistration('OAB') // "OAB/RJ 12345"
 */
export function genProfessionalRegister(tipo?: string): string {
  // Tipos de conselhos disponíveis
  const CONSELHOS = ['CRM', 'CREA', 'OAB', 'COFECON', 'CFF', 'CRM', 'CRN'];

  // Se tipo não especificado ou inválido, escolhe aleatoriamente
  const conselho = tipo && CONSELHOS.includes(tipo.toUpperCase())
    ? tipo.toUpperCase()
    : pickRandom(CONSELHOS);

  // UFs brasileiras (siglas)
  const UFS = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA',
               'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN',
               'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

  const uf = pickRandom(UFS);

  // Gera número baseado no tipo de conselho
  switch (conselho) {
    case 'CRM':
      // CRM: CRM-UF XXXXX (ou XXXX-XX em alguns estados)
      const numeroCRM = randInt(1000, 99999);
      return `${conselho}-${uf} ${numeroCRM}`;

    case 'CREA':
      // CREA: CREA-UF XXXXX-D (onde D é dígito verificador)
      const baseCREA = randInt(1000, 99999);
      // Cálculo simplificado do dígito verificador (módulo 11)
      let soma = 0;
      const digitos = String(baseCREA).padStart(5, '0').split('');
      const pesos = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]; // Adaptado para 5 dígitos
      for (let i = 0; i < Math.min(digitos.length, pesos.length); i++) {
        soma += parseInt(digitos[i]) * pesos[i];
      }
      const resto = soma % 11;
      const digitoVerificador = resto < 2 ? 0 : 11 - resto;
      return `${conselho}-${uf} ${baseCREA}-${digitoVerificador}`;

    case 'OAB':
      // OAB: OAB/UF XXXXX (ou XXXXX-A em algumas seccionais)
      const numeroOAB = randInt(1000, 99999);
      // 50% de chance de ter letra sufixo
      const temLetra = Math.random() < 0.5;
      if (temLetra) {
        const letras = ['A', 'B', 'C', 'D', 'E'];
        const letra = pickRandom(letras);
        return `${conselho}/${uf} ${numeroOAB}-${letra}`;
      } else {
        return `${conselho}/${uf} ${numeroOAB}`;
      }

    default:
      // Para outros conselhos, formato genérico
      const numero = randInt(1000, 99999);
      return `${conselho}-${uf} ${numero}`;
  }
}