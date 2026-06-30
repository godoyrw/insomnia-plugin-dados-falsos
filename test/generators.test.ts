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

import { genCpf, genCnpj, genFullName, genFirstName, genLastName, genNickname, genUsername, genCnh, genBirthdate, genGender } from '../src/generators/identity';
import { genEmail, genEmailExample, genPhone, genCellphone, genWhatsapp } from '../src/generators/contact';
import { genCep, genStreet, genAddressNumber, genComplement, genAddress, genNeighborhood, genCity, genStateUf, genTimezone } from '../src/generators/address';
import { genCompanyName, genCompanyFantasyName, genCorporateEmail, genPosition, genDepartment } from '../src/generators/company';
import { genCurrency, genAmount, genPaymentPlan, genPaymentStatus, genCoupon } from '../src/generators/financial';
import { genDatetimeIso } from '../src/generators/datetime';
import { genUuid, genUlid, genIdempotencyKey, genApiKey, genJwtToken, genPassword, genSha256Hash } from '../src/generators/identifiers';
import { genHexColor, genBoolean, genContentTitle, genContentDescription, genLongText, genEmoji } from '../src/generators/content';
import { genSku, genEan, genOrderId, genOrderStatus, genQuantity, genShippingType } from '../src/generators/ecommerce';
import { genLatitude, genLongitude, genIpv4, genIpv6 } from '../src/generators/geo';
import { genCountryName, genCountryCode, genCountryPhoneCode, genCountryCurrency, genCountryFull } from '../src/generators/countries';

// ============================================================================
// FRAMEWORK DE TESTES
// ============================================================================

interface TestResult {
  name: string;
  passed: boolean;
  error?: string;
}

const results: TestResult[] = [];

function assert(condition: boolean, message: string): void {
  if (!condition) throw new Error(message);
}

function test(name: string, fn: () => void): void {
  const start = performance.now();
  try {
    fn();
    const ms = (performance.now() - start).toFixed(1);
    results.push({ name, passed: true });
    console.log(`  \x1b[32m✓\x1b[0m ${name} \x1b[37m(${ms}ms)\x1b[0m`);
  } catch (error) {
    const ms = (performance.now() - start).toFixed(1);
    results.push({ name, passed: false, error: String(error) });
    console.log(`  \x1b[31m✗\x1b[0m \x1b[1m${name}\x1b[0m \x1b[37m(${ms}ms)\x1b[0m`);
    console.log(`    \x1b[31m→ ${error}\x1b[0m`);
  }
}

// ============================================================================
// TESTES DE VALIDAÇÃO - 60 TAGS
// ============================================================================

// --- IDENTIDADE ---

test('nomeCompleto: deve ter pelo menos 2 palavras', () => {
  const v = genFullName();
  assert(v.split(' ').length >= 2, `Nome completo deve ter pelo menos 2 palavras: "${v}"`);
});

test('primeiroNome: deve ter pelo menos 2 caracteres', () => {
  const v = genFirstName();
  assert(v.length >= 2, `Primeiro nome deve ter pelo menos 2 caracteres: "${v}"`);
});

test('sobrenome: deve ter pelo menos 2 caracteres', () => {
  const v = genLastName();
  assert(v.length >= 2, `Sobrenome deve ter pelo menos 2 caracteres: "${v}"`);
});

test('nomeSocial: deve ter pelo menos 2 caracteres', () => {
  const v = genNickname();
  assert(v.length >= 2, `Nome social deve ter pelo menos 2 caracteres: "${v}"`);
});

test('nomeUsuario: deve ter formato nome.sobrenome.numero ou nome_sobrenome_numero', () => {
  const v = genUsername();
  assert(/^[a-z]+[._][a-z]+[._]\d+$/.test(v), `Nome de usuário deve ter formato correto: "${v}"`);
});

test('cpf: deve ter 11 dígitos', () => {
  const v = genCpf();
  assert(v.length === 11, `CPF deve ter exatamente 11 dígitos: "${v}"`);
});

test('cpf: deve conter apenas números', () => {
  const v = genCpf();
  assert(/^\d{11}$/.test(v), `CPF deve conter apenas números: "${v}"`);
});

test('cnpj: alfanumérico deve ter 14 caracteres', () => {
  const v = genCnpj();
  assert(v.length === 14, `CNPJ deve ter exatamente 14 caracteres: "${v}"`);
});

test('cnpj: alfanumérico deve ter base A-Z/0-9 e DVs numéricos', () => {
  const v = genCnpj();
  assert(/^[A-Z0-9]{12}\d{2}$/.test(v), `Base deve ser alfanumérica e DVs numéricos: "${v}"`);
});

test('cnpj: numérico deve ter 14 dígitos', () => {
  const v = genCnpj( false);
  assert(v.length === 14, `CNPJ numérico deve ter exatamente 14 dígitos: "${v}"`);
});

test('cnpj: numérico deve conter apenas números', () => {
  const v = genCnpj(false);
  assert(/^\d{14}$/.test(v), `CNPJ numérico deve conter apenas números: "${v}"`);
});

test('rg: deve ter 11 dígitos', () => {
  const v = genCnh();
  assert(v.length === 11, `RG/CNH deve ter 11 dígitos: "${v}"`);
});

test('dataNascimento: deve estar no formato YYYY-MM-DD', () => {
  const v = genBirthdate();
  assert(/^\d{4}-\d{2}-\d{2}$/.test(v), `Data deve estar em formato YYYY-MM-DD: "${v}"`);
});

test('dataNascimento: deve ter valores válidos', () => {
  const v = genBirthdate();
  const [year, month, day] = v.split('-').map(Number);
  assert(year >= 1900 && year <= 2100, `Ano inválido: ${year}`);
  assert(month >= 1 && month <= 12, `Mês inválido: ${month}`);
  assert(day >= 1 && day <= 31, `Dia inválido: ${day}`);
});

test('genero: deve ser um dos valores válidos', () => {
  const valid = ['masculino', 'feminino', 'nao_binario', 'prefiro_nao_dizer'];
  const v = genGender();
  assert(valid.includes(v), `Gênero inválido: "${v}"`);
});

// --- CONTATO ---

test('email: deve conter @', () => {
  const v = genEmail();
  assert(v.includes('@'), `Email deve conter @: "${v}"`);
});

test('email: deve conter domínio válido', () => {
  const v = genEmail();
  assert(v.includes('.'), `Email deve conter ponto no domínio: "${v}"`);
});

test('emailExemplo: deve usar domínio example.com', () => {
  const v = genEmailExample();
  assert(v.includes('example.com'), `Email de exemplo deve usar domínio example.com: "${v}"`);
});

test('telefone: deve ter formato (XX) XXXX-XXXX', () => {
  const v = genPhone();
  assert(/^\(\d{2}\) \d{4}-\d{4}$/.test(v), `Telefone deve ter formato correto: "${v}"`);
});

test('celular: deve ter formato (XX) 9XXXX-XXXX', () => {
  const v = genCellphone();
  assert(/^\(\d{2}\) 9\d{4}-\d{4}$/.test(v), `Celular deve ter formato correto: "${v}"`);
});

test('whatsapp: deve ter formato +55 XX 9XXXX-XXXX', () => {
  const v = genWhatsapp();
  assert(/^\+55 \d{2} 9\d{4}-\d{4}$/.test(v), `WhatsApp deve ter formato correto: "${v}"`);
});

// --- ENDEREÇO ---

test('cep: deve ter formato XXXXX-XXX', () => {
  const v = genCep();
  assert(/^\d{5}-\d{3}$/.test(v), `CEP deve ter formato XXXXX-XXX: "${v}"`);
});

test('logradouro: deve ter pelo menos 3 caracteres', () => {
  const v = genStreet();
  assert(v.length >= 3, `Logradouro deve ter pelo menos 3 caracteres: "${v}"`);
});

test('numero: deve ser um inteiro positivo', () => {
  const v = genAddressNumber();
  assert(/^\d+$/.test(v), `Número deve ser um inteiro positivo: "${v}"`);
});

test('complemento: deve ter pelo menos 2 caracteres', () => {
  const v = genComplement();
  assert(v.length >= 2, `Complemento deve ter pelo menos 2 caracteres: "${v}"`);
});

test('endereco: deve ter pelo menos 3 caracteres', () => {
  const v = genAddress();
  assert(v.length >= 3, `Endereço deve ter pelo menos 3 caracteres: "${v}"`);
});

test('enderecoNumero: deve conter logradouro e número', () => {
  const v = `${genStreet()}, ${genAddressNumber()}`;
  assert(v.includes(','), `Endereço com número deve conter vírgula: "${v}"`);
});

test('bairro: deve ter pelo menos 2 caracteres', () => {
  const v = genNeighborhood();
  assert(v.length >= 2, `Bairro deve ter pelo menos 2 caracteres: "${v}"`);
});

test('cidade: deve ter pelo menos 2 caracteres', () => {
  const v = genCity();
  assert(v.length >= 2, `Cidade deve ter pelo menos 2 caracteres: "${v}"`);
});

test('estado: deve ser uma sigla de 2 caracteres', () => {
  const v = genStateUf();
  assert(/^[A-Z]{2}$/.test(v), `Estado deve ser uma sigla de 2 letras: "${v}"`);
});

test('timezone: deve conter barra separando região e cidade', () => {
  const v = genTimezone();
  assert(v.includes('/'), `Timezone deve conter barra: "${v}"`);
});

// --- EMPRESA ---

test('razaoSocial: deve ter pelo menos 3 caracteres', () => {
  const v = genCompanyName();
  assert(v.length >= 3, `Razão social deve ter pelo menos 3 caracteres: "${v}"`);
});

test('nomeFantasia: deve ter pelo menos 2 caracteres', () => {
  const v = genCompanyFantasyName();
  assert(v.length >= 2, `Nome fantasia deve ter pelo menos 2 caracteres: "${v}"`);
});

test('emailCorporativo: deve conter @', () => {
  const v = genCorporateEmail();
  assert(v.includes('@'), `Email corporativo deve conter @: "${v}"`);
});

test('cargo: deve ter pelo menos 2 caracteres', () => {
  const v = genPosition();
  assert(v.length >= 2, `Cargo deve ter pelo menos 2 caracteres: "${v}"`);
});

test('departamento: deve ter pelo menos 2 caracteres', () => {
  const v = genDepartment();
  assert(v.length >= 2, `Departamento deve ter pelo menos 2 caracteres: "${v}"`);
});

// --- FINANCEIRO ---

test('moeda: deve ser BRL', () => {
  const v = genCurrency();
  assert(v === 'BRL', `Moeda deve ser BRL: "${v}"`);
});

test('valor: deve ser número positivo', () => {
  const v = genAmount();
  assert(v > 0, `Valor deve ser positivo: ${v}`);
});

test('valor: deve ter até 2 casas decimais', () => {
  const v = genAmount().toFixed(2);
  assert(/^\d+\.\d{1,2}$/.test(v), `Valor deve ter até 2 casas decimais: "${v}"`);
});

test('plano: deve ser um dos valores válidos', () => {
  const valid = ['gratuito', 'profissional', 'empresarial'];
  const v = genPaymentPlan();
  assert(valid.includes(v), `Plano inválido: "${v}"`);
});

test('statusPagamento: deve ser um dos valores válidos', () => {
  const valid = ['pago', 'pendente', 'falhou', 'reembolsado'];
  const v = genPaymentStatus();
  assert(valid.includes(v), `Status de pagamento inválido: "${v}"`);
});

test('cupom: deve ter pelo menos 4 caracteres', () => {
  const v = genCoupon();
  assert(v.length >= 4, `Cupom deve ter pelo menos 4 caracteres: "${v}"`);
});

// --- DATAS ---

test('datetimeIso: deve ter formato válido', () => {
  const v = genDatetimeIso();
  assert(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/.test(v), `Datetime deve estar em formato ISO: "${v}"`);
});

// --- IDENTIFICADORES ---

test('uuid: deve ter 36 caracteres', () => {
  const v = genUuid();
  assert(v.length === 36, `UUID deve ter 36 caracteres: "${v}"`);
});

test('uuid: deve ter 5 segmentos separados por hífen', () => {
  const v = genUuid();
  assert(v.split('-').length === 5, `UUID deve ter 5 segmentos: "${v}"`);
});

test('ulid: deve ter 26 caracteres', () => {
  const v = genUlid();
  assert(v.length === 26, `ULID deve ter 26 caracteres: "${v}"`);
});

test('chaveIdempotencia: deve ter 36 caracteres', () => {
  const v = genIdempotencyKey();
  assert(v.length === 36, `Chave de idempotência deve ter 36 caracteres: "${v}"`);
});

test('chaveApi: deve ter pelo menos 32 caracteres', () => {
  const v = genApiKey();
  assert(v.length >= 32, `Chave de API deve ter pelo menos 32 caracteres: "${v}"`);
});

test('tokenJwt: deve ter 3 partes separadas por ponto', () => {
  const v = genJwtToken();
  assert(v.split('.').length === 3, `JWT deve ter 3 partes: "${v}"`);
});

test('senha: deve ter pelo menos 12 caracteres', () => {
  const v = genPassword();
  assert(v.length >= 12, `Senha deve ter pelo menos 12 caracteres: "${v}"`);
});

test('hashSha256: deve ter 64 caracteres', () => {
  const v = genSha256Hash();
  assert(v.length === 64, `Hash SHA256 deve ter 64 caracteres: "${v}"`);
});

// --- CONTEÚDO ---

test('corHex: deve ter formato #XXXXXX', () => {
  const v = genHexColor();
  assert(/^#[0-9A-F]{6}$/i.test(v), `Cor deve ter formato #XXXXXX: "${v}"`);
});

test('booleano: deve ser true ou false', () => {
  const v = genBoolean();
  assert(v === 'true' || v === 'false', `Booleano deve ser true ou false: "${v}"`);
});

test('titulo: deve ter pelo menos 3 caracteres', () => {
  const v = genContentTitle();
  assert(v.length >= 3, `Título deve ter pelo menos 3 caracteres: "${v}"`);
});

test('descricao: deve ter pelo menos 5 caracteres', () => {
  const v = genContentDescription();
  assert(v.length >= 5, `Descrição deve ter pelo menos 5 caracteres: "${v}"`);
});

test('textoLongo: deve ter pelo menos 50 caracteres', () => {
  const v = genLongText();
  assert(v.length >= 50, `Texto longo deve ter pelo menos 50 caracteres: "${v}"`);
});

test('emoji: deve ter pelo menos 1 caractere', () => {
  const v = genEmoji();
  assert(v.length > 0, `Emoji deve ser um caractere válido: "${v}"`);
});

// --- E-COMMERCE ---

test('sku: deve ter formato SKU-XXXXX', () => {
  const v = genSku();
  assert(/^SKU-\d{5}$/.test(v), `SKU deve ter formato SKU-XXXXX: "${v}"`);
});

test('ean: deve ter 13 dígitos', () => {
  const v = genEan();
  assert(v.length === 13, `EAN deve ter 13 dígitos: "${v}"`);
});

test('ean: deve conter apenas números', () => {
  const v = genEan();
  assert(/^\d{13}$/.test(v), `EAN deve conter apenas números: "${v}"`);
});

test('pedido: deve ter formato ORD-YYYYMMDD-XXXX', () => {
  const v = genOrderId();
  assert(/^ORD-\d{8}-\d{4}$/.test(v), `Pedido deve ter formato correto: "${v}"`);
});

test('statusPedido: deve ser um dos valores válidos', () => {
  const valid = ['criado', 'pago', 'enviado', 'entregue', 'cancelado'];
  const v = genOrderStatus();
  assert(valid.includes(v), `Status de pedido inválido: "${v}"`);
});

test('quantidade: deve ser um inteiro positivo', () => {
  const v = genQuantity();
  assert(Number.isInteger(v) && v > 0, `Quantidade deve ser um inteiro positivo: ${v}`);
});

test('frete: deve ser um dos valores válidos', () => {
  const valid = ['padrao', 'expresso'];
  const v = genShippingType();
  assert(valid.includes(v), `Frete inválido: "${v}"`);
});

// --- GEOLOCALIZAÇÃO ---

test('latitude: deve estar entre -90 e 90', () => {
  const v = parseFloat(genLatitude());
  assert(v >= -90 && v <= 90, `Latitude deve estar entre -90 e 90: ${v}`);
});

test('longitude: deve estar entre -180 e 180', () => {
  const v = parseFloat(genLongitude());
  assert(v >= -180 && v <= 180, `Longitude deve estar entre -180 e 180: ${v}`);
});

test('ipv4: deve ter 4 octetos', () => {
  const v = genIpv4();
  assert(v.split('.').length === 4, `IP v4 deve ter 4 octetos: "${v}"`);
});

test('ipv4: octetos devem estar entre 0 e 255', () => {
  const v = genIpv4();
  v.split('.').map(Number).forEach(o => {
    assert(o >= 0 && o <= 255, `Octeto inválido ${o} em "${v}"`);
  });
});

test('ipv6: deve conter dois pontos', () => {
  const v = genIpv6();
  assert(v.includes(':'), `IP v6 deve conter dois pontos: "${v}"`);
});

// --- PAÍSES DO MUNDO ---

test('pais: deve ter pelo menos 3 caracteres', () => {
  const v = genCountryName();
  assert(v.length >= 3, `País deve ter pelo menos 3 caracteres: "${v}"`);
});

test('codigoPais: deve ser uma sigla de 2 caracteres', () => {
  const v = genCountryCode();
  assert(/^[A-Z]{2}$/.test(v), `Código de país deve ser uma sigla de 2 letras: "${v}"`);
});

test('codigoTelefonePais: deve começar com +', () => {
  const v = genCountryPhoneCode();
  assert(v.startsWith('+'), `Código de telefone deve começar com +: "${v}"`);
});

test('codigoTelefonePais: deve conter apenas números após +', () => {
  const v = genCountryPhoneCode();
  assert(/^\+\d+(-\d+)?$/.test(v), `Código de telefone inválido: "${v}"`);
});

test('moedaPais: deve ser uma sigla de 3 caracteres', () => {
  const v = genCountryCurrency();
  assert(/^[A-Z]{3}$/.test(v), `Moeda deve ser uma sigla de 3 letras: "${v}"`);
});

test('paisCompleto: deve ser um objeto com todos os campos', () => {
  const v = genCountryFull() as any;
  assert(v && v.name && v.code && v.phoneCode && v.currency, 'Objeto país deve conter todos os campos');
});

// ============================================================================
// RELATÓRIO DE TESTES
// ============================================================================

const passed = results.filter(r => r.passed).length;
const failed = results.filter(r => !r.passed).length;
const total  = results.length;
const pct    = ((passed / total) * 100).toFixed(0);

console.log('\n\x1b[37m' + '─'.repeat(50) + '\x1b[0m');
console.log(`\x1b[1;37m  Resultados\x1b[0m`);
console.log('\x1b[37m' + '─'.repeat(50) + '\x1b[0m');
console.log(`  \x1b[37mTotal   ${total} testes\x1b[0m`);
console.log(`  \x1b[32mPassou  ${passed}\x1b[0m`);
if (failed > 0) console.log(`  \x1b[31mFalhou  ${failed}\x1b[0m`);
console.log(`  \x1b[1;${failed === 0 ? '32' : '31'}mScore   ${pct}%\x1b[0m`);
console.log('\x1b[37m' + '─'.repeat(50) + '\x1b[0m\n');

if (failed > 0) {
  console.log('\x1b[31m  Falhas:\x1b[0m');
  results
    .filter(r => !r.passed)
    .forEach(r => {
      console.log(`  \x1b[31m✗ ${r.name}\x1b[0m`);
      console.log(`    \x1b[37m→ ${r.error}\x1b[0m`);
    });
  console.log();
}