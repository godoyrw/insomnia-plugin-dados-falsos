/**
 * Funções Utilitárias
 * ====================
 * Helpers reutilizáveis para geração de dados
 * Funções matemáticas, de validação e de formatação
 *
 * @module utils
 */

import { InsomniaContext } from './types';

/**
 * Extrai valor de variável de ambiente do contexto Insomnia
 * Tenta múltiplas fontes para compatibilidade com diferentes versões
 *
 * @param {InsomniaContext} [context] - Contexto do Insomnia
 * @param {string} name - Nome da variável de ambiente
 * @returns {string} Valor da variável ou string vazia se não encontrada
 * @example
 * getEnvValue(context, 'CPF_LIST') // "12345678901 98765432100"
 */
export function getEnvValue(context: InsomniaContext | undefined, name: string): string {
  return context?.context?.environment?.[name] ?? context?.env?.[name] ?? '';
}

/**
 * Gera número inteiro aleatório entre min e max (inclusive)
 * Usa Math.random() com distribuição uniforme
 *
 * @param {number} min - Valor mínimo (inclusive)
 * @param {number} max - Valor máximo (inclusive)
 * @returns {number} Número inteiro aleatório
 * @example
 * randInt(1, 10) // 7
 */
export function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Seleciona elemento aleatório de array
 * Retorna string vazia se array vazio (fail-safe)
 *
 * @template T
 * @param {T[]} arr - Array de elementos
 * @returns {T} Elemento aleatório ou string vazia
 * @example
 * pickRandom(['a', 'b', 'c']) // "b"
 */
export function pickRandom<T>(arr: T[]): T {
  if (!arr || arr.length === 0) return '' as any;
  return arr[randInt(0, arr.length - 1)];
}

/**
 * Extrai números de comprimento específico de string
 * Usa regex global para encontrar todas as ocorrências
 *
 * @param {string} input - String de entrada
 * @param {number} len - Comprimento dos números a extrair
 * @returns {string[]} Array de números encontrados
 * @example
 * parseNumbersByLength('12345678901 98765432100', 11) // ['12345678901', '98765432100']
 */
export function parseNumbersByLength(input: string, len: number): string[] {
  if (!input) return [];
  const re = new RegExp(`\\d{${len}}`, 'g');
  const matches = String(input).match(re);
  return matches ? matches : [];
}

/**
 * Preenche número com zeros à esquerda
 * Útil para formatação de datas, horas, etc
 *
 * @param {number | string} n - Número ou string a preencher
 * @param {number} [len=2] - Comprimento final (padrão: 2)
 * @returns {string} String preenchida com zeros
 * @example
 * pad(5, 2) // "05"
 * pad(15, 3) // "015"
 */
export function pad(n: number | string, len: number = 2): string {
  return String(n).padStart(len, '0');
}

/**
 * Normaliza string para uso em email
 * Remove acentos, converte para minúsculas, substitui espaços por pontos
 *
 * @param {string} s - String a normalizar
 * @returns {string} String normalizada para email
 * @example
 * slugifyEmailPart('João Silva') // "joao.silva"
 */
export function slugifyEmailPart(s: string): string {
  return String(s)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '.')
    .replace(/^\.+|\.+$/g, '')
    .replace(/\.+/g, '.');
}

/**
 * Valida UUID v4
 * @param {string} uuid - UUID a ser validado
 * @returns {boolean} True se v\u00e1lido
 * @example
 * validarUuid('123e4567-e89b-12d3-a456-426614174000') // true
 */
export function validarUuid(uuid: string): boolean {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(uuid);
}

/**
 * Valida data real (considera dias por m\u00eas e anos bissextos)
 * @param {number} ano - Ano (ex: 2023)
 * @param {number} mes - M\u00eas (1-12)
 * @param {number} dia - Dia (1-31)
 * @returns {boolean} True se for uma data v\u00e1lida
 * @example
 * validarData(2023, 2, 28) // true
 * validarData(2023, 2, 29) // false (ano n\u00e3o bissexto)
 */
export function validarData(ano: number, mes: number, dia: number): boolean {
  const d = new Date(ano, mes - 1, dia);
  return d.getFullYear() === ano && d.getMonth() === mes - 1 && d.getDate() === dia;
}

/**
 * Valida email com regex completo RFC 5322 simplificado
 * @param {string} email - Email a ser validado
 * @returns {boolean} True se v\u00e1lido
 * @example
 * validarEmail('usuario@example.com') // true
 * validarEmail('usuario@invalido') // false
 */
export function validarEmail(email: string): boolean {
  return /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(email);
}

/**
 * Valida senha forte: mai\u00fascula, min\u00fascula, n\u00famero, especial, 12+ chars
 * @param {string} senha - Senha a ser validada
 * @returns {boolean} True se for uma senha forte
 * @example
 * validarSenha('SenhaFort3!') // true
 * validarSenha('fraca') // false
 */
export function validarSenha(senha: string): boolean {
  return senha.length >= 12
    && /[A-Z]/.test(senha)
    && /[a-z]/.test(senha)
    && /[0-9]/.test(senha)
    && /[^A-Za-z0-9]/.test(senha);
}

/**
 * Valida EAN-13 com d\u00edgito verificador
 * @param {string} ean - EAN a ser validado
 * @returns {boolean} True se v\u00e1lido
 * @example
 * validarEan13('7891234567890') // true
 * validarEan13('7891234567891') // false
 */
export function validarEan13(ean: string): boolean {
  if (!/^\d{13}$/.test(ean)) return false;
  const sum = ean.split('').slice(0, 12).reduce((acc, d, i) => {
    return acc + parseInt(d) * (i % 2 === 0 ? 1 : 3);
  }, 0);
  const dv = (10 - (sum % 10)) % 10;
  return dv === parseInt(ean[12]);
}