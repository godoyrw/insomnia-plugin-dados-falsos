/**
 * Tipos e Interfaces Compartilhadas
 * ==================================
 * Contrato para o plugin Insomnia
 * Define as interfaces usadas em todo o projeto
 *
 * @module types
 */

/** Contexto do Insomnia com acesso a variáveis de ambiente */
export interface InsomniaContext {
  context?: {
    environment?: Record<string, string>;
  };
  env?: Record<string, string>;
}

/** Argumento de template tag com suporte a tipos e valores padrão */
export interface TemplateTagArg {
  displayName: string;
  type: 'string' | 'enum';
  options?: Array<{ displayName: string; value: string }>;
  defaultValue?: string;
}

/** Template tag do Insomnia - contrato que o plugin implementa */
export interface TemplateTag {
  name: string;
  displayName: string;
  description: string;
  args: TemplateTagArg[];
  run: (context?: InsomniaContext, ...args: any[]) => Promise<string | number>;
}
