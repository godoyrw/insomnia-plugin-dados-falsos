/**
 * Constantes de Localização
 * ==========================
 * Dados geográficos brasileiros: cidades, bairros, ruas, estados e fusos horários.
 * Usadas pelos geradores de endereço para criar dados realistas.
 *
 * @module constants/locations
 */

/**
 * Tipos de logradouro reconhecidos no Brasil.
 *
 * Inclui desde os mais comuns (Rua, Avenida) até variações oficiais e regionais,
 * como Viela, Travessa, Rodovia, entre outros. Esta lista é usada para compor
 * nomes de ruas completos e validar a geração de endereços.
 *
 * @constant {string[]}
 * @example
 * // Retorna um tipo aleatório
 * pickRandom(STREET_TYPES) // "Avenida"
 */
export const STREET_TYPES: string[] = [
  'Rua', 'Avenida', 'Av.', 'Alameda', 'Travessa', 'Rodovia', 'Estrada', 'Praça',
  'Largo', 'Viela', 'Beco', 'Parque', 'Viaduto', 'Marginal', 'Via', 'Passagem',
  'Galeria', 'Jardim', 'Conjunto', 'Bloco', 'Quadra', 'Sítio', 'Chácara',
  'Fazenda', 'Granja', 'Colônia', 'Núcleo', 'Residencial', 'Condomínio',
  'Pátio', 'Terreiro', 'Escadaria', 'Escadão', 'Morro', 'Ladeira', 'Ponte',
  'Trecho', 'Rotatória', 'Via Expressa', 'Transversal', 'Longitudinal',
  'Prolongamento', 'Acesso', 'Área', 'Balão', 'Cais', 'Calçada', 'Caminho',
  'Campo', 'Chapadão', 'Circular', 'Contorno', 'Corredor', 'Desvio',
  'Esplanada', 'Estação', 'Estradinha', 'Favela', 'Feira', 'Fonte', 'Ilha',
  'Loteamento', 'Mirante', 'Monumento', 'Outeiro', 'Passarela', 'Passeio',
  'Perimetral', 'Porto', 'Praia', 'Recanto', 'Rincão', 'Setor', 'Superquadra',
  'Trecho', 'Trilha', 'Vale', 'Vereda', 'Via de Acesso'
];

/**
 * Nomes de ruas e logradouros comuns no Brasil.
 *
 * A lista inclui nomes de plantas, árvores, personalidades históricas,
 * artistas, escritores, e elementos da natureza, refletindo a diversidade
 * das nomenclaturas encontradas em cidades brasileiras.
 *
 * @constant {string[]}
 * @example
 * // Retorna um nome de rua aleatório
 * pickRandom(STREET_NAMES) // "Paulista"
 */
export const STREET_NAMES: string[] = [
  'Jacarandá', 'Paineira', 'Ipê Amarelo', 'Manacá', 'Jasmim',
  'Lírio', 'Orquídea', 'Rosa', 'Violeta', 'Margarida',
  'Crisântemo', 'Hortênsia', 'Begônia', 'Azaleia', 'Magnólia',
  'Acácia', 'Angico', 'Figueira', 'Jequitibá', 'Cipreste',
  'Pinheiro', 'Carvalho', 'Oliveira', 'Palmeira', 'Mogno',
  'Cedro', 'Peroba', 'Araribá', 'Guarantã', 'Pitangueira',
  'Jabuticabeira', 'Goiabeira', 'Mangueira', 'Laranjeira', 'Limoeiro',
  'Riachuelo', 'Uruguai', 'Paraguai', 'Bolívia', 'Argentina',
  'Rui Barbosa', 'Joaquim Nabuco', 'Eusébio de Queirós', 'Visconde do Rio Branco', 'José Bonifácio',
  'Anchieta', 'São João Batista', 'São Sebastião', 'Sant\'Ana', 'Nossa Senhora Aparecida',
  'Nossa Senhora do Carmo', 'Nossa Senhora da Conceição', 'Nossa Senhora de Fátima', 'São José', 'São Pedro',
  'Cândido Portinari', 'Tarsila do Amaral', 'Anita Malfatti', 'Di Cavalcanti', 'Aleijadinho',
  'Oscar Niemeyer', 'Burle Marx', 'Villa-Lobos', 'Tom Jobim', 'Vinicius de Moraes',
  'Carlos Drummond', 'Guimarães Rosa', 'Clarice Lispector', 'Machado de Assis', 'Olavo Bilac',
  'Álvares de Azevedo', 'Casimiro de Abreu', 'Gonçalves Dias', 'José de Alencar', 'Monteiro Lobato',
  'Raul Pompeia', 'Lima Barreto', 'Aluísio Azevedo', 'Graciliano Ramos', 'Érico Veríssimo',
  'Manoel Bandeira', 'Cecília Meireles', 'Jorge Amado', 'Zélia Gattai', 'Mário de Andrade',
  'Oswald de Andrade', 'Menotti Del Picchia', 'Alcântara Machado', 'Venceslau Brás', 'Delfim Moreira',
  'Nilo Peçanha', 'Hermes da Fonseca', 'Afonso Pena', 'Francisco Glicério', 'Barão de Cotegipe',
  'Sabiá', 'Andorinha', 'Rouxinol', 'Canário', 'Beija-flor'
];

/**
 * Bairros das principais cidades brasileiras.
 *
 * A lista contém bairros conhecidos de São Paulo (capital) e algumas outras
 * cidades, com foco em nomes de bairros reais e comuns para gerar endereços
 * verossímeis.
 *
 * @constant {string[]}
 * @example
 * // Retorna um bairro aleatório
 * pickRandom(NEIGHBORHOODS) // "Vila Mariana"
 */
export const NEIGHBORHOODS: string[] = [
  // A
  'Água Branca', 'Água Rasa', 'Alto de Pinheiros', 'Anhanguera', 'Aricanduva',
  'Artur Alvim',
  // B
  'Barra Funda', 'Barragem', 'Bela Vista', 'Belém', 'Belenzinho', 'Bom Retiro',
  'Brás', 'Brasilândia', 'Butantã',
  // C
  'Cachoeirinha', 'Cambuci', 'Campo Belo', 'Campo Grande', 'Campo Limpo',
  'Cangaíba', 'Canindé', 'Capão Redondo', 'Capelinha', 'Carrão', 'Casa Verde',
  'Catumbi', 'Cerqueira César', 'Cidade Ademar', 'Cidade Dutra',
  'Cidade Jardim', 'Cidade Líder', 'Cidade Tiradentes', 'Colônia', 'Consolação',
  'Corisco', 'Cursino',
  // E
  'Engenho Velho', 'Ermelino Matarazzo',
  // F
  'Ferreira', 'Freguesia do Ó', 'Furnas',
  // G
  'Glicério', 'Grajaú', 'Granja Julieta', 'Guaianases',
  'Guarapiranga',
  // H
  'Higienópolis',
  // I
  'Iguatemi', 'Indianópolis', 'Interlagos', 'Ipiranga', 'Itaim Bibi',
  'Itaim Paulista', 'Itaquera',
  // J
  'Jabaquara', 'Jaçanã', 'Jaguara', 'Jaguaré', 'Jaraguá', 'Jardim Amália',
  'Jardim América', 'Jardim Ângela', 'Jardim Boa Vista', 'Jardim Europa',
  'Jardim Helena', 'Jardim Iva', 'Jardim Marajoara', 'Jardim Paulista',
  'Jardim São Luís', 'Jardim Vera Cruz', 'Jardim Vista Alegre',
  // L
  'Lapa', 'Liberdade', 'Limão', 'Luz',
  // M
  'Mandaqui', 'Marsilac', 'Mercado', 'Mirandópolis', 'Moema', 'Mooca',
  'Morumbi',
  // P
  'Pacaembu', 'Paraíso', 'Paraisópolis', 'Parelheiros', 'Pari',
  'Parque Continental', 'Parque do Carmo', 'Parque Vitória', 'Penha',
  'Perdizes', 'Pinheiros', 'Piraporinha', 'Planalto Paulista', 'Ponte Rasa',
  // R
  'Raposo Tavares', 'República', 'Rio Pequeno',
  // S
  'Sacomã', 'Santa Cecília', 'Santa Ifigênia', 'Santa Teresinha', 'Santana',
  'Santo Amaro', 'São Domingos', 'São Lucas', 'São Mateus',
  'São Miguel Paulista', 'São Rafael', 'Sapopemba', 'Saúde', 'Sé', 'Sumaré',
  // T
  'Tatuapé', 'Tremembé', 'Tucuruvi',
  // V
  'Vila Andrade', 'Vila Cachoeira', 'Vila Celeste', 'Vila Conceição',
  'Vila Cruzeiro', 'Vila Curuçá', 'Vila Esperança', 'Vila Formosa',
  'Vila Guilherme', 'Vila Jacuí', 'Vila Leopoldina', 'Vila Maria',
  'Vila Mariana', 'Vila Matilde', 'Vila Medeiros', 'Vila Pompeia',
  'Vila Prudente', 'Vila Rica', 'Vila Santa Isabel', 'Vila Sônia'
];

/**
 * Principais cidades brasileiras, incluindo todas as capitais e polos regionais.
 *
 * A lista contém 145 cidades, abrangendo todas as capitais estaduais e as
 * cidades mais populosas de cada região. É utilizada para gerar endereços
 * com nomes de cidades reais.
 *
 * @constant {string[]}
 * @example
 * // Retorna uma cidade aleatória
 * pickRandom(CITIES) // "Campinas"
 */
export const CITIES: string[] = [
  'Americana', 'Anápolis', 'Ananindeua', 'Aparecida de Goiânia', 'Aracaju',
  'Arapiraca', 'Araraquara', 'Atibaia', 'Bauru', 'Belém',
  'Belford Roxo', 'Belo Horizonte', 'Betim', 'Blumenau', 'Boa Vista',
  'Brasília', 'Camaçari', 'Campina Grande', 'Campinas', 'Campo Grande',
  'Campos dos Goytacazes', 'Canoas', 'Carapicuíba', 'Cariacica', 'Caruaru',
  'Cascavel', 'Caucaia', 'Caxias do Sul', 'Chapecó', 'Colombo',
  'Contagem', 'Cotia', 'Criciúma', 'Cruzeiro do Sul', 'Cuiabá',
  'Curitiba', 'Diadema', 'Divinópolis', 'Dourados', 'Duque de Caxias',
  'Feira de Santana', 'Florianópolis', 'Fortaleza', 'Foz do Iguaçu', 'Franca',
  'Francisco Morato', 'Goiânia', 'Governador Valadares', 'Gravataí', 'Guarulhos',
  'Guarujá', 'Hortolândia', 'Imperatriz', 'Ipatinga', 'Itajaí',
  'Itaquaquecetuba', 'Itatiba', 'Jaboatão dos Guararapes', 'Jacareí', 'Ji-Paraná',
  'Joinville', 'João Pessoa', 'Juazeiro', 'Juazeiro do Norte', 'Juiz de Fora',
  'Jundiaí', 'Lauro de Freitas', 'Londrina', 'Macapá', 'Maceió',
  'Manaus', 'Marabá', 'Maracanaú', 'Maringá', 'Mauá',
  'Montes Claros', 'Mossoró', 'Natal', 'Niterói', 'Nossa Senhora do Socorro',
  'Nova Iguaçu', 'Novo Hamburgo', 'Olinda', 'Osasco', 'Palmas',
  'Parauapebas', 'Parintins', 'Parnaíba', 'Parnamirim', 'Passo Fundo',
  'Paulista', 'Pelotas', 'Petrolina', 'Petrópolis', 'Picos',
  'Piracicaba', 'Ponta Grossa', 'Porto Alegre', 'Porto Velho', 'Praia Grande',
  'Recife', 'Ribeirão das Neves', 'Ribeirão Preto', 'Rio Branco', 'Rio de Janeiro',
  'Rondonópolis', 'Salvador', 'Salto', 'Santa Bárbara d\'Oeste', 'Santa Maria',
  'Santa Rita', 'Santarém', 'Santana', 'Santana de Parnaíba', 'Santo André',
  'Santos', 'São Bernardo do Campo', 'São Caetano do Sul', 'São Gonçalo', 'São José',
  'São José dos Campos', 'São José dos Pinhais', 'São Leopoldo', 'São Luís', 'São Paulo',
  'São Vicente', 'Serra', 'Sete Lagoas', 'Sobral', 'Sorocaba',
  'Sumaré', 'Taboão da Serra', 'Tatuí', 'Taubaté', 'Teresina',
  'Três Lagoas', 'Uberaba', 'Uberlândia', 'Valinhos', 'Várzea Grande',
  'Várzea Paulista', 'Vila Velha', 'Vitória', 'Vitória da Conquista', 'Volta Redonda'
];

/**
 * Siglas das Unidades Federativas do Brasil.
 *
 * Contém as 27 siglas oficiais de dois caracteres (AC, AL, ... TO),
 * incluindo o Distrito Federal. A ordem segue a disposição geográfica
 * e é utilizada para gerar estados em endereços.
 *
 * @constant {string[]}
 * @example
 * // Retorna uma sigla de estado aleatória
 * pickRandom(UF) // "SP"
 */
export const UF: string[] = [
  'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS',
  'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC',
  'SP', 'SE', 'TO'
];

/**
 * Fusos horários brasileiros no formato IANA (Olson).
 *
 * Abrange todos os fusos oficiais do Brasil: UTC-5 (Acre), UTC-4 (Amazonas, Rondônia, Roraima, Mato Grosso, Mato Grosso do Sul),
 * UTC-3 (maioria dos estados) e UTC-2 (Fernando de Noronha).
 * Inclui variações regionais para maior realismo na geração de dados.
 *
 * @constant {string[]}
 * @example
 * // Retorna um fuso horário aleatório
 * pickRandom(TIMEZONES) // "America/Sao_Paulo"
 */
export const TIMEZONES: string[] = [
  // UTC-5
  'America/Rio_Branco',
  // UTC-4
  'America/Manaus',
  'America/Porto_Velho',
  'America/Boa_Vista',
  'America/Cuiaba',
  'America/Campo_Grande',
  // UTC-3 (maioria)
  'America/Sao_Paulo',
  'America/Rio_de_Janeiro',  // mesmo fuso, variação regional
  'America/Belém',
  'America/Fortaleza',
  'America/Recife',
  'America/Maceio',
  'America/Bahia',
  'America/Araguaina',
  'America/Santarem',        // mesmo fuso, variação regional
  // UTC-2
  'America/Noronha'
];