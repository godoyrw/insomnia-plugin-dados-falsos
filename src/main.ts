/**
 * Insomnia Plugin: Dados Falsos BR
 * =================================
 * Main do plugin
 *
 * @author Roberto Godoy
 * @license AGPL-3.0
 * @version 1.0.0
 *
 * Este plugin fornece 65 template tags para gerar dados fake em português,
 * com suporte a validação de documentos (CPF, CNPJ), formatação brasileira
 * e casos de uso reais (e-commerce, financeiro, geolocalização).
 *
 * Arquitetura Modular:
 * - src/types.ts: Interfaces compartilhadas
 * - src/utils.ts: Funções utilitárias
 * - src/constants/: Dados constantes organizados por categoria
 * - src/generators/: Funções geradoras organizadas por domínio
 * - src/main.ts: Ponto de entrada que exporta templateTags
 *
 * @module main
 */

import { templateTags } from './constants/templateTags';

/**
 * Exporta as template tags para o Insomnia
 * O Insomnia carrega este módulo e acessa a propriedade templateTags
 */
module.exports.templateTags = templateTags;
