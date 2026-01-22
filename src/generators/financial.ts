/**
 * Geradores de Financeiro
 * ========================
 * Módulo responsável por gerar dados financeiros:
 * - Moeda (sempre BRL para Brasil)
 * - Valor monetário realista
 * - Plano de pagamento (gratuito, profissional, empresarial)
 * - Status de pagamento (pago, pendente, falhou, reembolsado)
 * - Cupom de desconto
 *
 * Todos os valores e enums seguem padrões realistas de e-commerce
 * e sistemas de pagamento brasileiros.
 *
 * @module generators/financial
 */

import { randInt, pickRandom } from '../utils';
import { PAYMENT_PLANS, PAYMENT_STATUS, COUPON_PREFIXES } from '../constants/enums';

/**
 * Gera moeda
 * Sempre retorna "BRL" (Real Brasileiro) - útil para manter consistência
 *
 * @returns {string} Código de moeda "BRL"
 * @example
 * genCurrency() // "BRL"
 */
export function genCurrency(): string {
  return 'BRL';
}

/**
 * Gera valor monetário realista
 * Seleciona valores comuns em testes de e-commerce e pagamentos
 * Valores variam de R$ 19,90 a R$ 5.000,00
 *
 * @returns {number} Valor monetário em reais
 * @example
 * genAmount() // 199.00
 */
export function genAmount(): number {
  const amounts = [19.90, 99.90, 199.00, 299.50, 1200.50, 5000.00];
  return pickRandom(amounts);
}

/**
 * Gera plano de pagamento
 * Seleciona um dos planos típicos de SaaS: gratuito, profissional, empresarial
 *
 * @returns {string} Plano de pagamento
 * @example
 * genPaymentPlan() // "profissional"
 */
export function genPaymentPlan(): string {
  return pickRandom(PAYMENT_PLANS);
}

/**
 * Gera status de pagamento
 * Seleciona um dos status possíveis de uma transação
 *
 * @returns {string} Status de pagamento (pago, pendente, falhou, reembolsado)
 * @example
 * genPaymentStatus() // "pago"
 */
export function genPaymentStatus(): string {
  return pickRandom(PAYMENT_STATUS);
}

/**
 * Gera cupom de desconto
 * Formato: PREFIXO + número (ex: BEMVINDO10, QA25)
 * Útil para testes de validação de cupons
 *
 * @returns {string} Código de cupom
 * @example
 * genCoupon() // "BEMVINDO42"
 */
export function genCoupon(): string {
  const prefix = pickRandom(COUPON_PREFIXES);
  const number = randInt(10, 99);
  return `${prefix}${number}`;
}
