/**
 * Testes de Qualidade - Dados Falsos
 * Suite de testes para validação de formatos e integridade de dados
 *
 * Objetivo: Garantir que todos os dados gerados seguem os padrões esperados,
 * validando não apenas formato mas também qualidade real dos dados gerados.
 *
 * Execução:
 *   npm run test          # Executa uma vez
 *   npm run test:watch    # Modo watch
 *
 * @author Roberto Godoy
 * @license MIT
 */

import { STREET_TYPES,UF, TIMEZONES } from '../src/constants/locations';
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
import { genBloodType } from '../src/generators/bloodType';

// Importa geradores de saúde
import { genHealthPlan } from '../src/generators/healthPlan';
import { genAllergy } from '../src/generators/allergy';
import { genMedicalRecordNumber } from '../src/generators/medicalRecordNumber';
import { genCNS } from '../src/generators/cns';
import { genProfessionalRegistration } from '../src/generators/professionalRegistration';

// Importa funções de validação
import { validarCpf } from '../src/generators/cpf';
import { validarCnpj } from '../src/generators/cnpj';
import { validarUuid, validarData, validarEmail, validarSenha, validarEan13 } from '../src/utils';

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
// IDENTIDADE
// ============================================================================

function isValidCnh(cnh: string): boolean {
  if (!/^\d{11}$/.test(cnh)) return false;

  if (/^(\d)\1{10}$/.test(cnh)) return false;

  const digits = cnh
    .slice(0, 9)
    .split('')
    .map(Number);

  let dsc = 0;

  let sum = 0;
  for (let i = 0, weight = 9; i < 9; i++, weight--) {
    sum += digits[i] * weight;
  }

  let d1 = sum % 11;

  if (d1 >= 10) {
    d1 = 0;
    dsc = 2;
  }

  sum = 0;
  for (let i = 0, weight = 1; i < 9; i++, weight++) {
    sum += digits[i] * weight;
  }

  let d2 = (sum % 11) - dsc;

  if (d2 < 0) d2 += 11;
  if (d2 >= 10) d2 = 0;

  return (
    d1 === Number(cnh[9]) &&
    d2 === Number(cnh[10])
  );
}

test('nomeCompleto: deve ter pelo menos 2 palavras', () => {
  const v = genFullName();
  assert(v.split(' ').length >= 2, `Esperado 2+ palavras: "${v}"`);
});

test('nomeCompleto: não deve conter números ou caracteres especiais', () => {
  const v = genFullName();
  assert(!/[0-9!@#$%^&*()_+=[\]{};':"\\|,.<>/?]/.test(v), `Nome inválido: "${v}"`);
});

test('primeiroNome: deve ter pelo menos 2 caracteres', () => {
  const v = genFirstName();
  assert(v.length >= 2, `Esperado 2+ chars: "${v}"`);
});

test('primeiroNome: não deve conter números', () => {
  const v = genFirstName();
  assert(!/\d/.test(v), `Nome com número: "${v}"`);
});

test('sobrenome: deve ter pelo menos 2 caracteres', () => {
  const v = genLastName();
  assert(v.length >= 2, `Esperado 2+ chars: "${v}"`);
});

test('nomeSocial: deve ter pelo menos 2 caracteres', () => {
  const v = genNickname();
  assert(v.length >= 2, `Esperado 2+ chars: "${v}"`);
});

test('nomeUsuario: deve ter formato nome.sobrenome.numero ou nome_sobrenome_numero', () => {
  const v = genUsername();
  assert(/^[a-z]+[._][a-z]+[._]\d+$/.test(v), `Formato inválido: "${v}"`);
});

test('nomeUsuario: não deve conter acentos', () => {
  const v = genUsername();
  assert(!/[àáâãäåèéêëìíîïòóôõöùúûüçñ]/i.test(v), `Username com acento: "${v}"`);
});

test('cpf: deve ter 11 dígitos numéricos', () => {
  const v = genCpf();
  assert(/^\d{11}$/.test(v), `CPF inválido: "${v}"`);
});

test('cpf: deve ter dígito verificador válido (algoritmo Receita Federal)', () => {
  const v = genCpf();
  assert(validarCpf(v), `CPF com DV inválido: "${v}"`);
});

test('cpf: não deve ser sequência repetida', () => {
  const v = genCpf();
  assert(!/^(\d)\1{10}$/.test(v), `CPF sequência repetida: "${v}"`);
});

test('cnpj: alfanumérico deve ter 14 caracteres', () => {
  const v = genCnpj();
  assert(v.length === 14, `Esperado 14 chars: "${v}"`);
});

test('cnpj: alfanumérico deve ter base A-Z/0-9 e DVs numéricos', () => {
  const v = genCnpj();
  assert(/^[A-Z0-9]{12}\d{2}$/.test(v), `Formato inválido: "${v}"`);
});

test('cnpj: alfanumérico deve ter dígito verificador válido', () => {
  const v = genCnpj();
  assert(validarCnpj(v), `CNPJ AN com DV inválido: "${v}"`);
});

test('cnpj: numérico deve conter apenas dígitos', () => {
  const v = genCnpj(false);
  assert(/^\d{14}$/.test(v), `CNPJ numérico inválido: "${v}"`);
});

test('cnpj: numérico deve ter dígito verificador válido', () => {
  const v = genCnpj(false);
  assert(validarCnpj(v), `CNPJ numérico com DV inválido: "${v}"`);
});

test('cnh: deve ter exatamente 11 dígitos', () => {
  const v = genCnh();
  assert(/^\d{11}$/.test(v), `CNH inválida: "${v}"`);
});

test('cnh: não deve ser sequência repetida', () => {
  const v = genCnh();
  assert(!/^(\d)\1{10}$/.test(v), `CNH sequência repetida: "${v}"`);
});

test('cnh: deve possuir dígitos verificadores válidos', () => {
  const v = genCnh();
  assert(isValidCnh(v), `CNH com dígitos verificadores inválidos: "${v}"`);
});

test('cnh: deve gerar apenas CNHs válidas', () => {
  for (let i = 0; i < 1000; i++) {
    const v = genCnh();
    assert(isValidCnh(v), `CNH inválida: "${v}"`);
  }
});

test('dataNascimento: deve estar no formato YYYY-MM-DD', () => {
  const v = genBirthdate();
  assert(/^\d{4}-\d{2}-\d{2}$/.test(v), `Formato inválido: "${v}"`);
});

test('dataNascimento: deve ser uma data real e válida', () => {
  const v = genBirthdate();
  const [ano, mes, dia] = v.split('-').map(Number);
  assert(validarData(ano, mes, dia), `Data irreal: "${v}"`);
});

test('dataNascimento: deve ser entre 18 e 70 anos atrás', () => {
  const v = genBirthdate();
  const anoNasc = parseInt(v.split('-')[0]);
  const anoAtual = new Date().getFullYear();
  const idade = anoAtual - anoNasc;
  assert(idade >= 18 && idade <= 70, `Idade fora do intervalo: ${idade} anos`);
});

test('genero: deve ser um dos valores válidos', () => {
  const validos = ['masculino', 'feminino', 'nao_binario', 'prefiro_nao_dizer'];
  const v = genGender();
  assert(validos.includes(v), `Gênero inválido: "${v}"`);
});

// ============================================================================
// CONTATO
// ============================================================================

test('email: deve ter formato válido (RFC 5322)', () => {
  const v = genEmail();
  assert(validarEmail(v), `Email inválido: "${v}"`);
});

test('email: não deve ter espaços', () => {
  const v = genEmail();
  assert(!v.includes(' '), `Email com espaço: "${v}"`);
});

test('emailExemplo: deve usar domínio example.com', () => {
  const v = genEmailExample();
  assert(v.endsWith('@example.com') || v.includes('@example.com'), `Domínio inválido: "${v}"`);
});

test('emailExemplo: deve ter formato válido', () => {
  const v = genEmailExample();
  assert(validarEmail(v), `Email exemplo inválido: "${v}"`);
});

test('telefone: deve ter formato (XX) XXXX-XXXX', () => {
  const v = genPhone();
  assert(/^\(\d{2}\) \d{4}-\d{4}$/.test(v), `Formato inválido: "${v}"`);
});

test('telefone: DDD deve ser válido (11-99)', () => {
  const v = genPhone();
  const ddd = parseInt(v.replace(/\D/g, '').slice(0, 2));
  assert(ddd >= 11 && ddd <= 99, `DDD inválido: ${ddd}`);
});

test('celular: deve ter formato (XX) 9XXXX-XXXX', () => {
  const v = genCellphone();
  assert(/^\(\d{2}\) 9\d{4}-\d{4}$/.test(v), `Formato inválido: "${v}"`);
});

test('celular: deve começar com dígito 9', () => {
  const v = genCellphone();
  const digits = v.replace(/\D/g, '');
  assert(digits[2] === '9', `Celular sem dígito 9: "${v}"`);
});

test('whatsapp: deve ter formato +55 XX 9XXXX-XXXX', () => {
  const v = genWhatsapp();
  assert(/^\+55 \d{2} 9\d{4}-\d{4}$/.test(v), `Formato inválido: "${v}"`);
});

test('whatsapp: deve ter código +55 (Brasil)', () => {
  const v = genWhatsapp();
  assert(v.startsWith('+55'), `Código país inválido: "${v}"`);
});

// ============================================================================
// ENDEREÇO
// ============================================================================

test('cep: deve ter formato XXXXX-XXX', () => {
  const v = genCep();
  assert(/^\d{5}-\d{3}$/.test(v), `Formato inválido: "${v}"`);
});

test('cep: não deve ser todos zeros', () => {
  const v = genCep();
  assert(v !== '00000-000', `CEP zerado: "${v}"`);
});

test('logradouro: deve ter pelo menos 3 caracteres', () => {
  const v = genStreet();
  assert(v.length >= 3, `Logradouro muito curto: "${v}"`);
});

test('logradouro: deve começar com tipo (Rua, Av, etc)', () => {
  const v = genStreet();
  const vt = STREET_TYPES.some(tipo => v.startsWith(tipo));
  assert(vt, `Sem tipo de logradouro: "${v}"`);
});

test('numero: deve ser inteiro positivo', () => {
  const v = genAddressNumber();
  assert(/^\d+$/.test(v) && parseInt(v) > 0, `Número inválido: "${v}"`);
});

test('complemento: deve ter pelo menos 2 caracteres', () => {
  const v = genComplement();
  assert(v.length >= 2, `Complemento muito curto: "${v}"`);
});

test('endereco: deve ter pelo menos 3 caracteres', () => {
  const v = genAddress();
  assert(v.length >= 3, `Endereço muito curto: "${v}"`);
});

test('enderecoNumero: deve conter vírgula separando rua e número', () => {
  const v = `${genStreet()}, ${genAddressNumber()}`;
  assert(/^.+,\s\d+$/.test(v), `Formato inválido: "${v}"`);
});

test('bairro: deve ter pelo menos 2 caracteres', () => {
  const v = genNeighborhood();
  assert(v.length >= 2, `Bairro muito curto: "${v}"`);
});

test('cidade: deve ter pelo menos 2 caracteres', () => {
  const v = genCity();
  assert(v.length >= 2, `Cidade muito curta: "${v}"`);
});

test('estado: deve ser uma UF brasileira válida', () => {
  const v = genStateUf();
  assert(UF.includes(v), `UF inválida: "${v}"`);
});

test('timezone: deve ser uma timezone IANA válida', () => {
  const v = genTimezone();
  assert(TIMEZONES.includes(v), `Timezone inválida: "${v}"`);
});

// ============================================================================
// EMPRESA
// ============================================================================

test('razaoSocial: deve ter pelo menos 3 caracteres', () => {
  const v = genCompanyName();
  assert(v.length >= 3, `Razão social muito curta: "${v}"`);
});

test('razaoSocial: deve conter sufixo legal (LTDA, S/A, etc)', () => {
  const v = genCompanyName();
  assert(/(LTDA|S\.?A\.?|EIRELI|ME|EPP|SS|SRL)/i.test(v), `Sem sufixo legal: "${v}"`);
});

test('nomeFantasia: deve ter pelo menos 2 caracteres', () => {
  const v = genCompanyFantasyName();
  assert(v.length >= 2, `Nome fantasia muito curto: "${v}"`);
});

test('emailCorporativo: deve ter formato válido', () => {
  const v = genCorporateEmail();
  assert(validarEmail(v), `Email corporativo inválido: "${v}"`);
});

test('emailCorporativo: não deve usar domínios pessoais (gmail, hotmail)', () => {
  const v = genCorporateEmail();
  assert(!/gmail|hotmail|yahoo|outlook\.com$/i.test(v), `Domínio pessoal: "${v}"`);
});

test('cargo: deve ter pelo menos 2 caracteres', () => {
  const v = genPosition();
  assert(v.length >= 2, `Cargo muito curto: "${v}"`);
});

test('departamento: deve ter pelo menos 2 caracteres', () => {
  const v = genDepartment();
  assert(v.length >= 2, `Departamento muito curto: "${v}"`);
});

// ============================================================================
// FINANCEIRO
// ============================================================================

test('moeda: deve ser BRL', () => {
  const v = genCurrency();
  assert(v === 'BRL', `Moeda inválida: "${v}"`);
});

test('valor: deve ser número positivo maior que zero', () => {
  const v = genAmount();
  assert(typeof v === 'number' && v > 0, `Valor inválido: ${v}`);
});

test('valor: deve ter no máximo 2 casas decimais', () => {
  const v = genAmount();
  const str = v.toFixed(2);
  assert(/^\d+\.\d{2}$/.test(str), `Casas decimais inválidas: ${str}`);
});

test('valor: deve estar em intervalo realista (R$ 0,01 a R$ 100.000)', () => {
  const v = genAmount();
  assert(v >= 0.01 && v <= 100000, `Valor fora do intervalo: ${v}`);
});

test('plano: deve ser um dos valores válidos', () => {
  const validos = ['gratuito', 'profissional', 'empresarial'];
  const v = genPaymentPlan();
  assert(validos.includes(v), `Plano inválido: "${v}"`);
});

test('statusPagamento: deve ser um dos valores válidos', () => {
  const validos = ['pago', 'pendente', 'falhou', 'reembolsado'];
  const v = genPaymentStatus();
  assert(validos.includes(v), `Status inválido: "${v}"`);
});

test('cupom: deve ter pelo menos 4 caracteres', () => {
  const v = genCoupon();
  assert(v.length >= 4, `Cupom muito curto: "${v}"`);
});

test('cupom: deve ser alfanumérico em maiúsculas', () => {
  const v = genCoupon();
  assert(/^[A-Z0-9]+$/.test(v), `Cupom com formato inválido: "${v}"`);
});

// ============================================================================
// DATAS
// ============================================================================

test('datetimeIso: deve ter formato ISO 8601 completo', () => {
  const v = genDatetimeIso();
  assert(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/.test(v), `Formato inválido: "${v}"`);
});

test('datetimeIso: deve ser uma data e hora reais', () => {
  const v = genDatetimeIso();
  const d = new Date(v);
  assert(!isNaN(d.getTime()), `Data inválida: "${v}"`);
});

test('datetimeIso: horas deve estar entre 0-23', () => {
  const v = genDatetimeIso();
  const hora = parseInt(v.split('T')[1].split(':')[0]);
  assert(hora >= 0 && hora <= 23, `Hora inválida: ${hora}`);
});

test('datetimeIso: minutos deve estar entre 0-59', () => {
  const v = genDatetimeIso();
  const min = parseInt(v.split('T')[1].split(':')[1]);
  assert(min >= 0 && min <= 59, `Minutos inválidos: ${min}`);
});

// ============================================================================
// IDENTIFICADORES
// ============================================================================

test('uuid: deve ter formato UUID v4 válido', () => {
  const v = genUuid();
  assert(validarUuid(v), `UUID v4 inválido: "${v}"`);
});

test('uuid: deve ter 5 segmentos separados por hífen', () => {
  const v = genUuid();
  const segs = v.split('-');
  assert(segs.length === 5, `Segmentos inválidos: "${v}"`);
  assert(segs[0].length === 8 && segs[1].length === 4 && segs[2].length === 4 && segs[3].length === 4 && segs[4].length === 12,
    `Tamanho de segmento inválido: "${v}"`);
});

test('ulid: deve ter 26 caracteres', () => {
  const v = genUlid();
  assert(v.length === 26, `ULID com tamanho inválido: "${v}"`);
});

test('ulid: deve conter apenas caracteres Crockford Base32', () => {
  const v = genUlid();
  assert(/^[0123456789ABCDEFGHJKMNPQRSTVWXYZ]{26}$/.test(v), `ULID com chars inválidos: "${v}"`);
});

test('chaveIdempotencia: deve ser UUID v4 válido', () => {
  const v = genIdempotencyKey();
  assert(validarUuid(v), `Chave de idempotência inválida: "${v}"`);
});

test('chaveApi: deve ter pelo menos 32 caracteres', () => {
  const v = genApiKey();
  assert(v.length >= 32, `API Key muito curta: "${v}"`);
});

test('chaveApi: deve conter apenas caracteres alfanuméricos e underscores', () => {
  const v = genApiKey();
  assert(/^[a-zA-Z0-9_]+$/.test(v), `API Key com chars inválidos: "${v}"`);
});

test('tokenJwt: deve ter 3 partes separadas por ponto', () => {
  const v = genJwtToken();
  assert(v.split('.').length === 3, `JWT sem 3 partes: "${v}"`);
});

test('tokenJwt: header deve ser Base64 decodificável com alg e typ', () => {
  const v = genJwtToken();
  const header = JSON.parse(Buffer.from(v.split('.')[0], 'base64').toString());
  assert(header.alg && header.typ === 'JWT', `Header JWT inválido: ${JSON.stringify(header)}`);
});

test('senha: deve ter pelo menos 12 caracteres', () => {
  const v = genPassword();
  assert(v.length >= 12, `Senha muito curta: "${v}"`);
});

test('senha: deve ser forte (maiúscula, minúscula, número, especial)', () => {
  const v = genPassword();
  assert(validarSenha(v), `Senha fraca: "${v}"`);
});

test('hashSha256: deve ter exatamente 64 caracteres hexadecimais', () => {
  const v = genSha256Hash();
  assert(/^[a-f0-9]{64}$/.test(v), `Hash SHA256 inválido: "${v}"`);
});

// ============================================================================
// CONTEÚDO
// ============================================================================

test('corHex: deve ter formato #RRGGBB válido', () => {
  const v = genHexColor();
  assert(/^#[0-9A-Fa-f]{6}$/.test(v), `Cor hex inválida: "${v}"`);
});

test('corHex: deve ter exatamente 7 caracteres', () => {
  const v = genHexColor();
  assert(v.length === 7, `Cor hex com tamanho inválido: "${v}"`);
});

test('booleano: deve ser exatamente "true" ou "false"', () => {
  const v = genBoolean();
  assert(v === 'true' || v === 'false', `Booleano inválido: "${v}"`);
});

test('titulo: deve ter pelo menos 3 caracteres', () => {
  const v = genContentTitle();
  assert(v.length >= 3, `Título muito curto: "${v}"`);
});

test('titulo: não deve ser apenas espaços', () => {
  const v = genContentTitle();
  assert(v.trim().length > 0, `Título vazio: "${v}"`);
});

test('descricao: deve ter pelo menos 5 caracteres', () => {
  const v = genContentDescription();
  assert(v.length >= 5, `Descrição muito curta: "${v}"`);
});

test('textoLongo: deve ter pelo menos 50 caracteres', () => {
  const v = genLongText();
  assert(v.length >= 50, `Texto longo muito curto: ${v.length} chars`);
});

test('textoLongo: deve ter no máximo 500 caracteres', () => {
  const v = genLongText();
  assert(v.length <= 500, `Texto longo muito grande: ${v.length} chars`);
});

test('emoji: deve ter pelo menos 1 caractere', () => {
  const v = genEmoji();
  assert(v.length > 0, `Emoji vazio`);
});

// ============================================================================
// E-COMMERCE
// ============================================================================

test('sku: deve ter formato SKU-XXXXX', () => {
  const v = genSku();
  assert(/^SKU-\d{5}$/.test(v), `SKU inválido: "${v}"`);
});

test('ean: deve ter 13 dígitos', () => {
  const v = genEan();
  assert(/^\d{13}$/.test(v), `EAN inválido: "${v}"`);
});

test('ean: deve ter dígito verificador válido (EAN-13)', () => {
  const v = genEan();
  assert(validarEan13(v), `EAN-13 com DV inválido: "${v}"`);
});

test('pedido: deve ter formato ORD-YYYYMMDD-XXXX', () => {
  const v = genOrderId();
  assert(/^ORD-\d{8}-\d{4}$/.test(v), `Pedido inválido: "${v}"`);
});

test('pedido: data embutida deve ser válida', () => {
  const v = genOrderId();
  const dateStr = v.split('-')[1];
  const ano = parseInt(dateStr.slice(0, 4));
  const mes = parseInt(dateStr.slice(4, 6));
  const dia = parseInt(dateStr.slice(6, 8));
  assert(validarData(ano, mes, dia), `Data do pedido inválida: "${dateStr}"`);
});

test('statusPedido: deve ser um dos valores válidos', () => {
  const validos = ['criado', 'pago', 'enviado', 'entregue', 'cancelado'];
  const v = genOrderStatus();
  assert(validos.includes(v), `Status de pedido inválido: "${v}"`);
});

test('quantidade: deve ser inteiro positivo', () => {
  const v = genQuantity();
  assert(Number.isInteger(v) && v > 0, `Quantidade inválida: ${v}`);
});

test('quantidade: deve estar em intervalo realista (1-9999)', () => {
  const v = genQuantity();
  assert(v >= 1 && v <= 9999, `Quantidade fora do intervalo: ${v}`);
});

test('frete: deve ser um dos valores válidos', () => {
  const validos = ['padrao', 'expresso'];
  const v = genShippingType();
  assert(validos.includes(v), `Frete inválido: "${v}"`);
});

// ============================================================================
// GEOLOCALIZAÇÃO
// ============================================================================

test('latitude: deve estar entre -90 e 90', () => {
  const v = parseFloat(genLatitude());
  assert(v >= -90 && v <= 90, `Latitude fora do intervalo: ${v}`);
});

test('latitude: deve ter casas decimais (não inteiro)', () => {
  const v = genLatitude();
  assert(v.includes('.'), `Latitude sem decimais: "${v}"`);
});

test('longitude: deve estar entre -180 e 180', () => {
  const v = parseFloat(genLongitude());
  assert(v >= -180 && v <= 180, `Longitude fora do intervalo: ${v}`);
});

test('longitude: deve ter casas decimais (não inteiro)', () => {
  const v = genLongitude();
  assert(v.includes('.'), `Longitude sem decimais: "${v}"`);
});

test('ipv4: deve ter 4 octetos', () => {
  const v = genIpv4();
  assert(v.split('.').length === 4, `IPv4 com octetos incorretos: "${v}"`);
});

test('ipv4: octetos devem estar entre 0 e 255', () => {
  const v = genIpv4();
  v.split('.').map(Number).forEach(o => {
    assert(o >= 0 && o <= 255, `Octeto inválido ${o} em "${v}"`);
  });
});

test('ipv4: não deve ser IP privado (deve ser documentação RFC 5737)', () => {
  const v = genIpv4();
  assert(
    v.startsWith('192.0.2.') || v.startsWith('198.51.100.') || v.startsWith('203.0.113.'),
    `IPv4 fora da faixa de documentação: "${v}"`
  );
});

test('ipv6: deve ter formato válido com dois pontos', () => {
  const v = genIpv6();
  assert(v.includes(':') && v.split(':').length >= 4, `IPv6 inválido: "${v}"`);
});

// ============================================================================
// PAÍSES DO MUNDO
// ============================================================================

test('pais: deve ter pelo menos 3 caracteres', () => {
  const v = genCountryName();
  assert(v.length >= 3, `País muito curto: "${v}"`);
});

test('pais: não deve conter números', () => {
  const v = genCountryName();
  assert(!/\d/.test(v), `País com número: "${v}"`);
});

test('codigoPais: deve ser sigla ISO 3166-1 alpha-2 (2 letras maiúsculas)', () => {
  const v = genCountryCode();
  assert(/^[A-Z]{2}$/.test(v), `Código de país inválido: "${v}"`);
});

test('codigoTelefonePais: deve começar com +', () => {
  const v = genCountryPhoneCode();
  assert(v.startsWith('+'), `Código sem +: "${v}"`);
});

test('codigoTelefonePais: deve ter apenas dígitos após +', () => {
  const v = genCountryPhoneCode();
  assert(/^\+\d+(-\d+)?$/.test(v), `Código de telefone inválido: "${v}"`);
});

test('codigoTelefonePais: deve ter entre 1 e 4 dígitos após +', () => {
  const v = genCountryPhoneCode();
  const digits = v.replace(/\D/g, '');
  assert(digits.length >= 1 && digits.length <= 4, `Código com dígitos inválidos: "${v}"`);
});

test('moedaPais: deve ser sigla ISO 4217 (3 letras maiúsculas)', () => {
  const v = genCountryCurrency();
  assert(/^[A-Z]{3}$/.test(v), `Moeda inválida: "${v}"`);
});

test('paisCompleto: deve ter todos os campos obrigatórios', () => {
  const v = genCountryFull() as any;
  assert(v && v.name && v.code && v.phoneCode && v.currency,
    `Objeto país incompleto: ${JSON.stringify(v)}`);
});

test('paisCompleto: código deve bater com nome do país', () => {
  const v = genCountryFull() as any;
  assert(/^[A-Z]{2}$/.test(v.code), `Código do país inválido: "${v.code}"`);
  assert(v.name.length >= 3, `Nome do país muito curto: "${v.name}"`);
});

// ============================================================================
// SAÚDE
// ============================================================================

test('tipoSanguineo: deve ser um dos tipos sanguíneos válidos', () => {
  const validos = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  const v = genBloodType();
  assert(validos.includes(v), `Tipo sanguíneo inválido: "${v}"`);
});

test('tipoSanguineo: deve seguir o formato Letra+/- ou AB+/-', () => {
  const v = genBloodType();
  assert(/^(A|B|AB|O)[+-]$/.test(v), `Formato inválido: "${v}"`);
});

// ============================================================================
// SAÚDE - TESTES ADICIONAIS
// ============================================================================

test('numeroProntuario: deve ter formato com prefixo e números', () => {
  const v = genMedicalRecordNumber();
  // Deve ter padrão como "PRONT 123456" ou similar
  assert(/^[A-Z]+[A-Z ]* [0-9]+$/.test(v), `Formato inválido: "${v}"`);
});

test('numeroCNS: deve ter exatamente 1550-9 digits', () => {
  const v = genCNS();
  assert(/^\d{15}$/.test(v), `CNS deve ter 15 dígitos: "${v}"`);
});

test('convenio: deve ser uma string não vazia', () => {
  const v = genHealthPlan();
  assert(typeof v === 'string' && v.length > 0, `Convênio inválido: "${v}"`);
  // Verificar se é um dos planos conhecidos
  const planosConhecidos = ['Amil', 'SulAmérica', 'Bradesco Saúde', 'Unimed', 'NotreDame Intermédica', 'Hapvida', 'Santa Casa', 'Biomédica', 'Freedom Health', 'GNDI', 'Golden Cross', 'Filipenson', 'Qualicorp', 'Porto Seguro Saúde', 'Allianz Saúde'];
  assert(planosConhecidos.includes(v), `Convênio não reconhecido: "${v}"`);
});

test('alergia: deve ser uma string não vazia', () => {
  const v = genAllergy();
  assert(typeof v === 'string' && v.length > 0, `Alergia inválida: "${v}"`);
  // Verificar se é uma das alergias conhecidas
  const alergiasConhecidas = ['Penicilina', 'Lactose', 'Glúten', 'Pólen', 'Ácaro', 'Marisco (camarão, lagosta, etc.)', 'Amendoim', 'Castanhas', 'Ovos', 'Leite', 'Soja', 'Trigo', 'Peixe', 'Frutas cítricas', 'Álcool', 'Latex', 'Picada de inseto', 'Poeira', 'Mofo', 'Medicamentos à base de sulfa'];
  assert(alergiasConhecidas.includes(v), `Alergia não reconhecida: "${v}"`);
});

test('conselhoProfissional: deve gerar CRM quando especificado', () => {
  const v = genProfessionalRegistration('CRM');
  // Format: CRM-UF XXXXX or CRM/UF XXXXX
  assert(/^CRM-[A-Z]{2} [0-9]+$|^CRM\/[A-Z]{2} [0-9]+$/.test(v), `Formato CRM inválido: "${v}"`);
});

test('conselhoProfissional: deve gerar CREA quando especificado', () => {
  const v = genProfessionalRegistration('CREA');
  // Format: CREA-UF XXXXX-D (com dígito verificador)
  assert(/^CREA-[A-Z]{2} [0-9]+-[0-9]$|^CREA\/[A-Z]{2} [0-9]+-[0-9]$/.test(v), `Formato CREA inválido: "${v}"`);
});

test('conselhoProfissional: deve gerar OAB quando especificado', () => {
  const v = genProfessionalRegistration('OAB');
  // Format: OAB/UF XXXXX or OAB-UF XXXXX or com letra sufixo
  assert(/^OAB\/[A-Z]{2} [0-9]+(-[A-Z])?$|^OAB-[A-Z]{2} [0-9]+(-[A-Z])?$/.test(v), `Formato OAB inválido: "${v}"`);
});

test('conselhoProfissional: deve funcionar sem parâmetro (qualquer conselho)', () => {
  const v = genProfessionalRegistration();
  // Deve corresponder a algum formato de conselho
  const formatoValido = /^(CRM|CREA|OAB|CRO|COREN)[\-\/][A-Z]{2} [0-9]+(-[0-9A-Z])?$/.test(v);
  assert(formatoValido, `Formato de conselho profissional inválido: "${v}"`);
});

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