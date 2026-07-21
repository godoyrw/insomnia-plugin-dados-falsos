/**
 * Gerador de Dados Bancários
 * ==========================
 * Responsável por gerar dados bancários sintéticos para testes.
 *
 * Os valores gerados seguem formatos comuns utilizados por bancos
 * brasileiros, porém não representam contas reais.
 *
 * Chaves Pix podem ser aleatórias, CPF, e-mail ou telefone no padrão E.164.
 *
 * @module generators/bancario
 */

import { pickRandom, randInt } from '../utils';
import { ACCOUNT_TYPES, BANKS } from '../constants/banking';
import { InsomniaContext } from '../types';
import { genCpf } from './cpf';
import { genEmail, genCellphone } from './contact';
import { genUuid } from './identifiers';

/**
 * Gera uma agência bancária sintética.
 *
 * Formato: XXXX (4 dígitos)
 *
 * @returns {string} Agência com 4 dígitos.
 * @example
 * genAgencia() // "4532"
 */
export function genAgencia(): string {
  return randInt(1000, 9999).toString();
}

/**
 * Gera um número de conta bancária sintética.
 *
 * Formato: XXXXX-X (5 dígitos + dígito verificador)
 *
 * @returns {string} Conta bancária sintética.
 * @example
 * genConta() // "56789-3"
 */
export function genConta(): string {
  const numero = randInt(10000, 99999);
  const dv = randInt(0, 9);
  return `${numero}-${dv}`;
}

/**
 * Gera banco no formato código FEBRABAN/COMPE e nome da instituição.
 *
 * @returns {string} Banco no formato "001 - Banco do Brasil".
 * @example
 * genCodigoBanco() // "341 - Itaú Unibanco"
 */
export function genCodigoBanco(): string {
  const bank = pickRandom([...BANKS]);
  return `${bank.code} - ${bank.name}`;
}

/**
 * Gera um tipo de conta bancária aceito pelo Pix.
 *
 * @returns {string} Tipo de conta: corrente, poupança ou pagamento.
 * @example
 * genTipoConta() // "corrente"
 */
export function genTipoConta(): string {
  return pickRandom([...ACCOUNT_TYPES]);
}

/**
 * Gera uma chave Pix Aleatória no formato UUID v4.
 *
 * Conforme definido pelo Banco Central do Brasil,
 * a chave Pix aleatória é um UUID v4.
 *
 * @returns {string} Chave Pix Aleatória (UUID v4).
 * @example
 * genPixAleatoria() // "550e8400-e29b-41d4-a716-446655440000"
 */
export function genPixAleatoria(): string {
  return genUuid();
}

/**
 * Gera uma chave Pix CPF válida.
 * Reaproveita `genCpf`, incluindo o suporte a `CPF_LIST` do Insomnia.
 *
 * @param {InsomniaContext} [context] - Contexto do Insomnia.
 * @returns {string} CPF de 11 dígitos válido como chave Pix.
 * @example
 * genChavePixCpf() // "12345678909"
 */
export function genChavePixCpf(context?: InsomniaContext): string {
  return genCpf(context);
}

/**
 * Gera uma chave Pix de e-mail válida.
 * Reaproveita `genEmail`, incluindo o suporte a `EMAIL_LIST` do Insomnia.
 *
 * @param {InsomniaContext} [context] - Contexto do Insomnia.
 * @returns {string} E-mail válido como chave Pix.
 * @example
 * genChavePixEmail() // "ana.souza.1234@example.com"
 */
export function genChavePixEmail(context?: InsomniaContext): string {
  return genEmail(undefined, context);
}

/**
 * Gera uma chave Pix de telefone brasileiro no formato internacional E.164.
 * Reaproveita `genCellphone`, incluindo o suporte a `CELULAR_LIST` do Insomnia.
 *
 * @param {InsomniaContext} [context] - Contexto do Insomnia.
 * @returns {string} Telefone no formato +55XXXXXXXXXXX.
 * @example
 * genChavePixTelefone() // "+5511998765432"
 */
export function genChavePixTelefone(context?: InsomniaContext): string {
  const digits = genCellphone(context).replace(/\D/g, '');
  return digits.startsWith('55') && digits.length === 13 ? `+${digits}` : `+55${digits}`;
}
