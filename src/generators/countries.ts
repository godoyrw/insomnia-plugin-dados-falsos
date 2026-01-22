/**
 * Geradores de Países do Mundo
 * Funções para gerar dados de países
 */

import { pickRandom } from '../utils';
import { COUNTRIES, COUNTRY_NAMES } from '../constants/countries';

/**
 * Gera um nome de país aleatório
 * @returns {string} Nome do país
 * @example
 * genCountryName() // "Brasil"
 */
export function genCountryName(): string {
  return pickRandom(COUNTRY_NAMES);
}

/**
 * Gera um código ISO de país aleatório (2 letras)
 * @returns {string} Código ISO do país
 * @example
 * genCountryCode() // "BR"
 */
export function genCountryCode(): string {
  return pickRandom(COUNTRIES).code;
}

/**
 * Gera um código de telefone de país aleatório
 * @returns {string} Código de telefone internacional
 * @example
 * genCountryPhoneCode() // "+55"
 */
export function genCountryPhoneCode(): string {
  return pickRandom(COUNTRIES).phoneCode;
}

/**
 * Gera uma moeda de país aleatória
 * @returns {string} Código da moeda (ISO 4217)
 * @example
 * genCountryCurrency() // "BRL"
 */
export function genCountryCurrency(): string {
  return pickRandom(COUNTRIES).currency;
}

/**
 * Gera um objeto completo de país aleatório
 * @returns {object} Objeto com name, code, phoneCode e currency
 * @example
 * genCountryFull() // { name: "Brasil", code: "BR", phoneCode: "+55", currency: "BRL" }
 */
export function genCountryFull(): object {
  return pickRandom(COUNTRIES);
}
