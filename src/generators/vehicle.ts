/**
 * Gerador de Placa Veicular
 * ==========================
 * Responsável por gerar placas veiculares brasileiras válidas.
 *
 * Dois formatos suportados:
 *
 *   • Antiga (padrão DENATRAN pré-2018)
 *     - Formato: AAA9999
 *     - 3 letras + 4 dígitos
 *     - Exemplo: ABC1234
 *
 *   • Mercosul (padrão vigente desde 2018)
 *     - Formato: AAA9A99
 *     - 3 letras + 1 dígito + 1 letra + 2 dígitos
 *     - Exemplo: ABC1D23
 *
 * @module generators/vehicle
 */

import { randInt, getEnvValue, pickRandom } from '../utils';
import { InsomniaContext } from '../types';

/** Letras válidas para placas (exclui I, O e Q para evitar confusão visual) */
const LETRAS = 'ABCDEFGHJKLMNPRSTUVWXYZ';

/**
 * Retorna uma letra aleatória válida para placa.
 * @returns {string} Letra maiúscula aleatória.
 */
function letraAleatoria(): string {
  return LETRAS[randInt(0, LETRAS.length - 1)];
}

/**
 * Retorna um dígito aleatório (0–9) como string.
 * @returns {string} Dígito aleatório.
 */
function digitoAleatorio(): string {
  return String(randInt(0, 9));
}

/**
 * Gera placa no formato antigo: AAA9999
 * Padrão DENATRAN utilizado antes de 2018.
 *
 * @returns {string} Placa no formato AAA9999.
 * @example
 * genPlacaAntiga() // "ABC1234"
 */
export function genPlacaAntiga(): string {
  return (
    letraAleatoria() +
    letraAleatoria() +
    letraAleatoria() +
    digitoAleatorio() +
    digitoAleatorio() +
    digitoAleatorio() +
    digitoAleatorio()
  );
}

/**
 * Gera placa no formato Mercosul: AAA9A99
 * Padrão vigente desde setembro de 2018.
 *
 * @returns {string} Placa no formato AAA9A99.
 * @example
 * genPlacaMercosul() // "ABC1D23"
 */
export function genPlacaMercosul(): string {
  return (
    letraAleatoria() +
    letraAleatoria() +
    letraAleatoria() +
    digitoAleatorio() +
    letraAleatoria() +
    digitoAleatorio() +
    digitoAleatorio()
  );
}

/**
 * Gera placa veicular brasileira aleatória.
 * Se PLACA_LIST estiver definida no contexto, seleciona uma placa da lista.
 * Sorteia entre o formato antigo (AAA9999) e o Mercosul (AAA9A99).
 *
 * @param {InsomniaContext} [context] - Contexto do Insomnia
 * @returns {string} Placa veicular aleatória.
 * @example
 * genPlaca()         // "ABC1234" ou "ABC1D23"
 * genPlaca(context)  // usa PLACA_LIST se disponível
 */
export function genPlaca(context?: InsomniaContext): string {
  const list = getEnvValue(context, 'PLACA_LIST');
  if (list && list.trim()) {
    const values = list.trim().split(/\s+/).filter(Boolean);
    if (values.length > 0) return pickRandom(values);
  }
  return Math.random() < 0.5 ? genPlacaAntiga() : genPlacaMercosul();
}

/**
 * Valida se uma string é uma placa veicular brasileira válida.
 * Aceita tanto o formato antigo quanto o Mercosul.
 *
 * @param {string} placa - Placa a ser validada.
 * @returns {boolean} true se válida.
 * @example
 * validarPlaca("ABC1234") // true  (antiga)
 * validarPlaca("ABC1D23") // true  (Mercosul)
 * validarPlaca("ABC123")  // false
 */
export function validarPlaca(placa: string): boolean {
  if (typeof placa !== 'string') return false;
  const p = placa.toUpperCase().trim();
  const antiga    = /^[A-Z]{3}\d{4}$/;
  const mercosul  = /^[A-Z]{3}\d[A-Z]\d{2}$/;
  return antiga.test(p) || mercosul.test(p);
}
