/**
 * Geradores de E-commerce
 * ========================
 * Módulo responsável por gerar dados de e-commerce e pedidos:
 * - SKU (Stock Keeping Unit)
 * - EAN (European Article Number / Código de barras)
 * - ID de pedido
 * - Status de pedido
 * - Quantidade
 * - Tipo de frete
 *
 * Todos os geradores seguem padrões realistas de e-commerce brasileiro
 * e são úteis para testes de APIs de pedidos, inventário e logística.
 *
 * @module generators/ecommerce
 */

import { randInt, pickRandom, pad } from '../utils';
import { ORDER_STATUS, SHIPPING_TYPES } from '../constants/enums';

/**
 * Gera SKU (Stock Keeping Unit)
 * Formato: SKU-XXXXX (5 dígitos)
 * Identificador único de produto no inventário
 *
 * @returns {string} SKU no formato SKU-XXXXX
 * @example
 * genSku() // "SKU-12345"
 */
export function genSku(): string {
  const prefix = 'SKU';
  const number = pad(randInt(10000, 99999), 5);
  return `${prefix}-${number}`;
}

/**
 * Gera EAN (European Article Number)
 * Formato: 13 dígitos (código de barras padrão)
 * Útil para testes de leitura de código de barras
 *
 * @returns {string} EAN com 13 dígitos
 * @example
 * genEan() // "7891234567890"
 */
export function genEan(): string {
  let ean = '';
  for (let i = 0; i < 13; i++) ean += String(randInt(0, 9));
  return ean;
}

/**
 * Gera ID de pedido
 * Formato: ORD-YYYYMMDD-XXXX
 * Inclui data e sequência para rastreabilidade
 *
 * @returns {string} ID de pedido no formato ORD-YYYYMMDD-XXXX
 * @example
 * genOrderId() // "ORD-20260121-0042"
 */
export function genOrderId(): string {
  const date = new Date();
  const dateStr = `${date.getFullYear()}${pad(date.getMonth() + 1, 2)}${pad(date.getDate(), 2)}`;
  const sequence = pad(randInt(1, 9999), 4);
  return `ORD-${dateStr}-${sequence}`;
}

/**
 * Gera status de pedido
 * Seleciona um dos status possíveis no ciclo de vida de um pedido
 *
 * @returns {string} Status de pedido (criado, pago, enviado, entregue, cancelado)
 * @example
 * genOrderStatus() // "enviado"
 */
export function genOrderStatus(): string {
  return pickRandom(ORDER_STATUS);
}

/**
 * Gera quantidade de itens
 * Seleciona quantidades realistas de pedidos (1 a 50 unidades)
 *
 * @returns {number} Quantidade de itens
 * @example
 * genQuantity() // 5
 */
export function genQuantity(): number {
  const quantities = [1, 2, 3, 5, 10, 25, 50];
  return pickRandom(quantities);
}

/**
 * Gera tipo de frete
 * Seleciona entre frete padrão ou expresso
 *
 * @returns {string} Tipo de frete (padrao ou expresso)
 * @example
 * genShippingType() // "expresso"
 */
export function genShippingType(): string {
  return pickRandom(SHIPPING_TYPES);
}
