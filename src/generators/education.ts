/** 
 * Gerador de Dados Acadêmicos
 * ===========================
 *
 * Responsável pela geração de informações sintéticas relacionadas à formação
 * acadêmica. Os dados podem ser utilizados em testes de sistemas de RH,
 * ATS, plataformas educacionais, ERPs acadêmicos e ambientes de homologação.
 *
 * Recursos disponíveis:
 *  • Instituição de Ensino
 *  • Curso
 *  • Nível de Formação
 *  • Status Acadêmico
 *  • Período
 *  • Semestre
 *  • Ano
 *  • Registro completo
 *
 * Variáveis de ambiente suportadas:
 *  • EDUCATION_INSTITUTION_LIST
 *  • EDUCATION_COURSE_LIST
 *  • EDUCATION_LEVEL_LIST
 *  • EDUCATION_STATUS_LIST
 *  • EDUCATION_PERIOD_LIST
 *
 * @module generators/educacao
 */

import { pickRandom, getEnvValue, parseList, randInt } from '../utils';
import { InsomniaContext } from '../types';


/**
 * Lista padrão de Instituições de Ensino.
 */
const INSTITUTIONS = [
  'Universidade de São Paulo (USP)',
  'Universidade Estadual de Campinas (UNICAMP)',
  'Universidade Federal do Paraná (UFPR)',
  'Universidade Federal de Minas Gerais (UFMG)',
  'Universidade Federal do Rio de Janeiro (UFRJ)',
  'Universidade Federal do Rio Grande do Sul (UFRGS)',
  'Universidade de Brasília (UnB)',
  'Pontifícia Universidade Católica de São Paulo (PUC-SP)',
  'Pontifícia Universidade Católica do Rio de Janeiro (PUC-Rio)',
  'Pontifícia Universidade Católica de Minas Gerais (PUC Minas)',
  'Universidade Presbiteriana Mackenzie',
  'Fundação Getulio Vargas (FGV)',
  'Insper',
  'Universidade Anhembi Morumbi',
  'Universidade Cruzeiro do Sul',
  'Universidade Nove de Julho (UNINOVE)',
  'Centro Universitário SENAC',
  'Centro Universitário SENAI',
  'Universidade Estácio de Sá',
  'Universidade Paulista (UNIP)'
];

/**
 * Lista padrão de Cursos.
 */
const COURSES = [
  'Análise e Desenvolvimento de Sistemas',
  'Ciência da Computação',
  'Engenharia de Software',
  'Engenharia da Computação',
  'Sistemas de Informação',
  'Tecnologia da Informação',
  'Segurança da Informação',
  'Administração',
  'Ciências Contábeis',
  'Economia',
  'Direito',
  'Medicina',
  'Enfermagem',
  'Psicologia',
  'Odontologia',
  'Farmácia',
  'Arquitetura e Urbanismo',
  'Engenharia Civil',
  'Engenharia Mecânica',
  'Engenharia Elétrica',
  'Engenharia de Produção',
  'Marketing',
  'Publicidade e Propaganda',
  'Jornalismo',
  'Design Gráfico',
  'Logística',
  'Recursos Humanos',
  'Gestão Comercial',
  'Gestão Financeira',
  'Pedagogia'
];

/**
 * Retorna uma Instituição de Ensino.
 *
 * Caso EDUCATION_INSTITUTION_LIST esteja configurada,
 * será utilizado um valor da lista personalizada.
 *
 * @param context Contexto do Insomnia.
 * @returns Nome da instituição.
 */
export function genEducationInstitution(
  context?: InsomniaContext
): string {
  const list = getEnvValue(context, 'EDUCATION_INSTITUTION_LIST');

  if (list?.trim()) {
    const values = parseList(list);

    if (values.length > 0) {
      return pickRandom(values);
    }
  }

  return pickRandom(INSTITUTIONS);
}

/**
 * Retorna um Curso.
 *
 * Caso EDUCATION_COURSE_LIST esteja configurada,
 * será utilizado um valor da lista personalizada.
 *
 * @param context Contexto do Insomnia.
 * @returns Nome do curso.
 */
export function genEducationCourse(
  context?: InsomniaContext
): string {
  const list = getEnvValue(context, 'EDUCATION_COURSE_LIST');

  if (list?.trim()) {
    const values = parseList(list);

    if (values.length > 0) {
      return pickRandom(values);
    }
  }

  return pickRandom(COURSES);
}

/** Lista de níveis de formação. */
const LEVELS = [
  'Ensino Fundamental','Ensino Médio','Curso Técnico','Tecnólogo',
  'Graduação','Licenciatura','Bacharelado','Pós-Graduação',
  'MBA','Especialização','Mestrado','Doutorado','Pós-Doutorado'
];

/** Situações acadêmicas possíveis. */
const STATUS = [
  'Cursando','Concluído','Trancado','Cancelado','Transferido','Em andamento'
];

/** Períodos de estudo. */
const PERIODS = ['Manhã','Tarde','Noite','Integral','EAD'];

/**
 * Representa um registro acadêmico completo.
 */
export interface EducationData {
  institution: string;
  course: string;
  level: string;
  status: string;
  semester: string;
  year: number;
  period: string;
}

/**
 * Obtém uma lista personalizada das variáveis de ambiente.
 *
 * @param context Contexto do Insomnia.
 * @param key Nome da variável.
 * @returns Lista de valores ou lista vazia.
 */
function fromEnv(context: InsomniaContext | undefined, key: string): string[] {
  const list = getEnvValue(context, key);
  return list?.trim() ? parseList(list) : [];
}

/** Gera um nível de formação. */
export function genEducationLevel(context?: InsomniaContext): string {
  const list = fromEnv(context, 'EDUCATION_LEVEL_LIST');
  if (list.length > 0) return pickRandom(list);
  return pickRandom(LEVELS);
}

/** Gera um status acadêmico. */
export function genEducationStatus(context?: InsomniaContext): string {
  const list = fromEnv(context, 'EDUCATION_STATUS_LIST');
  if (list.length > 0) return pickRandom(list);
  return pickRandom(STATUS);
}

/** Gera um período de estudo. */
export function genEducationPeriod(context?: InsomniaContext): string {
  const list = fromEnv(context, 'EDUCATION_PERIOD_LIST');
  if (list.length > 0) return pickRandom(list);
  return pickRandom(PERIODS);
}

/**
 * Gera um semestre entre 1º e 12º.
 */
export function genEducationSemester(): string {
  return `${randInt(1,12)}º Semestre`;
}

/**
 * Gera um ano acadêmico aleatório entre 1990 e o ano atual.
 */
export function genEducationYear(): number {
  return randInt(2000, new Date().getFullYear());
}

/**
 * Gera um registro acadêmico completo.
 *
 * @param context Contexto do Insomnia.
 * @returns Objeto contendo todos os dados acadêmicos.
 */
export function genEducation(context?: InsomniaContext): EducationData {
  return {
    institution: genEducationInstitution(context),
    course: genEducationCourse(context),
    level: genEducationLevel(context),
    status: genEducationStatus(context),
    semester: genEducationSemester(),
    year: genEducationYear(),
    period: genEducationPeriod(context)
  };
}