/**
 * Constantes relacionadas a HTTP e APIs.
 *
 * @author Roberto Godoy
 * @license MIT
 * @module constants/http
 */

/** Métodos HTTP. */
export const HTTP_METHODS: readonly string[] = [
  'GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'
];

/** Status HTTP mais utilizados. */
export const HTTP_STATUS: readonly number[] = [
  100, 101,
  200, 201, 202, 204,
  301, 302, 304,
  400, 401, 403, 404, 405, 409, 415, 422, 429,
  500, 501, 502, 503, 504
];

/** Valores comuns para o cabeçalho Content-Type. */
export const CONTENT_TYPES: readonly string[] = [
  'application/json',
  'application/xml',
  'text/plain',
  'text/html',
  'multipart/form-data',
  'application/x-www-form-urlencoded'
];

/** Valores comuns para o cabeçalho Accept. */
export const ACCEPT_HEADERS: readonly string[] = [
  '*/*', 'application/json', 'application/xml', 'text/plain'
];

/** Valores comuns para o cabeçalho Accept-Language. */
export const ACCEPT_LANGUAGES: readonly string[] = [
  'pt-BR', 'en-US', 'es-ES', 'fr-FR'
];

/** Valores comuns para o cabeçalho Cache-Control. */
export const CACHE_CONTROLS: readonly string[] = [
  'no-cache', 'no-store', 'public', 'private', 'max-age=3600'
];

/** User-Agents representativos de clientes HTTP e navegadores. */
export const USER_AGENTS: readonly string[] = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/138.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 15_0) AppleWebKit/605.1.15 Version/18.0 Safari/605.1.15',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/138.0 Safari/537.36',
  'curl/8.16.0',
  'PostmanRuntime/7.45.0',
  'Insomnia/2025.6.0'
];
