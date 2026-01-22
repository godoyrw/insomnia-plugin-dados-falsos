/**
 * Geradores de Conteúdo
 * ======================
 * Módulo responsável por gerar dados de conteúdo e utilitários:
 * - Título e descrição
 * - Texto longo (200-500 caracteres)
 * - Emoji (para testes de encoding)
 * - Cor hexadecimal
 * - Booleano
 *
 * Útil para testes de APIs que lidam com conteúdo, comentários,
 * descrições de produtos e validação de encoding.
 *
 * @module generators/content
 */

import { pickRandom } from '../utils';
import { CONTENT_TITLES, CONTENT_DESCRIPTIONS, EMOJIS } from '../constants/enums';

/**
 * Gera cor hexadecimal aleatória
 * Formato: #XXXXXX (6 dígitos hexadecimais)
 * Útil para testes de validação de cores
 *
 * @returns {string} Cor em formato hexadecimal
 * @example
 * genHexColor() // "#a3c2f1"
 */
export function genHexColor(): string {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

/**
 * Gera booleano aleatório como string
 * Retorna "true" ou "false" como string
 * Útil para testes de parsing de booleanos
 *
 * @returns {string} "true" ou "false"
 * @example
 * genBoolean() // "true"
 */
export function genBoolean(): string {
  return Math.random() < 0.5 ? 'true' : 'false';
}

/**
 * Gera título de conteúdo
 * Seleciona um título realista de ticket/issue/pedido
 *
 * @returns {string} Título de conteúdo
 * @example
 * genContentTitle() // "Pedido de reembolso"
 */
export function genContentTitle(): string {
  return pickRandom(CONTENT_TITLES);
}

/**
 * Gera descrição de conteúdo
 * Seleciona uma descrição realista de problema/solicitação
 *
 * @returns {string} Descrição de conteúdo
 * @example
 * genContentDescription() // "Cliente solicitou ajuste no cadastro"
 */
export function genContentDescription(): string {
  return pickRandom(CONTENT_DESCRIPTIONS);
}

/**
 * Gera texto longo (200-500 caracteres)
 * Combina múltiplas sentenças para simular comentários/observações
 * Útil para testes de validação de comprimento de texto
 *
 * @returns {string} Texto longo com 200-500 caracteres
 * @example
 * genLongText() // "O cliente solicitou uma revisão completa do cadastro..."
 */
export function genLongText(): string {
  const sentences = [
    'O cliente solicitou uma revisao completa do cadastro.',
    'Necessario validar todos os documentos enviados.',
    'Pendente confirmacao de endereco e telefone.',
    'Aguardando resposta do departamento de compliance.',
    'Recomenda-se atualizacao das informacoes bancarias.',
    'Processo em andamento, sem previsao de conclusao.'
  ];
  let text = '';
  while (text.length < 200) {
    text += pickRandom(sentences) + ' ';
  }
  return text.substring(0, 500);
}

/**
 * Gera emoji aleatório
 * Seleciona um emoji da lista para testes de encoding
 * Útil para validar suporte a Unicode e emojis em APIs
 *
 * @returns {string} Emoji aleatório
 * @example
 * genEmoji() // "✅"
 */
export function genEmoji(): string {
  return pickRandom(EMOJIS);
}
