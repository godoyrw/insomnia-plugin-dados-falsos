/**
 * Geradores de utilitários HTTP e APIs.
 *
 * @module generators/http
 */

import { pickRandom } from '../utils';
import { InsomniaContext } from '../types';
import {
  ACCEPT_HEADERS,
  ACCEPT_LANGUAGES,
  CACHE_CONTROLS,
  CONTENT_TYPES,
  HTTP_METHODS,
  HTTP_STATUS,
  USER_AGENTS
} from '../constants/http';
import { genIdempotencyKey, genJwtToken, genUuid } from './identifiers';

/**
 * Gera um status HTTP comum.
 *
 * @returns {number} Código de status HTTP
 * @example
 * genHttpStatus() // 201
 */
export function genHttpStatus(): number {
  return pickRandom(HTTP_STATUS);
}

/**
 * Gera um método HTTP.
 *
 * @returns {string} Método HTTP
 * @example
 * genHttpMethod() // "POST"
 */
export function genHttpMethod(): string {
  return pickRandom(HTTP_METHODS);
}

/**
 * Gera um valor comum para Content-Type.
 *
 * @returns {string} Valor de Content-Type
 */
export function genContentType(): string {
  return pickRandom(CONTENT_TYPES);
}

/**
 * Gera um valor comum para Accept.
 *
 * @returns {string} Valor de Accept
 */
export function genAccept(): string {
  return pickRandom(ACCEPT_HEADERS);
}

/**
 * Gera um valor comum para Accept-Language.
 *
 * @returns {string} Valor de Accept-Language
 */
export function genAcceptLanguage(): string {
  return pickRandom(ACCEPT_LANGUAGES);
}

/**
 * Gera um valor comum para Cache-Control.
 *
 * @returns {string} Valor de Cache-Control
 */
export function genCacheControl(): string {
  return pickRandom(CACHE_CONTROLS);
}

/**
 * Gera um User-Agent representativo de navegador ou cliente HTTP.
 *
 * @returns {string} User-Agent
 */
export function genUserAgent(): string {
  return pickRandom(USER_AGENTS);
}

/**
 * Gera um cabeçalho Authorization Bearer sintético.
 *
 * @returns {string} Cabeçalho Authorization com JWT estrutural
 * @example
 * genAuthorizationBearer() // "Bearer eyJhbGciOi..."
 */
export function genAuthorizationBearer(): string {
  return `Bearer ${genJwtToken()}`;
}

/**
 * Gera um ID de correlação UUID v4.
 * Suporta UUID_LIST via contexto Insomnia.
 *
 * @param {InsomniaContext} [context] - Contexto do Insomnia
 * @returns {string} ID de correlação UUID v4
 */
export function genCorrelationId(context?: InsomniaContext): string {
  return genUuid(context);
}

/**
 * Gera uma chave de idempotência UUID v4.
 * Suporta UUID_LIST via contexto Insomnia.
 *
 * @param {InsomniaContext} [context] - Contexto do Insomnia
 * @returns {string} Chave de idempotência UUID v4
 */
export function genHttpIdempotencyKey(context?: InsomniaContext): string {
  return genIdempotencyKey(context);
}
