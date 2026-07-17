/**
 * Geradores de Contato
 * =====================
 * Módulo responsável por gerar dados de contato:
 * - Email (com domínio customizável, suporte a EMAIL_LIST)
 * - Telefone fixo (formato brasileiro, suporte a PHONE_LIST)
 * - Celular (formato brasileiro, suporte a CELULAR_LIST)
 * - WhatsApp (com código de país +55, suporte a WHATSAPP_LIST)
 *
 * Todos os geradores aceitam listas via variáveis de ambiente do Insomnia.
 * Se a variável estiver definida, seleciona um valor aleatório da lista.
 * Caso contrário, gera um valor aleatório.
 *
 * @module generators/contact
 */

import { randInt, pickRandom, pad, slugifyEmailPart, getEnvValue } from '../utils';
import { EMAIL_DOMAINS } from '../constants/names';
import { genFirstName, genLastName } from './identity';
import { InsomniaContext } from '../types';

/**
 * Gera email aleatório com domínio customizável.
 * Se EMAIL_LIST estiver definida no contexto, seleciona um email da lista.
 *
 * @param {string} [domainOpt] - Domínio customizado (ignorado se EMAIL_LIST estiver definida)
 * @param {InsomniaContext} [context] - Contexto do Insomnia
 * @returns {string} Email no formato nome.sobrenome.token@dominio
 * @example
 * genEmail()                   // "mariana.silva.4521@gmail.com"
 * genEmail('empresa.com.br')   // "joao.lima.8932@empresa.com.br"
 * genEmail('', context)        // usa EMAIL_LIST se disponível
 */
export function genEmail(domainOpt?: string, context?: InsomniaContext): string {
  const list = getEnvValue(context, 'EMAIL_LIST');
  if (list && list.trim()) {
    const values = list.trim().split(/\s+/).filter(Boolean);
    if (values.length > 0) return pickRandom(values);
  }
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
 * Gera telefone fixo brasileiro.
 * Se PHONE_LIST estiver definida no contexto, seleciona um telefone da lista.
 *
 * @param {InsomniaContext} [context] - Contexto do Insomnia
 * @returns {string} Telefone no formato (XX) XXXX-XXXX
 * @example
 * genPhone() // "(11) 3456-7890"
 */
export function genPhone(context?: InsomniaContext): string {
  const list = getEnvValue(context, 'PHONE_LIST');
  if (list && list.trim()) {
    const values = list.trim().split(/\s+/).filter(Boolean);
    if (values.length > 0) return pickRandom(values);
  }
  const areaCode = pad(randInt(11, 99), 2);
  const firstPart = pad(randInt(2000, 9999), 4);
  const secondPart = pad(randInt(1000, 9999), 4);
  return `(${areaCode}) ${firstPart}-${secondPart}`;
}

/**
 * Gera celular brasileiro.
 * Se CELULAR_LIST estiver definida no contexto, seleciona um celular da lista.
 *
 * @param {InsomniaContext} [context] - Contexto do Insomnia
 * @returns {string} Celular no formato (XX) 9XXXX-XXXX
 * @example
 * genCellphone() // "(21) 98765-4321"
 */
export function genCellphone(context?: InsomniaContext): string {
  const list = getEnvValue(context, 'CELULAR_LIST');
  if (list && list.trim()) {
    const values = list.trim().split(/\s+/).filter(Boolean);
    if (values.length > 0) return pickRandom(values);
  }
  const areaCode = pad(randInt(11, 99), 2);
  const firstPart = pad(randInt(90000, 99999), 5);
  const secondPart = pad(randInt(1000, 9999), 4);
  return `(${areaCode}) ${firstPart}-${secondPart}`;
}

/**
 * Gera WhatsApp com código de país +55.
 * Se WHATSAPP_LIST estiver definida no contexto, seleciona um número da lista.
 *
 * @param {InsomniaContext} [context] - Contexto do Insomnia
 * @returns {string} WhatsApp no formato +55 XX 9XXXX-XXXX
 * @example
 * genWhatsapp() // "+55 11 99876-5432"
 */
export function genWhatsapp(context?: InsomniaContext): string {
  const list = getEnvValue(context, 'WHATSAPP_LIST');
  if (list && list.trim()) {
    const values = list.trim().split(/\s+/).filter(Boolean);
    if (values.length > 0) return pickRandom(values);
  }
  const areaCode = pad(randInt(11, 99), 2);
  const number = pad(randInt(900000000, 999999999), 9);
  return `+55 ${areaCode} ${number.slice(0, 5)}-${number.slice(5)}`;
}
