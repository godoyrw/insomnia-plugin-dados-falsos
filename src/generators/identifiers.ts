/**
 * Geradores de Identificadores e Segurança
 * ==========================================
 * Módulo responsável por gerar identificadores únicos e tokens de segurança.
 * Suporta UUID_LIST via variável de ambiente do Insomnia.
 *
 * @module generators/identifiers
 */

import { randInt, getEnvValue, pickRandom } from '../utils';
import { InsomniaContext } from '../types';

/**
 * Gera UUID v4 aleatório.
 * Se UUID_LIST estiver definida no contexto, seleciona um UUID da lista.
 *
 * @param {InsomniaContext} [context] - Contexto do Insomnia
 * @returns {string} UUID v4 válido
 * @example
 * genUuid() // "9f1c2c2e-3e2a-4c3e-a1b1-2d3c4e5f6789"
 */
export function genUuid(context?: InsomniaContext): string {
  const list = getEnvValue(context, 'UUID_LIST');
  if (list && list.trim()) {
    const values = list.trim().split(/\s+/).filter(Boolean);
    if (values.length > 0) return pickRandom(values);
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

/**
 * Gera ULID (Universally Unique Lexicographically Sortable Identifier)
 * Formato: 26 caracteres alfanuméricos (base32)
 * ULIDs são sortáveis e mais legíveis que UUIDs
 *
 * @returns {string} ULID válido
 * @example
 * genUlid() // "01J1YQ4MZXK8VQPQ9R2S3T4U5V"
 */
export function genUlid(): string {
  const chars = '0123456789ABCDEFGHJKMNPQRSTVWXYZ';
  let ulid = '';
  for (let i = 0; i < 26; i++) ulid += chars[Math.floor(Math.random() * chars.length)];
  return ulid;
}

/**
 * Gera chave de idempotência (UUID v4).
 * Repassa o contexto para suportar UUID_LIST.
 *
 * @param {InsomniaContext} [context] - Contexto do Insomnia
 * @returns {string} Chave de idempotência (UUID)
 */
export function genIdempotencyKey(context?: InsomniaContext): string {
  return genUuid(context);
}

/**
 * Gera chave de API
 * Formato: sk_test_ + 32 caracteres aleatórios
 * Segue o padrão de chaves de teste de provedores de pagamento
 *
 * @returns {string} Chave de API
 * @example
 * genApiKey() // "sk_test_4f3c2a1b9e8d7c6f5a4b3c2d1e0f9a8b"
 */
export function genApiKey(): string {
  const prefix = 'sk_test_';
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let key = '';
  for (let i = 0; i < 32; i++) key += chars[Math.floor(Math.random() * chars.length)];
  return prefix + key;
}

/**
 * Gera token JWT
 * Formato: header.payload.signature (não é um JWT válido)
 * Útil para testes de parsing e validação de estrutura
 * AVISO: Não é um JWT real, apenas segue a estrutura
 *
 * @returns {string} Token JWT no formato header.payload.signature
 * @example
 * genJwtToken() // "eyJhbGciOi...eyJzdWIiOi...SflKxwRJ..."
 */
export function genJwtToken(): string {
  const header = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
  const payload = Buffer.from(JSON.stringify({ sub: genUuid(), iat: Math.floor(Date.now() / 1000) })).toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  const signature = 'SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
  return `${header}.${payload}.${signature}`;
}

/**
 * Gera senha forte
 * Contém: maiúscula, minúscula, número, caractere especial
 * Comprimento: 12 caracteres
 * Útil para testes de validação de força de senha
 *
 * @returns {string} Senha forte
 * @example
 * genPassword() // "T3st@2026!Abc"
 */
export function genPassword(): string {
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const special = '!@#$%^&*';
  const all = upper + lower + numbers + special;
  let pwd = '';
  pwd += upper[Math.floor(Math.random() * upper.length)];
  pwd += lower[Math.floor(Math.random() * lower.length)];
  pwd += numbers[Math.floor(Math.random() * numbers.length)];
  pwd += special[Math.floor(Math.random() * special.length)];
  for (let i = 0; i < 8; i++) pwd += all[Math.floor(Math.random() * all.length)];
  return pwd.split('').sort(() => Math.random() - 0.5).join('');
}

/**
 * Gera hash SHA256
 * Formato: 64 caracteres hexadecimais
 * Útil para testes de armazenamento e comparação de hashes
 * AVISO: Não é um hash real, apenas segue o formato
 *
 * @returns {string} Hash SHA256 (64 caracteres hex)
 * @example
 * genSha256Hash() // "e3b0c442998fc1d144caf93fcca9f63d551f37a57e7e1e4e45b5c3003337b5d7"
 */
export function genSha256Hash(): string {
  const chars = '0123456789abcdef';
  let hash = '';
  for (let i = 0; i < 64; i++) hash += chars[Math.floor(Math.random() * chars.length)];
  return hash;
}
