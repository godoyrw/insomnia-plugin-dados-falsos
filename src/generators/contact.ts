/**
 * Geradores de Contato
 * =====================
 * Módulo responsável por gerar dados de contato:
 * - Email (com domínio customizável)
 * - Telefone fixo (formato brasileiro)
 * - Celular (formato brasileiro com 9 dígitos)
 * - WhatsApp (com código de país +55)
 *
 * Todos os geradores de telefone seguem o padrão brasileiro com DDD (11-99)
 * e formatos realistas para testes de APIs.
 *
 * @module generators/contact
 */

import { randInt, pickRandom, pad, slugifyEmailPart } from '../utils';
import { EMAIL_DOMAINS } from '../constants/names';
import { genFirstName, genLastName } from './identity';

/**
 * Gera email aleatório com domínio customizável
 * Normaliza nome completo para formato de email (remove acentos, converte para minúsculas)
 * Adiciona token numérico para garantir unicidade
 *
 * @param {string} [domainOpt] - Domínio customizado (ex: "empresa.com.br")
 * @returns {string} Email aleatório no formato nome.sobrenome.token@dominio
 * @example
 * genEmail() // "mariana.silva.4521@example.com"
 * genEmail('empresa.com.br') // "joao.lima.8932@empresa.com.br"
 */
export function genEmail(domainOpt?: string): string {
  const full = `${genFirstName()} ${genLastName()}`;
  const parts = full.split(' ');
  const first = parts[0];
  const last = parts[parts.length - 1];
  const token = randInt(10, 9999);
  const local = slugifyEmailPart(`${first}.${last}.${token}`);
  const domain = (domainOpt && String(domainOpt).trim()) ? String(domainOpt).trim() : pickRandom(EMAIL_DOMAINS);
  return `${local}@${domain}`;
}

/**
 * Gera email de exemplo com domínio example.com
 * Útil para testes que precisam de emails de exemplo padrão
 *
 * @returns {string} Email com domínio example.com
 * @example
 * genEmailExample() // "bruno.costa.3421@example.com"
 */
export function genEmailExample(): string {
  return genEmail('example.com');
}

/**
 * Gera telefone fixo brasileiro
 * Formato: (XX) XXXX-XXXX
 * DDD: 11-99 (códigos de área brasileiros)
 * Primeiro dígito do número: 2-9 (padrão de telefone fixo)
 *
 * @returns {string} Telefone fixo no formato (XX) XXXX-XXXX
 * @example
 * genPhone() // "(11) 3456-7890"
 */
export function genPhone(): string {
  const areaCode = pad(randInt(11, 99), 2);
  const firstPart = pad(randInt(2000, 9999), 4);
  const secondPart = pad(randInt(1000, 9999), 4);
  return `(${areaCode}) ${firstPart}-${secondPart}`;
}

/**
 * Gera celular brasileiro
 * Formato: (XX) 9XXXX-XXXX
 * DDD: 11-99 (códigos de área brasileiros)
 * Começa com 9 (padrão de celular brasileiro)
 *
 * @returns {string} Celular no formato (XX) 9XXXX-XXXX
 * @example
 * genCellphone() // "(21) 98765-4321"
 */
export function genCellphone(): string {
  const areaCode = pad(randInt(11, 99), 2);
  const firstPart = pad(randInt(90000, 99999), 5);
  const secondPart = pad(randInt(1000, 9999), 4);
  return `(${areaCode}) ${firstPart}-${secondPart}`;
}

/**
 * Gera WhatsApp com código de país
 * Formato: +55 XX 9XXXX-XXXX
 * Inclui código de país Brasil (+55) e segue padrão de celular
 *
 * @returns {string} WhatsApp no formato +55 XX 9XXXX-XXXX
 * @example
 * genWhatsapp() // "+55 11 99876-5432"
 */
export function genWhatsapp(): string {
  const areaCode = pad(randInt(11, 99), 2);
  const number = pad(randInt(900000000, 999999999), 9);
  return `+55 ${areaCode} ${number.slice(0, 5)}-${number.slice(5)}`;
}
