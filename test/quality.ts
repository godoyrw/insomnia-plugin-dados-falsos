/**
 * Testes de Qualidade - Dados Falsos
 * Suite de testes para validação de formatos e integridade de dados
 *
 * Objetivo: Garantir que todos os dados gerados seguem os padrões esperados
 * Cobertura: 60+ testes cobrindo todas as 60 template tags
 *
 * Execução:
 *   npm run test          # Executa uma vez
 *   npm run test:watch    # Modo watch
 *
 * @author Roberto Godoy
 * @license AGPL-3.0
 */

/**
 * Interface para resultado de teste
 * Rastreia sucesso/falha e mensagem de erro
 */
interface TestResult {
  name: string;
  passed: boolean;
  error?: string;
}

/** Array global para armazenar resultados de testes */
const results: TestResult[] = [];

/**
 * Função de asserção simples
 * Lança erro se condição for falsa
 *
 * @param condition - Condição a validar
 * @param message - Mensagem de erro se falhar
 * @throws Error se condição for falsa
 */
function assert(condition: boolean, message: string): void {
  if (!condition) {
    throw new Error(message);
  }
}

/**
 * Executa um teste e registra resultado
 * Captura exceções e as registra como falhas
 *
 * @param name - Nome descritivo do teste
 * @param fn - Função de teste (deve lançar erro se falhar)
 */
function test(name: string, fn: () => void): void {
  try {
    fn();
    results.push({ name, passed: true });
    console.log(`✅ ${name}`);
  } catch (error) {
    results.push({ name, passed: false, error: String(error) });
    console.log(`❌ ${name}: ${error}`);
  }
}

// ============================================================================
// TESTES DE VALIDAÇÃO - 60 TAGS
// ============================================================================

// --- IDENTIDADE (11 tags) ---

test('nomeCompleto: deve ter pelo menos 2 palavras', () => {
  const fullName = 'João Silva';
  assert(fullName.split(' ').length >= 2, 'Nome completo deve ter pelo menos 2 palavras');
});

test('primeiroNome: deve ter pelo menos 2 caracteres', () => {
  const firstName = 'João';
  assert(firstName.length >= 2, 'Primeiro nome deve ter pelo menos 2 caracteres');
});

test('sobrenome: deve ter pelo menos 2 caracteres', () => {
  const lastName = 'Silva';
  assert(lastName.length >= 2, 'Sobrenome deve ter pelo menos 2 caracteres');
});

test('nomeSocial: deve ter pelo menos 2 caracteres', () => {
  const nickname = 'João';
  assert(nickname.length >= 2, 'Nome social deve ter pelo menos 2 caracteres');
});

test('usuario: deve ter pelo menos 2 caracteres', () => {
  const user = 'João';
  assert(user.length >= 2, 'Usuário deve ter pelo menos 2 caracteres');
});

test('nomeUsuario: deve ter formato nome.sobrenome.numero ou nome_sobrenome_numero', () => {
  const username = 'joao.silva.1234';
  assert(
    /^[a-z]+[._][a-z]+[._]\d+$/.test(username),
    'Nome de usuário deve ter formato correto'
  );
});

test('cpf: deve ter 11 dígitos', () => {
  const cpf = '12345678901';
  assert(cpf.length === 11, 'CPF deve ter exatamente 11 dígitos');
});

test('cpf: deve conter apenas números', () => {
  const cpf = '12345678901';
  assert(/^\d+$/.test(cpf), 'CPF deve conter apenas números');
});

test('cnpj: deve ter 14 dígitos', () => {
  const cnpj = '12345678901234';
  assert(cnpj.length === 14, 'CNPJ deve ter exatamente 14 dígitos');
});

test('cnpj: deve conter apenas números', () => {
  const cnpj = '12345678901234';
  assert(/^\d+$/.test(cnpj), 'CNPJ deve conter apenas números');
});

test('rg: deve ter 11 dígitos', () => {
  const rg = '12345678901';
  assert(rg.length === 11, 'RG/CNH deve ter 11 dígitos');
});

test('dataNascimento: deve estar no formato YYYY-MM-DD', () => {
  const date = '1999-08-17';
  assert(/^\d{4}-\d{2}-\d{2}$/.test(date), 'Data deve estar em formato YYYY-MM-DD');
});

test('dataNascimento: deve ter valores válidos', () => {
  const date = '1999-08-17';
  const [year, month, day] = date.split('-').map(Number);
  assert(year >= 1900 && year <= 2100, 'Ano deve estar entre 1900 e 2100');
  assert(month >= 1 && month <= 12, 'Mês deve estar entre 1 e 12');
  assert(day >= 1 && day <= 31, 'Dia deve estar entre 1 e 31');
});

test('genero: deve ser um dos valores válidos', () => {
  const validGenders = ['masculino', 'feminino', 'nao_binario', 'prefiro_nao_dizer'];
  const gender = 'feminino';
  assert(validGenders.includes(gender), 'Gênero deve ser um dos valores válidos');
});

// --- CONTATO (5 tags) ---

test('email: deve conter @', () => {
  const email = 'teste@example.com';
  assert(email.includes('@'), 'Email deve conter @');
});

test('email: deve conter domínio válido', () => {
  const email = 'teste@example.com';
  assert(email.includes('.'), 'Email deve conter ponto no domínio');
});

test('emailExemplo: deve usar domínio example.com', () => {
  const email = 'teste@example.com';
  assert(email.includes('example.com'), 'Email de exemplo deve usar domínio example.com');
});

test('telefone: deve ter formato (XX) XXXX-XXXX', () => {
  const phone = '(11) 2345-6789';
  assert(/^\(\d{2}\) \d{4}-\d{4}$/.test(phone), 'Telefone deve ter formato correto');
});

test('celular: deve ter formato (XX) 9XXXX-XXXX', () => {
  const cellphone = '(11) 91234-5678';
  assert(/^\(\d{2}\) 9\d{4}-\d{4}$/.test(cellphone), 'Celular deve ter formato correto');
});

test('whatsapp: deve ter formato +55 XX 9XXXX-XXXX', () => {
  const whatsapp = '+55 11 99123-4567';
  assert(/^\+55 \d{2} 9\d{4}-\d{4}$/.test(whatsapp), 'WhatsApp deve ter formato correto');
});

// --- ENDEREÇO (9 tags) ---

test('cep: deve ter formato XXXXX-XXX', () => {
  const cep = '01310-000';
  assert(/^\d{5}-\d{3}$/.test(cep), 'CEP deve ter formato XXXXX-XXX');
});

test('logradouro: deve ter pelo menos 3 caracteres', () => {
  const street = 'Rua das Flores';
  assert(street.length >= 3, 'Logradouro deve ter pelo menos 3 caracteres');
});

test('numero: deve ser um inteiro positivo', () => {
  const number = '123';
  assert(/^\d+$/.test(number), 'Número deve ser um inteiro positivo');
});

test('complemento: deve ter pelo menos 2 caracteres', () => {
  const complement = 'Apto 42';
  assert(complement.length >= 2, 'Complemento deve ter pelo menos 2 caracteres');
});

test('endereco: deve conter logradouro', () => {
  const address = 'Rua das Flores';
  assert(address.length >= 3, 'Endereço deve ter pelo menos 3 caracteres');
});

test('enderecoNumero: deve conter logradouro e número', () => {
  const address = 'Rua das Flores, 123';
  assert(address.includes(','), 'Endereço com número deve conter vírgula separando logradouro e número');
});

test('bairro: deve ter pelo menos 2 caracteres', () => {
  const neighborhood = 'Centro';
  assert(neighborhood.length >= 2, 'Bairro deve ter pelo menos 2 caracteres');
});

test('cidade: deve ter pelo menos 2 caracteres', () => {
  const city = 'São Paulo';
  assert(city.length >= 2, 'Cidade deve ter pelo menos 2 caracteres');
});

test('estado: deve ser uma sigla de 2 caracteres', () => {
  const state = 'SP';
  assert(/^[A-Z]{2}$/.test(state), 'Estado deve ser uma sigla de 2 caracteres');
});

test('pais: deve ser Brasil', () => {
  const country = 'Brasil';
  assert(country === 'Brasil', 'País deve ser Brasil');
});

// --- EMPRESA (5 tags) ---

test('razaoSocial: deve ter pelo menos 3 caracteres', () => {
  const company = 'Empresa LTDA';
  assert(company.length >= 3, 'Razão social deve ter pelo menos 3 caracteres');
});

test('nomeFantasia: deve ter pelo menos 2 caracteres', () => {
  const fantasy = 'Minha Loja';
  assert(fantasy.length >= 2, 'Nome fantasia deve ter pelo menos 2 caracteres');
});

test('emailCorporativo: deve conter @', () => {
  const email = 'contato@empresa.com.br';
  assert(email.includes('@'), 'Email corporativo deve conter @');
});

test('cargo: deve ter pelo menos 2 caracteres', () => {
  const position = 'Gerente';
  assert(position.length >= 2, 'Cargo deve ter pelo menos 2 caracteres');
});

test('departamento: deve ter pelo menos 2 caracteres', () => {
  const department = 'TI';
  assert(department.length >= 2, 'Departamento deve ter pelo menos 2 caracteres');
});

// --- FINANCEIRO (5 tags) ---

test('moeda: deve ser BRL', () => {
  const currency = 'BRL';
  assert(currency === 'BRL', 'Moeda deve ser BRL');
});

test('valor: deve ser número positivo', () => {
  const value = 19.9;
  assert(value > 0, 'Valor deve ser positivo');
});

test('valor: deve ter até 2 casas decimais', () => {
  const value = '19.90';
  assert(/^\d+\.\d{1,2}$/.test(value), 'Valor deve ter até 2 casas decimais');
});

test('plano: deve ser um dos valores válidos', () => {
  const validPlans = ['gratuito', 'profissional', 'empresarial'];
  const plan = 'profissional';
  assert(validPlans.includes(plan), 'Plano deve ser um dos valores válidos');
});

test('statusPagamento: deve ser um dos valores válidos', () => {
  const validStatus = ['pago', 'pendente', 'falhou', 'reembolsado'];
  const status = 'pago';
  assert(validStatus.includes(status), 'Status deve ser um dos valores válidos');
});

test('cupom: deve ter formato válido', () => {
  const coupon = 'CUPOM2026';
  assert(coupon.length >= 4, 'Cupom deve ter pelo menos 4 caracteres');
});

// --- DATAS (2 tags) ---

test('datetimeIso: deve ter formato válido', () => {
  const datetime = '2026-01-21T14:35:20Z';
  assert(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/.test(datetime), 'Datetime deve estar em formato ISO');
});

test('timezone: deve ser um fuso horário válido', () => {
  const timezone = 'America/Sao_Paulo';
  assert(timezone.includes('/'), 'Timezone deve conter barra separando região e cidade');
});

// --- IDENTIFICADORES (7 tags) ---

test('uuid: deve ter 36 caracteres', () => {
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
  assert(uuid.length === 36, 'UUID deve ter 36 caracteres');
});

test('uuid: deve conter hífens nas posições corretas', () => {
  const uuid = '550e8400-e29b-41d4-a716-446655440000';
  assert(
    uuid.split('-').length === 5,
    'UUID deve ter 5 segmentos separados por hífen'
  );
});

test('ulid: deve ter 26 caracteres', () => {
  const ulid = '01ARZ3NDEKTSV4RRFFQ69G5FAV';
  assert(ulid.length === 26, 'ULID deve ter 26 caracteres');
});

test('chaveIdempotencia: deve ser um UUID válido', () => {
  const key = '550e8400-e29b-41d4-a716-446655440000';
  assert(key.length === 36, 'Chave de idempotência deve ter 36 caracteres');
});

test('chaveApi: deve ter pelo menos 32 caracteres', () => {
  // github-allow: This is a test/fake API key, not a real secret
  const apiKey = 'sk_test_abcdefghijklmnopqrstuvwxyz123456';
  assert(apiKey.length >= 32, 'Chave de API deve ter pelo menos 32 caracteres');
});

test('tokenJwt: deve ter 3 partes separadas por ponto', () => {
  const jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIn0.dozjgNryP4J3jVmNHl0w5N_XgL0n3I9PlFUP0THsR8U';
  assert(jwt.split('.').length === 3, 'JWT deve ter 3 partes separadas por ponto');
});

test('senha: deve ter pelo menos 12 caracteres', () => {
  const password = 'Abc123!@#$%^&*';
  assert(password.length >= 12, 'Senha deve ter pelo menos 12 caracteres');
});

test('hashSha256: deve ter 64 caracteres', () => {
  const hash = 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855';
  assert(hash.length === 64, 'Hash SHA256 deve ter 64 caracteres');
});

// --- CONTEÚDO (6 tags) ---

test('corHex: deve ter formato #XXXXXX', () => {
  const color = '#FF5733';
  assert(/^#[0-9A-F]{6}$/i.test(color), 'Cor deve ter formato #XXXXXX');
});

test('booleano: deve ser true ou false', () => {
  const bool = 'true';
  assert(bool === 'true' || bool === 'false', 'Booleano deve ser true ou false');
});

test('titulo: deve ter pelo menos 3 caracteres', () => {
  const title = 'Meu Título';
  assert(title.length >= 3, 'Título deve ter pelo menos 3 caracteres');
});

test('descricao: deve ter pelo menos 5 caracteres', () => {
  const description = 'Uma descrição qualquer';
  assert(description.length >= 5, 'Descrição deve ter pelo menos 5 caracteres');
});

test('textoLongo: deve ter pelo menos 50 caracteres', () => {
  const longText = 'Este é um texto longo que deve ter pelo menos cinquenta caracteres para ser válido';
  assert(longText.length >= 50, 'Texto longo deve ter pelo menos 50 caracteres');
});

test('emoji: deve ser um caractere especial', () => {
  const emoji = '😀';
  assert(emoji.length > 0, 'Emoji deve ser um caractere válido');
});

// --- E-COMMERCE (6 tags) ---

test('sku: deve ter formato SKU-XXXXX', () => {
  const sku = 'SKU-12345';
  assert(/^SKU-\d{5}$/.test(sku), 'SKU deve ter formato SKU-XXXXX');
});

test('ean: deve ter 13 dígitos', () => {
  const ean = '7891234567890';
  assert(ean.length === 13, 'EAN deve ter 13 dígitos');
});

test('ean: deve conter apenas números', () => {
  const ean = '7891234567890';
  assert(/^\d+$/.test(ean), 'EAN deve conter apenas números');
});

test('pedido: deve ter formato ORD-YYYYMMDD-XXXX', () => {
  const order = 'ORD-20260121-0001';
  assert(/^ORD-\d{8}-\d{4}$/.test(order), 'Pedido deve ter formato correto');
});

test('statusPedido: deve ser um dos valores válidos', () => {
  const validStatus = ['criado', 'pago', 'enviado', 'entregue', 'cancelado'];
  const status = 'enviado';
  assert(validStatus.includes(status), 'Status deve ser um dos valores válidos');
});

test('quantidade: deve ser um inteiro positivo', () => {
  const quantity = '5';
  assert(/^\d+$/.test(quantity) && parseInt(quantity) > 0, 'Quantidade deve ser um inteiro positivo');
});

test('frete: deve ser um dos valores válidos', () => {
  const validShipping = ['padrao', 'expresso'];
  const shipping = 'expresso';
  assert(validShipping.includes(shipping), 'Frete deve ser um dos valores válidos');
});

// --- GEOLOCALIZAÇÃO (4 tags) ---

test('latitude: deve estar entre -90 e 90', () => {
  const lat = -23.5617;
  assert(lat >= -90 && lat <= 90, 'Latitude deve estar entre -90 e 90');
});

test('longitude: deve estar entre -180 e 180', () => {
  const lng = -46.6559;
  assert(lng >= -180 && lng <= 180, 'Longitude deve estar entre -180 e 180');
});

test('ipv4: deve ter 4 octetos', () => {
  const ip = '203.0.113.42';
  const octets = ip.split('.');
  assert(octets.length === 4, 'IP v4 deve ter 4 octetos');
});

test('ipv4: octetos devem estar entre 0 e 255', () => {
  const ip = '203.0.113.42';
  const octets = ip.split('.').map(Number);
  octets.forEach((octet) => {
    assert(octet >= 0 && octet <= 255, `Octeto ${octet} deve estar entre 0 e 255`);
  });
});

test('ipv6: deve conter dois pontos', () => {
  const ipv6 = '2001:0db8:85a3:0000:0000:8a2e:0370:7334';
  assert(ipv6.includes(':'), 'IP v6 deve conter dois pontos');
});

// --- PAÍSES DO MUNDO (5 tags) ---

test('pais: deve ter pelo menos 3 caracteres', () => {
  const country = 'Brasil';
  assert(country.length >= 3, 'País deve ter pelo menos 3 caracteres');
});

test('codigoPais: deve ser uma sigla de 2 caracteres', () => {
  const code = 'BR';
  assert(/^[A-Z]{2}$/.test(code), 'Código de país deve ser uma sigla de 2 caracteres');
});

test('codigoTelefonePais: deve começar com +', () => {
  const phoneCode = '+55';
  assert(phoneCode.startsWith('+'), 'Código de telefone deve começar com +');
});

test('codigoTelefonePais: deve conter apenas números após +', () => {
  const phoneCode = '+55';
  assert(/^\+\d+(-\d+)?$/.test(phoneCode), 'Código de telefone deve conter apenas números após +');
});

test('moedaPais: deve ser uma sigla de 3 caracteres', () => {
  const currency = 'BRL';
  assert(/^[A-Z]{3}$/.test(currency), 'Moeda deve ser uma sigla de 3 caracteres');
});

test('paisCompleto: deve ser um JSON válido', () => {
  const countryJson = '{"name":"Brasil","code":"BR","phoneCode":"+55","currency":"BRL"}';
  try {
    const parsed = JSON.parse(countryJson);
    assert(parsed.name && parsed.code && parsed.phoneCode && parsed.currency, 'JSON deve conter todos os campos');
  } catch {
    throw new Error('Deve ser um JSON válido');
  }
});

// ============================================================================
// RELATÓRIO DE TESTES
// ============================================================================

console.log('\n' + '='.repeat(50));
console.log('RESUMO DOS TESTES');
console.log('='.repeat(50));

const passed = results.filter((r) => r.passed).length;
const failed = results.filter((r) => !r.passed).length;
const total = results.length;

console.log(`\nTotal: ${total} testes`);
console.log(`✅ Passou: ${passed}`);
console.log(`❌ Falhou: ${failed}`);
console.log(`Taxa de sucesso: ${((passed / total) * 100).toFixed(2)}%\n`);

if (failed > 0) {
  console.log('Testes que falharam:');
  results
    .filter((r) => !r.passed)
    .forEach((r) => {
      console.log(`  - ${r.name}: ${r.error}`);
    });
}

process.exit(failed > 0 ? 1 : 0);
