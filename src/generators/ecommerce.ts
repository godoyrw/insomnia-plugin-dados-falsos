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
 * Gera EAN-13 válido (código de barras)
 * - 12 primeiros dígitos aleatórios
 * - 13º dígito = dígito verificador calculado
 * 
 * @returns {string} EAN com 13 dígitos e DV válido
 * @example
 * genEan() // "7891234567890"
 */
export function genEan(): string {
  // Gera 12 dígitos aleatórios (base para o cálculo)
  let base = '';
  for (let i = 0; i < 12; i++) {
    base += String(randInt(0, 9));
  }

  // Calcula o dígito verificador (EAN-13)
  let sum = 0;
  for (let i = 0; i < 12; i++) {
    const digit = parseInt(base[i]);
    // Posições ímpares (índice 0,2,4...) multiplicam por 1
    // Posições pares (índice 1,3,5...) multiplicam por 3
    sum += digit * (i % 2 === 0 ? 1 : 3);
  }
  const checkDigit = (10 - (sum % 10)) % 10;

  return base + String(checkDigit);
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
