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
 * Calcula dígito verificador de CPF
 * Algoritmo: multiplicação decrescente + módulo 11
 *
 * @param {string} digits - Primeiros 9 ou 10 dígitos do CPF
 * @returns {number} Dígito verificador (0-9)
 * @example
 * calcCpfDigit('123456789') // 0
 */
export function calcCpfDigit(digits: string): number {
  let sum = 0;
  let multiplier = digits.length + 1;
  for (let i = 0; i < digits.length; i++) {
    sum += parseInt(digits[i]) * multiplier--;
  }
  const remainder = sum % 11;
  return remainder < 2 ? 0 : 11 - remainder;
}

/**
 * Calcula dígito verificador de CNPJ
 * Algoritmo: multiplicação decrescente com reset + módulo 11
 *
 * @param {string} digits - Primeiros 8 ou 12 dígitos do CNPJ
 * @returns {number} Dígito verificador (0-9)
 * @example
 * calcCnpjDigit('12345678') // 0
 */
export function calcCnpjDigit(digits: string): number {
  let sum = 0;
  let multiplier = digits.length === 8 ? 5 : 6;
  for (let i = 0; i < digits.length; i++) {
    sum += parseInt(digits[i]) * multiplier--;
    if (multiplier === 0) multiplier = digits.length === 8 ? 9 : 10;
  }
  const remainder = sum % 11;
  return remainder < 2 ? 0 : 11 - remainder;
}

/**
 * Gera CPF válido com dígitos verificadores
 * Cria 9 dígitos aleatórios e calcula os 2 dígitos verificadores
 *
 * @returns {string} CPF válido com 11 dígitos
 * @example
 * generateValidCpf() // "12345678901"
 */
export function generateValidCpf(): string {
  let cpf = '';
  for (let i = 0; i < 9; i++) {
    cpf += String(randInt(0, 9));
  }
  const digit1 = calcCpfDigit(cpf);
  const digit2 = calcCpfDigit(cpf + digit1);
  return cpf + digit1 + digit2;
}

/**
 * Gera CNPJ válido com dígitos verificadores
 * Cria 8 dígitos aleatórios e calcula os 2 dígitos verificadores
 *
 * @returns {string} CNPJ válido com 14 dígitos
 * @example
 * generateValidCnpj() // "12345678000195"
 */
export function generateValidCnpj(): string {
  let cnpj = '';
  for (let i = 0; i < 8; i++) {
    cnpj += String(randInt(0, 9));
  }
  const digit1 = calcCnpjDigit(cnpj);
  const digit2 = calcCnpjDigit(cnpj + digit1);
  return cnpj + digit1 + digit2;
}
