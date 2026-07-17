import { genPIS, validarPis } from './pis';
import { pickRandom, getEnvValue, parseNumbersByLength } from '../utils';
import { InsomniaContext } from '../types';

/**
 * Gerador de CNS (Cartão Nacional de Saúde)
 * =========================================
 * Responsável por gerar e validar números de CNS (Cartão Nacional de Saúde)
 * válidos conforme as regras oficiais do Ministério da Saúde.
 *
 * Existem dois formatos de CNS:
 *
 *   • CNS Definitivo
 *     - Inicia com os dígitos 1 ou 2;
 *     - É derivado de um número de PIS/PASEP válido;
 *     - Possui 15 dígitos.
 *
 *   • CNS Provisório
 *     - Inicia com os dígitos 7, 8 ou 9;
 *     - Utiliza algoritmo próprio baseado em Módulo 11.
 *
 * Este módulo gera CNS Definitivos e é capaz de validar tanto
 * CNS Definitivos quanto CNS Provisórios.
 *
 * @module generators/cns
 */

/**
 * Constrói um CNS Definitivo a partir de um PIS/PASEP válido.
 *
 * Estrutura do CNS:
 *
 *   PIS (11 dígitos)
 * + Sufixo (000 ou 001)
 * + Dígito Verificador
 *
 * O algoritmo oficial utiliza pesos decrescentes de 15 até 5.
 *
 * Caso o dígito calculado seja 10,
 * o sufixo passa de "000" para "001"
 * e o cálculo é realizado novamente.
 *
 * @param {string} pis Número de PIS/PASEP válido contendo 11 dígitos.
 * @returns {string} Número de CNS Definitivo válido contendo 15 dígitos.
 */
function buildFromPIS(pis: string): string {
  // Pesos oficiais utilizados pelo algoritmo do CNS
  const weights = [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5];

  let sum = 0;

  // Calcula a soma ponderada dos 11 dígitos do PIS
  for (let i = 0; i < 11; i++) {
    sum += Number(pis[i]) * weights[i];
  }

  // Calcula o resto da divisão por 11
  let remainder = sum % 11;

  // Calcula o dígito verificador
  let dv = 11 - remainder;

  // Regra oficial:
  // caso o resultado seja 11,
  // o dígito passa a ser zero.
  if (dv === 11) {
    dv = 0;
  }

  // Sufixo padrão utilizado na maioria dos casos
  let suffix = '000';

  // Caso especial previsto pelo algoritmo oficial
  if (dv === 10) {
    // Soma 2 para compensar a troca do sufixo
    sum += 2;

    remainder = sum % 11;
    dv = 11 - remainder;

    // Utiliza sufixo alternativo
    suffix = '001';

    if (dv === 11) {
      dv = 0;
    }
  }

  return pis + suffix + dv;
}

/**
 * Gera um número de CNS Definitivo válido.
 * Se CNS_LIST estiver definida no contexto, seleciona um CNS da lista.
 *
 * @param {InsomniaContext} [context] - Contexto do Insomnia
 * @returns {string} Número de CNS válido com 15 dígitos.
 *
 * @example
 * genCNS()         // "123456789010004"
 * genCNS(context)  // usa CNS_LIST se disponível
 */
export function genCNS(context?: InsomniaContext): string {
  const list = getEnvValue(context, 'CNS_LIST');
  if (list && list.trim()) {
    const values = parseNumbersByLength(list, 15);
    if (values.length > 0) return pickRandom(values);
  }
  return buildFromPIS(genPIS());
}

/**
 * Valida um número de CNS.
 *
 * O processo identifica automaticamente o tipo do CNS:
 *
 * • 1 ou 2 → CNS Definitivo
 * • 7, 8 ou 9 → CNS Provisório
 *
 * Para CNS Definitivo:
 *
 *   - valida o PIS;
 *   - reconstrói o CNS;
 *   - compara o resultado.
 *
 * Para CNS Provisório:
 *
 *   - calcula a soma ponderada dos 15 dígitos;
 *   - verifica se o resultado é divisível por 11.
 *
 * @param {string} cns Número do CNS a ser validado.
 * @returns {boolean} Retorna true se o CNS for válido; caso contrário, false.
 *
 * @example
 * validarCns("123456789010004")
 * // true
 */
export function validarCns(cns: string): boolean {
  // Verifica se possui exatamente 15 dígitos numéricos
  if (!/^\d{15}$/.test(cns)) {
    return false;
  }

  // Identifica o tipo do CNS através do primeiro dígito
  const first = cns[0];

  /**
   * CNS Definitivo
   */
  if (first === '1' || first === '2') {
    // Extrai o PIS utilizado na composição do CNS
    const pis = cns.substring(0, 11);

    // O PIS também deve ser válido
    if (!validarPis(pis)) {
      return false;
    }

    // Reconstrói o CNS e compara
    return buildFromPIS(pis) === cns;
  }

  /**
   * CNS Provisório
   */
  if (first === '7' || first === '8' || first === '9') {
    // Pesos oficiais do algoritmo
    const weights = [
      15, 14, 13, 12, 11,
      10, 9, 8, 7, 6,
      5, 4, 3, 2, 1
    ];

    let sum = 0;

    // Calcula a soma ponderada dos 15 dígitos
    for (let i = 0; i < 15; i++) {
      sum += Number(cns[i]) * weights[i];
    }

    // CNS provisório é válido quando a soma é divisível por 11
    return sum % 11 === 0;
  }

  // Prefixo inválido
  return false;
}