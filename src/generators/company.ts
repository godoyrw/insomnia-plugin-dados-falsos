/**
 * Geradores de Empresa
 * =====================
 * Módulo responsável por gerar dados corporativos:
 * - Razão social (nome legal da empresa)
 * - Nome fantasia (nome comercial)
 * - Email corporativo
 * - Cargo profissional
 * - Departamento
 *
 * Todos os geradores seguem padrões realistas de empresas brasileiras
 * e são úteis para testes de APIs de RH, CRM e sistemas corporativos.
 *
 * @module generators/company
 */

import { pickRandom, slugifyEmailPart } from '../utils';
import { DEPARTMENTS, POSITIONS, COMPANY_SUFFIXES, CORPORATE_DOMAINS } from '../constants/business';
import { genFirstName, genLastName } from './identity';

/**
 * Gera razão social de empresa
 * Combina adjetivo + substantivo + sufixo legal (LTDA, S.A., etc)
 * Formato realista de empresa brasileira
 *
 * @returns {string} Razão social completa
 * @example
 * genCompanyName() // "Silva Tecnologia LTDA"
 */
export function genCompanyName(): string {
  const adj = ['Souza', 'Silva', 'Costa', 'Oliveira', 'Pereira'];
  const noun = ['Tecnologia', 'Solucoes', 'Servicos', 'Consultoria', 'Inovacao'];
  const suffix = pickRandom(COMPANY_SUFFIXES);
  return `${pickRandom(adj)} ${pickRandom(noun)} ${suffix}`;
}

/**
 * Gera nome fantasia de empresa
 * Combina adjetivo + substantivo (sem sufixo legal)
 * Formato de nome comercial/marca
 *
 * @returns {string} Nome fantasia da empresa
 * @example
 * genCompanyFantasyName() // "Tech Soluções"
 */
export function genCompanyFantasyName(): string {
  const adj = ['Tech', 'Smart', 'Digital', 'Cloud', 'Dados'];
  const noun = ['Solucoes', 'Sistemas', 'Labs', 'Hub', 'Obras'];
  return `${pickRandom(adj)} ${pickRandom(noun)}`;
}

/**
 * Gera email corporativo
 * Formato: primeiro.sobrenome@dominio.com.br
 * Usa domínios corporativos realistas
 *
 * @returns {string} Email corporativo
 * @example
 * genCorporateEmail() // "joao.silva@empresa.com.br"
 */
export function genCorporateEmail(): string {
  const first = slugifyEmailPart(genFirstName());
  const last = slugifyEmailPart(genLastName());
  return `${first}.${last}@${pickRandom(CORPORATE_DOMAINS)}`;
}

/**
 * Gera cargo profissional
 * Seleciona um cargo realista de empresa brasileira
 *
 * @returns {string} Cargo profissional
 * @example
 * genPosition() // "Engenheiro de Software"
 */
export function genPosition(): string {
  return pickRandom(POSITIONS);
}

/**
 * Gera departamento corporativo
 * Seleciona um departamento típico de empresa
 *
 * @returns {string} Departamento
 * @example
 * genDepartment() // "Tecnologia"
 */
export function genDepartment(): string {
  return pickRandom(DEPARTMENTS);
}
