/**
 * Constantes de Negócios
 * =======================
 * Dados corporativos: departamentos, cargos, sufixos de empresa
 * Usadas pelos geradores de empresa para criar dados realistas
 *
 * @module constants/business
 */

/** Departamentos corporativos típicos de empresas brasileiras */
export const DEPARTMENTS: string[] = [
  'Tecnologia', 'Financeiro', 'Recursos Humanos', 'Vendas', 'Marketing',
  'Operacoes', 'Logistica', 'Qualidade', 'Administrativo', 'Diretoria'
];

/** Cargos e posições profissionais realistas */
export const POSITIONS: string[] = [
  'Analista de QA', 'Engenheiro de Software', 'Desenvolvedor Full Stack', 'Gerente de Projeto',
  'Analista de Sistemas', 'Arquiteto de Software', 'DevOps Engineer', 'Especialista em Seguranca',
  'Consultor', 'Diretor Executivo', 'Gerente Financeiro', 'Contador'
];

/** Sufixos legais de empresa para razão social (LTDA, S.A., ME, EPP, Eireli) */
export const COMPANY_SUFFIXES: string[] = ['LTDA', 'S.A.', 'ME', 'EPP', 'Eireli'];

/** Domínios corporativos para geração de email corporativo */
export const CORPORATE_DOMAINS: string[] = [
  'souzatech.com.br', 'empresa.com.br', 'corp.com.br', 'negocio.com.br'
];
