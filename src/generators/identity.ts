/**
 * Geradores de Identidade
 * ========================
 * Módulo responsável por gerar dados de identidade brasileira:
 * - Nomes (primeiro, sobrenome, completo, social)
 * - Documentos (CPF, CNPJ, RG/CNH)
 * - Dados demográficos (gênero, data de nascimento)
 *
 * Todos os geradores de documentos (CPF/CNPJ) incluem validação de dígitos verificadores
 * e suportam listas de variáveis de ambiente para casos de teste específicos.
 *
 * @module generators/identity
 */

import { randInt, pickRandom, pad, parseNumbersByLength, getEnvValue } from '../utils';
import { generateValidCpf, validarCpf } from './cpf';
import { generateValidCnpj, validarCnpj } from './cnpj';
import { FIRST_NAMES, LAST_NAMES, NICKNAMES, GENDERS } from '../constants/names';
import { InsomniaContext } from '../types';

/**
 * Gera primeiro nome aleatório
 * Seleciona um nome da lista de nomes brasileiros (masculino ou feminino)
 *
 * @returns {string} Primeiro nome aleatório
 * @example
 * genFirstName() // "Mariana"
 */
export function genFirstName(): string {
  return pickRandom(FIRST_NAMES);
}

/**
 * Gera sobrenome aleatório
 * Seleciona um sobrenome da lista de sobrenomes brasileiros comuns
 *
 * @returns {string} Sobrenome aleatório
 * @example
 * genLastName() // "Silva"
 */
export function genLastName(): string {
  return pickRandom(LAST_NAMES);
}

/**
 * Gera nome completo com primeiro nome e um ou dois sobrenomes
 * Combina primeiro nome com um ou dois sobrenomes aleatórios
 * Há 50% de chance de incluir um segundo sobrenome
 *
 * @returns {string} Nome completo aleatório
 * @example
 * genFullName() // "João Pedro Lima"
 */
export function genFullName(): string {
  const fn = genFirstName();
  const ln1 = pickRandom(LAST_NAMES);
  const ln2 = Math.random() < 0.5 ? pickRandom(LAST_NAMES) : '';
  return [fn, ln1, ln2].filter(Boolean).join(' ');
}

/**
 * Gera nome social / apelido
 * Seleciona um apelido comum usado em redes sociais e comunicação informal
 *
 * @returns {string} Nome social/apelido aleatório
 * @example
 * genNickname() // "Mari"
 */
export function genNickname(): string {
  return pickRandom(NICKNAMES);
}

/**
 * Gera gênero / pronome
 * Retorna um dos gêneros: masculino, feminino, não-binário ou prefiro não dizer
 *
 * @returns {string} Gênero aleatório
 * @example
 * genGender() // "feminino"
 */
export function genGender(): string {
  return pickRandom(GENDERS);
}

/**
 * Gera nome de usuário aleatório sem acentos
 * Combina primeiro nome + sobrenome + número aleatório
 * Remove acentos e caracteres especiais para compatibilidade com sistemas externos
 * Formato: primeironome.sobrenome.numero ou primeironome_sobrenome_numero
 * Usa separadores aleatórios (ponto ou underscore) para variedade
 *
 * @returns {string} Nome de usuário aleatório sem acentos
 * @example
 * genUsername() // "mariana.silva.4521"
 * genUsername() // "joao_santos_8932"
 */
export function genUsername(): string {
  const first = genFirstName()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '');
  const last = genLastName()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '');
  const number = randInt(100, 9999);
  const separator = Math.random() < 0.5 ? '.' : '_';
  return `${first}${separator}${last}${separator}${number}`;
}

/**
 * Gera CPF com suporte a lista de variáveis de ambiente
 * Se CPF_LIST estiver definida no contexto Insomnia, seleciona um CPF da lista
 * Caso contrário, gera um CPF válido aleatório
 *
 * @param {InsomniaContext} [context] - Contexto do Insomnia com variáveis de ambiente
 * @returns {string} CPF válido (da lista ou gerado)
 * @example
 * genCpf(context) // Usa CPF_LIST se disponível, senão gera novo
 */
export function genCpf(context?: InsomniaContext): string {
  let cpf;
  const list = getEnvValue(context, 'CPF_LIST');
  if (list && list.trim()) {
    const values = parseNumbersByLength(list, 11);
    if (values.length > 0) {
      cpf = pickRandom(values);
    } else {
      cpf = generateValidCpf();
    }
  } else {
    cpf = generateValidCpf();
  }

  // Validar o CPF gerado e lançar erro se inválido
  if (!validarCpf(cpf)) {
    throw new Error(`genCpf gerou um valor inválido: "${cpf}"`);
  }

  return cpf;
}

/**
 * Gera CNPJ com suporte a lista de variáveis de ambiente
 * Se CNPJ_LIST estiver definida no contexto Insomnia, seleciona um CNPJ da lista
 * Caso contrário, gera um CNPJ válido aleatório no formato alfanumérico (2026)
 *
 * Suporta duas assinaturas:
 * - genCnpj(alphanumeric?) — uso direto sem contexto (testes)
 * - genCnpj(context?, alphanumeric?) — uso com contexto Insomnia
 *
 * @param {boolean} [alphanumeric=true] - true para formato alfanumérico (2026), false para numérico (tradicional)
 * @returns {string} CNPJ válido (da lista ou gerado)
 * @example
 * genCnpj()               // Alfanumérico, sem contexto
 * genCnpj(false)          // Numérico, sem contexto
 * genCnpj(context)        // Alfanumérico, com contexto Insomnia
 * genCnpj(context, false) // Numérico, com contexto Insomnia
 */
export function genCnpj(alphanumeric?: boolean): string;
export function genCnpj(context?: InsomniaContext, alphanumeric?: boolean): string;
export function genCnpj(contextOrAlphanumeric?: InsomniaContext | boolean, alphanumeric = true): string {
  let cnpj;
  if (typeof contextOrAlphanumeric === 'boolean') {
    cnpj = generateValidCnpj(contextOrAlphanumeric);
  } else {
    const list = getEnvValue(contextOrAlphanumeric, 'CNPJ_LIST');
    if (list && list.trim()) {
      const values = parseNumbersByLength(list, 14);
      if (values.length > 0) {
        cnpj = pickRandom(values);
      } else {
        cnpj = generateValidCnpj(alphanumeric);
      }
    } else {
      cnpj = generateValidCnpj(alphanumeric);
    }
  }

  // Validar o CNPJ gerado e lançar erro se inválido
  if (!validarCnpj(cnpj)) {
    throw new Error(`genCnpj gerou um valor inválido: "${cnpj}"`);
  }

  return cnpj;
}

/**
 * Gera número de CNH válido.
 *
 * A CNH possui 11 dígitos:
 * - 9 dígitos base
 * - 2 dígitos verificadores calculados
 *
 * @returns Número de CNH válido com 11 dígitos.
 *
 * @example
 * genCnh() // "12345678909"
 */
export function genCnh(): string {
  const digits = Array.from({ length: 9 }, () => randInt(0, 9));

  let dsc = 0;
  let sum = 0;

  for (let i = 0, weight = 9; i < 9; i++, weight--) {
    sum += digits[i] * weight;
  }

  let d1 = sum % 11;

  if (d1 >= 10) {
    d1 = 0;
    dsc = 2;
  }

  sum = 0;

  for (let i = 0, weight = 1; i < 9; i++, weight++) {
    sum += digits[i] * weight;
  }

  let d2 = (sum % 11) - dsc;

  if (d2 < 0) d2 += 11;
  if (d2 >= 10) d2 = 0;

  return [...digits, d1, d2].join('');
}

/**
 * Gera data de nascimento em formato especificado
 * Gera data aleatória entre 18 e 70 anos atrás (idade adulta realista)
 * Suporta múltiplos formatos de saída
 *
 * @param {string} [format='YYYY-MM-DD'] - Formato desejado (YYYY-MM-DD, DD/MM/YYYY, YYYYMMDD, ISO)
 * @returns {string} Data de nascimento no formato especificado
 * @example
 * genBirthdate() // "1985-03-15"
 * genBirthdate('DD/MM/YYYY') // "15/03/1985"
 * genBirthdate('ISO') // "1985-03-15T00:00:00.000Z"
 */
export function genBirthdate(format?: string): string {
  const now = new Date();
  const year = now.getFullYear() - randInt(18, 70);
  const month = randInt(1, 12);
  const day = randInt(1, 28);
  const yyyy = String(year);
  const mm = pad(month, 2);
  const dd = pad(day, 2);

  switch ((format || 'YYYY-MM-DD').toUpperCase()) {
    case 'DD/MM/YYYY': return `${dd}/${mm}/${yyyy}`;
    case 'YYYYMMDD': return `${yyyy}${mm}${dd}`;
    case 'ISO': return `${yyyy}-${mm}-${dd}T00:00:00.000Z`;
    case 'YYYY-MM-DD':
    default: return `${yyyy}-${mm}-${dd}`;
  }
}

// Re-export RG functions from './rg'
export { genRg, isValidRg } from './rg';