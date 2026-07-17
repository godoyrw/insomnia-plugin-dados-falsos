/**
 * Geradores de Identidade
 * ========================
 * Nomes, usuários, gênero e data de nascimento.
 * Dados demográficos de pessoas físicas brasileiras.
 *
 * Documentos (CPF, CNPJ, CNH, RG, PIS, CNS) têm cada um seu próprio módulo:
 * - cpf.ts, cnpj.ts, cnh.ts, rg.ts, pis.ts, cns.ts
 *
 * @module generators/identity
 */

import { randInt, pickRandom, pad } from '../utils';
import { FIRST_NAMES, LAST_NAMES, NICKNAMES, GENDERS } from '../constants/names';

/**
 * Gera primeiro nome aleatório brasileiro.
 *
 * @returns {string} Primeiro nome aleatório.
 * @example
 * genFirstName() // "Mariana"
 */
export function genFirstName(): string {
  return pickRandom(FIRST_NAMES);
}

/**
 * Gera sobrenome aleatório brasileiro.
 *
 * @returns {string} Sobrenome aleatório.
 * @example
 * genLastName() // "Silva"
 */
export function genLastName(): string {
  return pickRandom(LAST_NAMES);
}

/**
 * Gera nome completo com um ou dois sobrenomes.
 * Há 50% de chance de incluir segundo sobrenome.
 *
 * @returns {string} Nome completo aleatório.
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
 * Gera nome social / apelido informal.
 *
 * @returns {string} Apelido aleatório.
 * @example
 * genNickname() // "Mari"
 */
export function genNickname(): string {
  return pickRandom(NICKNAMES);
}

/**
 * Gera nome de usuário estruturado sem acentos.
 * Formato: primeironome.sobrenome.numero ou primeironome_sobrenome_numero
 *
 * @returns {string} Username aleatório.
 * @example
 * genUsername() // "mariana.silva.4521"
 * genUsername() // "joao_santos_8932"
 */
export function genUsername(): string {
  const first = genFirstName()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
  const last = genLastName()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
  const number = randInt(100, 9999);
  const separator = Math.random() < 0.5 ? '.' : '_';
  return `${first}${separator}${last}${separator}${number}`;
}

/**
 * Gera gênero / pronome.
 * Valores: masculino, feminino, nao_binario, prefiro_nao_dizer.
 *
 * @returns {string} Gênero aleatório.
 * @example
 * genGender() // "feminino"
 */
export function genGender(): string {
  return pickRandom(GENDERS);
}

/**
 * Gera data de nascimento aleatória entre 18 e 70 anos atrás.
 * Suporta múltiplos formatos de saída.
 *
 * @param {string} [format='YYYY-MM-DD'] - Formato: YYYY-MM-DD | DD/MM/YYYY | YYYYMMDD | ISO
 * @returns {string} Data de nascimento no formato especificado.
 * @example
 * genBirthdate()            // "1985-03-15"
 * genBirthdate('DD/MM/YYYY') // "15/03/1985"
 * genBirthdate('ISO')        // "1985-03-15T00:00:00.000Z"
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
    case 'YYYYMMDD':   return `${yyyy}${mm}${dd}`;
    case 'ISO':        return `${yyyy}-${mm}-${dd}T00:00:00.000Z`;
    case 'YYYY-MM-DD':
    default:           return `${yyyy}-${mm}-${dd}`;
  }
}
