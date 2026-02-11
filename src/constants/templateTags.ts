/**
 * Constantes de Template Tags
 * Definição de todas as 59 template tags do plugin Dados Falsos
 * Organizadas por categoria: Identidade, Contato, Endereço, Empresa, Financeiro, etc
 */

import { TemplateTag, InsomniaContext } from '../types';

// Importa geradores de identidade
import {
  genFirstName,
  genLastName,
  genFullName,
  genNickname,
  genGender,
  genCpf,
  genCnpj,
  genCnh,
  genBirthdate,
  genUsername
} from '../generators/identity';

// Importa geradores de contato
import {
  genEmail,
  genEmailExample,
  genPhone,
  genCellphone,
  genWhatsapp
} from '../generators/contact';

// Importa geradores de endereço
import {
  genCep,
  genStreet,
  genAddressNumber,
  genAddress,
  genComplement,
  genNeighborhood,
  genCity,
  genStateUf,
  genTimezone
} from '../generators/address';

// Importa geradores de empresa
import {
  genCompanyName,
  genCompanyFantasyName,
  genCorporateEmail,
  genPosition,
  genDepartment
} from '../generators/company';

// Importa geradores de financeiro
import {
  genCurrency,
  genAmount,
  genPaymentPlan,
  genPaymentStatus,
  genCoupon
} from '../generators/financial';

// Importa geradores de data e hora
import {
  genDatetimeIso
} from '../generators/datetime';

// Importa geradores de identificadores
import {
  genUuid,
  genUlid,
  genIdempotencyKey,
  genApiKey,
  genJwtToken,
  genPassword,
  genSha256Hash
} from '../generators/identifiers';

// Importa geradores de conteúdo
import {
  genHexColor,
  genBoolean,
  genContentTitle,
  genContentDescription,
  genLongText,
  genEmoji
} from '../generators/content';

// Importa geradores de e-commerce
import {
  genSku,
  genEan,
  genOrderId,
  genOrderStatus,
  genQuantity,
  genShippingType
} from '../generators/ecommerce';

// Importa geradores de geolocalização
import {
  genLatitude,
  genLongitude,
  genIpv4,
  genIpv6
} from '../generators/geo';

// Importa geradores de países
import {
  genCountryName,
  genCountryCode,
  genCountryPhoneCode,
  genCountryCurrency,
  genCountryFull
} from '../generators/countries';

/**
 * Array de template tags exportado para o Insomnia
 * Contém todas as 59 tags organizadas por categoria
 */
export const templateTags: TemplateTag[] = [
  // ========================================================================
  // IDENTIDADE
  // ========================================================================
  {
    name: 'nomeCompleto',
    displayName: 'dados-falsos → nomeCompleto',
    description: 'Nome completo',
    args: [],
    run: async () => genFullName()
  },
  {
    name: 'primeiroNome',
    displayName: 'dados-falsos → primeiroNome',
    description: 'Primeiro nome',
    args: [],
    run: async () => genFirstName()
  },
  {
    name: 'sobrenome',
    displayName: 'dados-falsos → sobrenome',
    description: 'Sobrenome',
    args: [],
    run: async () => genLastName()
  },
  {
    name: 'nomeSocial',
    displayName: 'dados-falsos → nomeSocial',
    description: 'Nome social / apelido',
    args: [],
    run: async () => genNickname()
  },
  {
    name: 'usuario',
    displayName: 'dados-falsos → usuario',
    description: 'Usuário',
    args: [],
    run: async () => genNickname()
  },
  {
    name: 'nomeUsuario',
    displayName: 'dados-falsos → nomeUsuario',
    description: 'Nome de usuário',
    args: [],
    run: async () => genUsername()
  },
  {
    name: 'cpf',
    displayName: 'dados-falsos → cpf',
    description: 'CPF válido',
    args: [],
    run: async (context?: InsomniaContext) => genCpf(context)
  },
  {
    name: 'cnpj',
    displayName: 'dados-falsos → cnpj',
    description: 'CNPJ válido',
    args: [],
    run: async (context?: InsomniaContext) => genCnpj(context)
  },
  {
    name: 'rg',
    displayName: 'dados-falsos → rg',
    description: 'RG / CNH',
    args: [],
    run: async () => genCnh()
  },
  {
    name: 'dataNascimento',
    displayName: 'dados-falsos → dataNascimento',
    description: 'Data de nascimento',
    args: [
      {
        displayName: 'Formato',
        type: 'enum',
        options: [
          { displayName: 'YYYY-MM-DD', value: 'YYYY-MM-DD' },
          { displayName: 'DD/MM/YYYY', value: 'DD/MM/YYYY' },
          { displayName: 'YYYYMMDD', value: 'YYYYMMDD' },
          { displayName: 'ISO', value: 'ISO' }
        ],
        defaultValue: 'YYYY-MM-DD'
      }
    ],
    run: async (_context, format) => genBirthdate(format)
  },
  {
    name: 'genero',
    displayName: 'dados-falsos → genero',
    description: 'Gênero / pronome',
    args: [],
    run: async () => genGender()
  },

  // ========================================================================
  // CONTATO
  // ========================================================================
  {
    name: 'email',
    displayName: 'dados-falsos → email',
    description: 'Email aleatório',
    args: [{ displayName: 'Domínio', type: 'string', defaultValue: '' }],
    run: async (_context, domain) => genEmail(domain)
  },
  {
    name: 'emailExemplo',
    displayName: 'dados-falsos → emailExemplo',
    description: 'Email de exemplo',
    args: [],
    run: async () => genEmailExample()
  },
  {
    name: 'telefone',
    displayName: 'dados-falsos → telefone',
    description: 'Telefone fixo',
    args: [],
    run: async () => genPhone()
  },
  {
    name: 'celular',
    displayName: 'dados-falsos → celular',
    description: 'Celular',
    args: [],
    run: async () => genCellphone()
  },
  {
    name: 'whatsapp',
    displayName: 'dados-falsos → whatsapp',
    description: 'WhatsApp',
    args: [],
    run: async () => genWhatsapp()
  },

  // ========================================================================
  // ENDEREÇO
  // ========================================================================
  {
    name: 'cep',
    displayName: 'dados-falsos → cep',
    description: 'CEP',
    args: [],
    run: async () => genCep()
  },
  {
    name: 'logradouro',
    displayName: 'dados-falsos → logradouro',
    description: 'Logradouro',
    args: [],
    run: async () => genStreet()
  },
  {
    name: 'numero',
    displayName: 'dados-falsos → numero',
    description: 'Número do endereço',
    args: [],
    run: async () => genAddressNumber()
  },
  {
    name: 'complemento',
    displayName: 'dados-falsos → complemento',
    description: 'Complemento',
    args: [],
    run: async () => genComplement()
  },
  {
    name: 'endereco',
    displayName: 'dados-falsos → endereco',
    description: 'Endereço (somente logradouro)',
    args: [],
    run: async () => genStreet()
  },
  {
    name: 'enderecoNumero',
    displayName: 'dados-falsos → endereco → numero',
    description: 'Endereço completo com número',
    args: [],
    run: async () => genAddress()
  },
  {
    name: 'bairro',
    displayName: 'dados-falsos → bairro',
    description: 'Bairro',
    args: [],
    run: async () => genNeighborhood()
  },
  {
    name: 'cidade',
    displayName: 'dados-falsos → cidade',
    description: 'Cidade',
    args: [],
    run: async () => genCity()
  },
  {
    name: 'estado',
    displayName: 'dados-falsos → estado',
    description: 'Estado (UF)',
    args: [],
    run: async () => genStateUf()
  },

  // ========================================================================
  // EMPRESA E TRABALHO
  // ========================================================================
  {
    name: 'razaoSocial',
    displayName: 'dados-falsos → razaoSocial',
    description: 'Razão social',
    args: [],
    run: async () => genCompanyName()
  },
  {
    name: 'nomeFantasia',
    displayName: 'dados-falsos → nomeFantasia',
    description: 'Nome fantasia',
    args: [],
    run: async () => genCompanyFantasyName()
  },
  {
    name: 'emailCorporativo',
    displayName: 'dados-falsos → emailCorporativo',
    description: 'E-mail corporativo',
    args: [],
    run: async () => genCorporateEmail()
  },
  {
    name: 'cargo',
    displayName: 'dados-falsos → cargo',
    description: 'Cargo',
    args: [],
    run: async () => genPosition()
  },
  {
    name: 'departamento',
    displayName: 'dados-falsos → departamento',
    description: 'Departamento',
    args: [],
    run: async () => genDepartment()
  },

  // ========================================================================
  // FINANCEIRO
  // ========================================================================
  {
    name: 'moeda',
    displayName: 'dados-falsos → moeda',
    description: 'Moeda',
    args: [],
    run: async () => genCurrency()
  },
  {
    name: 'valor',
    displayName: 'dados-falsos → valor',
    description: 'Valor',
    args: [],
    run: async () => genAmount()
  },
  {
    name: 'plano',
    displayName: 'dados-falsos → plano',
    description: 'Plano',
    args: [],
    run: async () => genPaymentPlan()
  },
  {
    name: 'cupom',
    displayName: 'dados-falsos → cupom',
    description: 'Cupom',
    args: [],
    run: async () => genCoupon()
  },
  {
    name: 'statusPagamento',
    displayName: 'dados-falsos → statusPagamento',
    description: 'Status pagamento',
    args: [],
    run: async () => genPaymentStatus()
  },

  // ========================================================================
  // DATAS E TEMPO
  // ========================================================================
  {
    name: 'datetimeIso',
    displayName: 'dados-falsos → datetimeIso',
    description: 'Data e hora ISO',
    args: [],
    run: async () => genDatetimeIso()
  },
  {
    name: 'timezone',
    displayName: 'dados-falsos → timezone',
    description: 'Fuso horário',
    args: [],
    run: async () => genTimezone()
  },

  // ========================================================================
  // IDENTIFICADORES E SEGURANÇA
  // ========================================================================
  {
    name: 'uuid',
    displayName: 'dados-falsos → uuid',
    description: 'Identificador único (UUID v4)',
    args: [],
    run: async () => genUuid()
  },
  {
    name: 'ulid',
    displayName: 'dados-falsos → ulid',
    description: 'Identificador único (ULID)',
    args: [],
    run: async () => genUlid()
  },
  {
    name: 'chaveIdempotencia',
    displayName: 'dados-falsos → chaveIdempotencia',
    description: 'Chave de Idempotência',
    args: [],
    run: async () => genIdempotencyKey()
  },
  {
    name: 'chaveApi',
    displayName: 'dados-falsos → chaveApi',
    description: 'Chave de API',
    args: [],
    run: async () => genApiKey()
  },
  {
    name: 'tokenJwt',
    displayName: 'dados-falsos → tokenJwt',
    description: 'Token JWT',
    args: [],
    run: async () => genJwtToken()
  },
  {
    name: 'senha',
    displayName: 'dados-falsos → senha',
    description: 'Senha forte',
    args: [],
    run: async () => genPassword()
  },
  {
    name: 'hashSha256',
    displayName: 'dados-falsos → hashSha256',
    description: 'Hash SHA256',
    args: [],
    run: async () => genSha256Hash()
  },

  // ========================================================================
  // CONTEÚDO / TEXTO
  // ========================================================================
  {
    name: 'titulo',
    displayName: 'dados-falsos → titulo',
    description: 'Título',
    args: [],
    run: async () => genContentTitle()
  },
  {
    name: 'descricao',
    displayName: 'dados-falsos → descricao',
    description: 'Descrição',
    args: [],
    run: async () => genContentDescription()
  },
  {
    name: 'textoLongo',
    displayName: 'dados-falsos → textoLongo',
    description: 'Observação longa',
    args: [],
    run: async () => genLongText()
  },
  {
    name: 'emoji',
    displayName: 'dados-falsos → emoji',
    description: 'Emoji',
    args: [],
    run: async () => genEmoji()
  },

  // ========================================================================
  // E-COMMERCE / PEDIDOS
  // ========================================================================
  {
    name: 'sku',
    displayName: 'dados-falsos → sku',
    description: 'Código de produto (SKU)',
    args: [],
    run: async () => genSku()
  },
  {
    name: 'ean',
    displayName: 'dados-falsos → ean',
    description: 'Código de barras (EAN)',
    args: [],
    run: async () => genEan()
  },
  {
    name: 'pedido',
    displayName: 'dados-falsos → pedido',
    description: 'Pedido',
    args: [],
    run: async () => genOrderId()
  },
  {
    name: 'statusPedido',
    displayName: 'dados-falsos → statusPedido',
    description: 'Status pedido',
    args: [],
    run: async () => genOrderStatus()
  },
  {
    name: 'quantidade',
    displayName: 'dados-falsos → quantidade',
    description: 'Quantidade',
    args: [],
    run: async () => genQuantity()
  },
  {
    name: 'frete',
    displayName: 'dados-falsos → frete',
    description: 'Frete',
    args: [],
    run: async () => genShippingType()
  },

  // ========================================================================
  // GEO E REDE
  // ========================================================================
  {
    name: 'latitude',
    displayName: 'dados-falsos → latitude',
    description: 'Latitude',
    args: [],
    run: async () => genLatitude()
  },
  {
    name: 'longitude',
    displayName: 'dados-falsos → longitude',
    description: 'Longitude',
    args: [],
    run: async () => genLongitude()
  },
  {
    name: 'ipv4',
    displayName: 'dados-falsos → ipv4',
    description: 'Endereço IP v4',
    args: [],
    run: async () => genIpv4()
  },
  {
    name: 'ipv6',
    displayName: 'dados-falsos → ipv6',
    description: 'Endereço IP v6',
    args: [],
    run: async () => genIpv6()
  },

  // ========================================================================
  // CORES E UTILITÁRIOS
  // ========================================================================
  {
    name: 'corHex',
    displayName: 'dados-falsos → corHex',
    description: 'Cor hexadecimal',
    args: [],
    run: async () => genHexColor()
  },
  {
    name: 'booleano',
    displayName: 'dados-falsos → booleano',
    description: 'Booleano',
    args: [],
    run: async () => genBoolean()
  },

  // ========================================================================
  // PAÍSES DO MUNDO
  // ========================================================================
  {
    name: 'pais',
    displayName: 'dados-falsos → pais',
    description: 'Nome do país',
    args: [],
    run: async () => genCountryName()
  },
  {
    name: 'codigoPais',
    displayName: 'dados-falsos → codigoPais',
    description: 'Código ISO do país',
    args: [],
    run: async () => genCountryCode()
  },
  {
    name: 'codigoTelefonePais',
    displayName: 'dados-falsos → codigoTelefonePais',
    description: 'Código de telefone do país',
    args: [],
    run: async () => genCountryPhoneCode()
  },
  {
    name: 'moedaPais',
    displayName: 'dados-falsos → moedaPais',
    description: 'Moeda do país',
    args: [],
    run: async () => genCountryCurrency()
  },
  {
    name: 'paisCompleto',
    displayName: 'dados-falsos → paisCompleto',
    description: 'Dados completos do país',
    args: [],
    run: async () => JSON.stringify(genCountryFull())
  }
];
