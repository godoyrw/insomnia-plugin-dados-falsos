/**
 * Dados bancários brasileiros usados pelos geradores.
 *
 * Os códigos seguem a identificação bancária FEBRABAN/COMPE e são destinados
 * exclusivamente à geração de dados sintéticos para testes.
 *
 * @module constants/banking
 */

/** Banco brasileiro identificado por código FEBRABAN/COMPE. */
export interface Bank {
  code: string;
  name: string;
}

/** Bancos e instituições de pagamento comuns no Brasil. */
export const BANKS: readonly Bank[] = [
  { code: '001', name: 'Banco do Brasil' },
  { code: '033', name: 'Santander' },
  { code: '104', name: 'Caixa Econômica Federal' },
  { code: '237', name: 'Bradesco' },
  { code: '260', name: 'Nu Pagamentos' },
  { code: '290', name: 'PagBank' },
  { code: '323', name: 'Mercado Pago' },
  { code: '336', name: 'C6 Bank' },
  { code: '341', name: 'Itaú Unibanco' },
  { code: '748', name: 'Sicredi' },
  { code: '756', name: 'Sicoob' }
];

/** Tipos de conta bancária aceitos pelo Pix. */
export const ACCOUNT_TYPES = ['corrente', 'poupança', 'pagamento'] as const;
