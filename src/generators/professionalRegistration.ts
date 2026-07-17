import { pickRandom } from '../utils';

/**
 * Tipos de conselhos profissionais suportados
 */
const CONSELHOS = [
  { sigla: 'CRM', nome: 'Medicina', ufs: ['SP', 'RJ', 'MG', 'RS', 'PR', 'SC', 'BA', 'DF', 'GO', 'PE'] },
  { sigla: 'CREA', nome: 'Engenharia', ufs: ['SP', 'RJ', 'MG', 'RS', 'PR', 'ES', 'BA', 'DF'] },
  { sigla: 'OAB', nome: 'Direito', ufs: ['DF', 'SP', 'RJ', 'MG', 'RS', 'PR', 'SC', 'BA', 'GO', 'PE'] },
  { sigla: 'CRO', nome: 'Odontologia', ufs: ['SP', 'RJ', 'MG', 'DF', 'GO', 'PE'] },
  { sigla: 'COREN', nome: 'Enfermagem', ufs: ['SP', 'RJ', 'MG', 'DF', 'RS', 'PR'] }
];

/**
 * Gera um dígito verificador simples baseado em módulo 11 (similar ao CPF)
 * @param {string} numero - Número para calcular o dígito verificador
 * @returns {string} Dígito verificador
 */
function calcularDigitoVerificador(numero: string): string {
  let soma = 0;
  let peso = numero.length + 1;

  for (let i = 0; i < numero.length; i++) {
    soma += parseInt(numero[i]) * peso;
    peso--;
  }

  const resto = soma % 11;
  return resto < 2 ? '0' : String(11 - resto);
}

/**
 * Gera número de conselho profissional fictício (CRM, CREA, OAB, etc.)
 * @param {string} [tipo] - Tipo opcional do conselho (ex: 'CRM', 'CREA', 'OAB')
 * @returns {string} Número do conselho no formato SIGLA/UF XXXXX ou SIGLA-UF XXXXX-X
 * @example
 *   genProfessionalRegistration() // "CRM-SP 12345"
 *   genProfessionalRegistration('CREA') // "CREA-RJ 67890-3"
 */
export function genProfessionalRegistration(tipo?: string): string {
  // Se tipo não especificado, escolher aleatoriamente
  let conselho;
  if (tipo) {
    conselho = CONSELHOS.find(c => c.sigla === tipo.toUpperCase());
    if (!conselho) {
      // Se tipo inválido, escolher aleatoriamente
      conselho = pickRandom(CONSELHOS);
    }
  } else {
    conselho = pickRandom(CONSELHOS);
  }

  const uf = pickRandom(conselho.ufs);
  const numeroBase = Math.floor(Math.random() * 90000) + 10000; // 5 dígitos

  // Formato varia por conselho
  switch (conselho.sigla) {
    case 'CREA':
      // CREA usa formato XXXXX-D com dígito verificador
      const digitoVerificador = calcularDigitoVerificador(String(numeroBase));
      return `${conselho.sigla}-${uf} ${numeroBase}-${digitoVerificador}`;
    case 'CRO':
      // CRO às vezes usa hífen
      if (Math.random() > 0.5) {
        return `${conselho.sigla}/${uf} ${numeroBase}`;
      } else {
        return `${conselho.sigla}-${uf} ${numeroBase}`;
      }
    default:
      // CRM, OAB, COREN geralmente usam barra ou hífen seguido do número
      if (Math.random() > 0.5) {
        return `${conselho.sigla}/${uf} ${numeroBase}`;
      } else {
        return `${conselho.sigla}-${uf} ${numeroBase}`;
      }
  }
}