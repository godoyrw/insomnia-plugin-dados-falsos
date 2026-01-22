/**
 * Geradores de Endereço
 * ======================
 * Módulo responsável por gerar dados de endereço brasileiro:
 * - CEP (formato XXXXX-XXX)
 * - Logradouro (rua, avenida, travessa, etc)
 * - Número e complemento
 * - Bairro, cidade, estado (UF)
 * - País (sempre BR)
 * - Fuso horário brasileiro
 *
 * Todos os dados seguem padrões realistas brasileiros e são úteis para
 * testes de APIs de entrega, localização e cadastro de endereços.
 *
 * @module generators/address
 */

import { randInt, pickRandom, pad } from '../utils';
import { STREET_TYPES, STREET_NAMES, NEIGHBORHOODS, CITIES, UF, TIMEZONES } from '../constants/locations';

/**
 * Gera CEP brasileiro válido
 * Formato: XXXXX-XXX (5 dígitos, hífen, 3 dígitos)
 * Não valida se o CEP existe realmente, apenas segue o formato
 *
 * @returns {string} CEP no formato XXXXX-XXX
 * @example
 * genCep() // "01310-100"
 */
export function genCep(): string {
  const part1 = pad(randInt(1000, 99999), 5);
  const part2 = pad(randInt(100, 999), 3);
  return `${part1}-${part2}`;
}

/**
 * Gera logradouro (rua, avenida, etc)
 * Combina tipo de logradouro com nome de rua
 *
 * @returns {string} Logradouro completo (ex: "Avenida Paulista")
 * @example
 * genStreet() // "Rua das Flores"
 */
export function genStreet(): string {
  return `${pickRandom(STREET_TYPES)} ${pickRandom(STREET_NAMES)}`;
}

/**
 * Gera número de endereço
 * Número entre 10 e 9999 (evita números muito baixos ou inválidos)
 *
 * @returns {string} Número do endereço
 * @example
 * genAddressNumber() // "1578"
 */
export function genAddressNumber(): string {
  return String(randInt(10, 9999));
}

/**
 * Gera endereço completo com rua e número
 * Combina logradouro e número em um endereço simples
 *
 * @returns {string} Endereço no formato "Rua X, 123"
 * @example
 * genAddress() // "Avenida Paulista, 1578"
 */
export function genAddress(): string {
  return `${genStreet()}, ${genAddressNumber()}`;
}

/**
 * Gera complemento de endereço
 * Exemplos: Apto 52, Bloco B, Sala 10, etc
 * Útil para endereços em prédios e condomínios
 *
 * @returns {string} Complemento do endereço
 * @example
 * genComplement() // "Apto 52"
 */
export function genComplement(): string {
  const types = ['Apto', 'Bloco', 'Casa', 'Sala', 'Loja'];
  const number = randInt(1, 999);
  return `${pickRandom(types)} ${number}`;
}

/**
 * Gera bairro
 * Seleciona um bairro da lista de bairros brasileiros conhecidos
 *
 * @returns {string} Bairro aleatório
 * @example
 * genNeighborhood() // "Bela Vista"
 */
export function genNeighborhood(): string {
  return pickRandom(NEIGHBORHOODS);
}

/**
 * Gera cidade
 * Seleciona uma cidade da lista de cidades brasileiras principais
 *
 * @returns {string} Cidade aleatória
 * @example
 * genCity() // "São Paulo"
 */
export function genCity(): string {
  return pickRandom(CITIES);
}

/**
 * Gera estado (UF)
 * Seleciona uma unidade federativa brasileira (sigla de 2 letras)
 *
 * @returns {string} Sigla de estado (ex: "SP", "RJ", "MG")
 * @example
 * genStateUf() // "SP"
 */
export function genStateUf(): string {
  return pickRandom(UF);
}

/**
 * Gera país
 * Sempre retorna "BR" (Brasil) - útil para manter consistência em testes
 *
 * @returns {string} Código de país "BR"
 * @example
 * genCountry() // "BR"
 */
export function genCountry(): string {
  return 'BR';
}

/**
 * Gera fuso horário brasileiro
 * Seleciona um dos 8 fusos horários do Brasil
 * Formato: America/Sao_Paulo, America/Manaus, etc
 *
 * @returns {string} Fuso horário no formato IANA
 * @example
 * genTimezone() // "America/Sao_Paulo"
 */
export function genTimezone(): string {
  return pickRandom(TIMEZONES);
}
