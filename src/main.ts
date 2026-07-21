/**
 * Insomnia Plugin: Dados Falsos BR
 * =================================
 * Main do plugin
 *
 * @author Roberto Godoy
 * @license MIT
 * @version 3.0.4
 *
 * Este plugin fornece 98 template tags para gerar dados sintéticos em português,
 * com suporte a validação de documentos, formatação brasileira e casos de uso
 * de e-commerce, financeiro, geolocalização, educação e bancário.
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
