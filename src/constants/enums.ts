/**
 * Constantes de Enumerações
 * ==========================
 * Valores de enums para financeiro, e-commerce, conteúdo e utilitários
 * Usadas pelos geradores para criar dados realistas e validáveis
 *
 * @module constants/enums
 */

/** Planos de pagamento (gratuito, profissional, empresarial) */
export const PAYMENT_PLANS: string[] = ['gratuito', 'profissional', 'empresarial'];

/** Status de pagamento possíveis em uma transação */
export const PAYMENT_STATUS: string[] = ['pago', 'pendente', 'falhou', 'reembolsado'];

/** Status de pedido no ciclo de vida completo */
export const ORDER_STATUS: string[] = ['criado', 'pago', 'enviado', 'entregue', 'cancelado'];

/** Tipos de frete disponíveis */
export const SHIPPING_TYPES: string[] = ['padrao', 'expresso'];

/** Prefixos para geração de cupons de desconto */
export const COUPON_PREFIXES: string[] = ['BEMVINDO', 'QA', 'TESTE', 'PROMO', 'DESCONTO', 'NOVO'];

/** Títulos realistas de tickets, issues ou pedidos */
export const CONTENT_TITLES: string[] = [
  'Pedido de reembolso', 'Solicitacao de suporte', 'Relatorio de erro', 'Feedback do cliente',
  'Atualizacao de perfil', 'Cancelamento de servico', 'Reclamacao', 'Sugestao de melhoria'
];

/** Descrições realistas de problemas ou solicitações */
export const CONTENT_DESCRIPTIONS: string[] = [
  'Cliente solicitou ajuste no cadastro',
  'Problema identificado no fluxo de pagamento',
  'Necessario revisar dados de endereco',
  'Erro ao processar requisicao',
  'Validacao de documento pendente',
  'Atualizacao de informacoes bancarias'
];

/** Emojis para testes de encoding e suporte a Unicode */
export const EMOJIS: string[] = ['✅', '❌', '⚠️', '📦', '💳', '🔒', '⏰', '📧', '🎉', '🚀'];
