/**
 * Constantes de Localização
 * ==========================
 * Dados geográficos brasileiros: cidades, bairros, ruas, estados e fusos horários
 * Usadas pelos geradores de endereço para criar dados realistas
 *
 * @module constants/locations
 */

/** Tipos de logradouro (Rua, Avenida, Travessa, etc) */
export const STREET_TYPES: string[] = ['Rua', 'Avenida', 'Travessa', 'Alameda', 'Estrada', 'Praca', 'Largo', 'Viela'];

/** Nomes de ruas e logradouros brasileiros comuns */
export const STREET_NAMES: string[] = [
  'das Flores', 'Paulista', 'Brasil', 'Santo Antonio', 'Dom Pedro I',
  '7 de Setembro', 'Castro Alves', 'Monte Alegre', 'Rio Branco', 'Getulio Vargas',
  'Tiradentes', 'Independencia', 'Republica', 'Liberdade', 'Esperanca',
  'Paz', 'Uniao', 'Fraternidade', 'Justica', 'Verdade'
];

/** Bairros brasileiros para endereços realistas */
export const NEIGHBORHOODS: string[] = [
  'Centro', 'Jardim America', 'Vila Mariana', 'Boa Vista', 'Santa Cecilia',
  'Bela Vista', 'Jardim das Acacias', 'Parque Industrial', 'Vila Nova', 'Santo Amaro',
  'Consolacao', 'Pinheiros', 'Itaim Bibi', 'Vila Olimpia', 'Mooca',
  'Tatuape', 'Penha', 'Itaquera', 'Guaianazes', 'Sapopemba'
];

/** Cidades brasileiras principais para geração de endereços */
export const CITIES: string[] = [
  'Sao Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Curitiba', 'Porto Alegre',
  'Florianopolis', 'Salvador', 'Recife', 'Fortaleza', 'Brasilia', 'Goiania',
  'Campinas', 'Santos', 'Niteroi', 'Manaus', 'Belem', 'Joao Pessoa', 'Maceio',
  'Teresina', 'Natal', 'Aracaju', 'Palmas', 'Rio Branco', 'Boa Vista', 'Macapa'
];

/** Unidades Federativas brasileiras (siglas de 2 letras) */
export const UF: string[] = [
  'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
];

/** Fusos horários brasileiros no formato IANA (8 fusos diferentes) */
export const TIMEZONES: string[] = [
  'America/Sao_Paulo', 'America/Manaus', 'America/Belem', 'America/Fortaleza',
  'America/Recife', 'America/Araguaina', 'America/Maceio', 'America/Bahia'
];
