/**
 * Registro público das template tags expostas ao Insomnia.
 *
 * Este módulo centraliza o catálogo do plugin Dados Falsos e conecta cada
 * tag a um gerador específico. O array exportado `templateTags` é consumido
 * pelo ponto de entrada do plugin para disponibilizar os recursos na
 * interface do Insomnia.
 *
 * Cada entrada do array define um identificador, um nome exibido, uma
 * descrição, argumentos opcionais e a função responsável por gerar o valor.
 *
 * @module constants/templateTags
 * @description Catálogo de tags públicas do plugin.
 */

import { TemplateTag, InsomniaContext } from '../types';

// Importa geradores de identidade (nomes e dados demográficos)
import {
  genFirstName,
  genLastName,
  genFullName,
  genNickname,
  genGender,
  genBirthdate,
  genUsername
} from '../generators/identity';

// Importa geradores de documentos de identificação
import { genCpf } from '../generators/cpf';
import { genCnpj } from '../generators/cnpj';
import { genCnh } from '../generators/cnh';
import { genRg } from '../generators/rg';

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

// Importa geradores de saúde
import {
  genBloodType
} from '../generators/bloodType';
import {
  genHealthPlan
} from '../generators/healthPlan';
import {
  genAllergy
} from '../generators/allergy';
import {
  genMedicalRecordNumber
} from '../generators/medicalRecordNumber';
import {
  genCNS
} from '../generators/cns';
import {
  genProfessionalRegistration
} from '../generators/professionalRegistration';

// Importa gerador de PIS/PASEP
import {
  genPIS
} from '../generators/pis';

// Importa gerador de Título de Eleitor
import {
  genTituloEleitor
} from '../generators/tituloEleitor';

// Importa geradores veiculares
import {
  genPlaca,
  genPlacaAntiga,
  genPlacaMercosul
} from '../generators/vehicle';

// Importa geradores bancários
import {
  genAgencia,
  genChavePixCpf,
  genChavePixEmail,
  genChavePixTelefone,
  genCodigoBanco,
  genConta,
  genPixAleatoria,
  genTipoConta
} from '../generators/bancario';

// Importa geradores de educação
import {
  genEducationInstitution,
  genEducationCourse,
  genEducationLevel,
  genEducationStatus,
  genEducationPeriod,
  genEducationSemester,
  genEducationYear,
  genEducation
} from '../generators/education';

// Importa geradores de cartão de crédito
import {
  genNumeroCartao,
  genBandeiraCartao,
  genCvv,
  genValidadeCartao,
  genCartaoCompleto
} from '../generators/creditCard';
/**
 * Array de template tags exportado para o Insomnia
 * Contém todas as 93 tags organizadas por categoria
 */
export const templateTags: TemplateTag[] = [
  // ========================================================================
  // IDENTIDADE
  // ========================================================================
  /**
   * Tags de identidade, documentos e dados demográficos.
   * Inclui nomes completos, apelidos, CPF/CNPJ, nascimento, gênero e título de eleitor.
   */
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
    run: async () => genUsername()
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
    name: 'cnh',
    displayName: 'dados-falsos → cnh',
    description: 'CNH válida com 11 dígitos',
    args: [],
    run: async () => genCnh()
  },
  {
    name: 'rg',
    displayName: 'dados-falsos → rg',
    description: 'RG válido',
    args: [],
    run: async () => genRg()
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
  {
    name: 'instituicaoEnsino',
    displayName: 'dados-falsos → instituicaoEnsino',
    description: 'Instituição de ensino',
    args: [],
    run: async (context?: InsomniaContext) => genEducationInstitution(context)
  },
  {
    name: 'curso',
    displayName: 'dados-falsos → curso',
    description: 'Curso acadêmico',
    args: [],
    run: async (context?: InsomniaContext) => genEducationCourse(context)
  },
  {
    name: 'nivelFormacao',
    displayName: 'dados-falsos → nivelFormacao',
    description: 'Nível de formação acadêmica',
    args: [],
    run: async (context?: InsomniaContext) => genEducationLevel(context)
  },
  {
    name: 'statusAcademico',
    displayName: 'dados-falsos → statusAcademico',
    description: 'Status acadêmico',
    args: [],
    run: async (context?: InsomniaContext) => genEducationStatus(context)
  },
  {
    name: 'periodoAcademico',
    displayName: 'dados-falsos → periodoAcademico',
    description: 'Período de estudo',
    args: [],
    run: async (context?: InsomniaContext) => genEducationPeriod(context)
  },
  {
    name: 'semestreAcademico',
    displayName: 'dados-falsos → semestreAcademico',
    description: 'Semestre acadêmico',
    args: [],
    run: async () => genEducationSemester()
  },
  {
    name: 'anoAcademico',
    displayName: 'dados-falsos → anoAcademico',
    description: 'Ano acadêmico',
    args: [],
    run: async () => genEducationYear().toString()
  },
  {
    name: 'registroAcademico',
    displayName: 'dados-falsos → registroAcademico',
    description: 'Registro acadêmico completo',
    args: [],
    run: async (context?: InsomniaContext) => JSON.stringify(genEducation(context))
  },
  {
    name: 'tituloEleitor',
    displayName: 'dados-falsos → tituloEleitor',
    description: 'Título de Eleitor válido',
    args: [],
    run: async () => genTituloEleitor()
  },

  // ========================================================================
  // CONTATO
  // ========================================================================
  /**
   * Tags de contato e comunicação.
   * Inclui e-mails, telefones, celulares e WhatsApp.
   */
  {
    name: 'email',
    displayName: 'dados-falsos → email',
    description: 'Email aleatório',
    args: [{ displayName: 'Domínio', type: 'string', defaultValue: '' }],
    run: async (context, domain) => genEmail(domain, context)
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
    run: async (context?: InsomniaContext) => genPhone(context)
  },
  {
    name: 'celular',
    displayName: 'dados-falsos → celular',
    description: 'Celular',
    args: [],
    run: async (context?: InsomniaContext) => genCellphone(context)
  },
  {
    name: 'whatsapp',
    displayName: 'dados-falsos → whatsapp',
    description: 'WhatsApp',
    args: [],
    run: async (context?: InsomniaContext) => genWhatsapp(context)
  },

  // ========================================================================
  // ENDEREÇO
  // ========================================================================
  /**
   * Tags relacionadas a endereços brasileiros.
   * Incluem CEP, logradouro, número, complemento, bairro, cidade e estado.
   */
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
  /**
   * Tags de representação e organização empresarial.
   * Inclui razão social, nome fantasia, e-mail corporativo, cargo e departamento.
   */
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
  /**
   * Tags financeiras e comerciais básicas.
   * Inclui moeda, valores, planos, status de pagamento e cupons.
   */
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
  /**
   * Tags de data, hora e fuso horário.
   * Facilita a geração de timestamps e valores temporais sintéticos.
   */
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
  /**
   * Tags de identificação e segurança.
   * Inclui UUIDs, ULIDs, chaves, tokens, senhas e hashes.
   */
  {
    name: 'uuid',
    displayName: 'dados-falsos → uuid',
    description: 'Identificador único (UUID v4)',
    args: [],
    run: async (context?: InsomniaContext) => genUuid(context)
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
    run: async (context?: InsomniaContext) => genIdempotencyKey(context)
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
  /**
   * Tags para geração de conteúdo textual e utilitário.
   * Inclui títulos, descrições, textos longos e emojis.
   */
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
  /**
   * Tags voltadas a comércio eletrônico e pedidos.
   * Inclui SKU, EAN, pedidos, status, quantidade e frete.
   */
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
  /**
   * Tags para geolocalização e rede.
   * Inclui coordenadas geográficas e endereços IP.
   */
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
  /**
   * Tags utilitárias para valores simples.
   * Inclui cores hexadecimais e booleanos.
   */
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
  /**
   * Tags de contexto internacional.
   * Inclui nomes, códigos, códigos de telefone e moedas de países.
   */
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
  },
  // ========================================================================
  // SAÚDE
  // ========================================================================
  /**
   * Tags relacionadas a dados de saúde.
   * Inclui tipos sanguíneos, prontuários, CNS, PIS e convênios.
   */
  {
    name: 'tipoSanguineo',
    displayName: 'dados-falsos → tipoSanguineo',
    description: 'Tipo sanguíneo',
    args: [],
    run: async () => genBloodType()
  },
  {
    name: 'numeroProntuario',
    displayName: 'dados-falsos → numeroProntuario',
    description: 'Número de prontuário médico',
    args: [],
    run: async () => genMedicalRecordNumber()
  },
  {
    name: 'numeroCNS',
    displayName: 'dados-falsos → numeroCNS',
    description: 'Número do Cartão Nacional de Saúde (CNS)',
    args: [],
    run: async (context?: InsomniaContext) => genCNS(context)
  },
  {
    name: 'pis',
    displayName: 'dados-falsos → pis',
    description: 'Número do PIS/PASEP válido (11 dígitos com DV)',
    args: [],
    run: async (context?: InsomniaContext) => genPIS(context)
  },
  {
    name: 'convenio',
    displayName: 'dados-falsos → convenio',
    description: 'Nome de convênio de saúde',
    args: [],
    run: async () => genHealthPlan()
  },
  {
    name: 'alergia',
    displayName: 'dados-falsos → alergia',
    description: 'Alergia',
    args: [],
    run: async () => genAllergy()
  },
  {
    name: 'conselhoProfissional',
    displayName: 'dados-falsos → conselhoProfissional',
    description: 'Número do conselho profissional (CRM, CREA, OAB, etc.)',
    args: [
      {
        displayName: 'Tipo de conselho',
        type: 'enum',
        options: [
          { displayName: 'Qualquer (aleatório)', value: '' },
          { displayName: 'CRM (Medicina)', value: 'CRM' },
          { displayName: 'CREA (Engenharia)', value: 'CREA' },
          { displayName: 'OAB (Direito)', value: 'OAB' },
          { displayName: 'CRO (Odontologia)', value: 'CRO' },
          { displayName: 'COREN (Enfermagem)', value: 'COREN' }
        ],
        defaultValue: ''
      }
    ],
    run: async (_context, tipo) => genProfessionalRegistration(tipo)
  },

  // ========================================================================
  // VEICULAR
  // ========================================================================
  /**
   * Tags de veículos e placas brasileiras.
   * Inclui placas antigas, Mercosul e variações.
   */
  {
    name: 'placa',
    displayName: 'dados-falsos → placa',
    description: 'Placa veicular brasileira (antiga ou Mercosul, aleatório)',
    args: [],
    run: async (context?: InsomniaContext) => genPlaca(context)
  },
  {
    name: 'placaAntiga',
    displayName: 'dados-falsos → placaAntiga',
    description: 'Placa veicular formato antigo (AAA9999)',
    args: [],
    run: async () => genPlacaAntiga()
  },
  {
    name: 'placaMercosul',
    displayName: 'dados-falsos → placaMercosul',
    description: 'Placa veicular formato Mercosul (AAA9A99)',
    args: [],
    run: async () => genPlacaMercosul()
  },

  // ========================================================================
  // BANCÁRIO
  // ========================================================================
  /**
   * Tags de dados bancários sintéticos.
   * Inclui agência, conta e chave Pix.
   */
  {
    name: 'agencia',
    displayName: 'dados-falsos → agencia',
    description: 'Agência bancária sintética (4 dígitos)',
    args: [],
    run: async () => genAgencia()
  },
  {
    name: 'conta',
    displayName: 'dados-falsos → conta',
    description: 'Conta bancária sintética (XXXXX-X)',
    args: [],
    run: async () => genConta()
  },
  {
    name: 'pixAleatoria',
    displayName: 'dados-falsos → pixAleatoria',
    description: 'Chave Pix Aleatória (UUID v4 — formato Banco Central)',
    args: [],
    run: async () => genPixAleatoria()
  },
  {
    name: 'codigoBanco',
    displayName: 'dados-falsos → codigoBanco',
    description: 'Banco no formato código FEBRABAN/COMPE e nome',
    args: [],
    run: async () => genCodigoBanco()
  },
  {
    name: 'tipoConta',
    displayName: 'dados-falsos → tipoConta',
    description: 'Tipo de conta bancária: corrente, poupança ou pagamento',
    args: [],
    run: async () => genTipoConta()
  },
  {
    name: 'chavePixCpf',
    displayName: 'dados-falsos → chavePixCpf',
    description: 'Chave Pix CPF válida (11 dígitos)',
    args: [],
    run: async (context) => genChavePixCpf(context)
  },
  {
    name: 'chavePixEmail',
    displayName: 'dados-falsos → chavePixEmail',
    description: 'Chave Pix de e-mail válida',
    args: [],
    run: async (context) => genChavePixEmail(context)
  },
  {
    name: 'chavePixTelefone',
    displayName: 'dados-falsos → chavePixTelefone',
    description: 'Chave Pix de telefone no formato internacional +55',
    args: [],
    run: async (context) => genChavePixTelefone(context)
  },

  // ========================================================================
  // CARTÃO DE CRÉDITO
  // ========================================================================
  /**
   * Tags de cartão de crédito sintético.
   * Números válidos pelo algoritmo de Luhn, com bandeira, CVV e validade.
   */
  {
    name: 'numeroCartao',
    displayName: 'dados-falsos → numeroCartao',
    description: 'Número de cartão de crédito válido (Luhn)',
    args: [
      {
        displayName: 'Bandeira',
        type: 'enum',
        options: [
          { displayName: 'Qualquer (aleatório)', value: '' },
          { displayName: 'Visa', value: 'Visa' },
          { displayName: 'Mastercard', value: 'Mastercard' },
          { displayName: 'Elo', value: 'Elo' },
          { displayName: 'Hipercard', value: 'Hipercard' },
          { displayName: 'American Express', value: 'American Express' }
        ],
        defaultValue: ''
      }
    ],
    run: async (_context, bandeira) => genNumeroCartao(bandeira || undefined)
  },
  {
    name: 'bandeiraCartao',
    displayName: 'dados-falsos → bandeiraCartao',
    description: 'Bandeira de cartão de crédito',
    args: [],
    run: async () => genBandeiraCartao()
  },
  {
    name: 'cvv',
    displayName: 'dados-falsos → cvv',
    description: 'CVV do cartão de crédito',
    args: [],
    run: async () => genCvv()
  },
  {
    name: 'validadeCartao',
    displayName: 'dados-falsos → validadeCartao',
    description: 'Validade do cartão (MM/YY)',
    args: [],
    run: async () => genValidadeCartao()
  },
  {
    name: 'cartaoCompleto',
    displayName: 'dados-falsos → cartaoCompleto',
    description: 'Dados completos do cartão de crédito',
    args: [],
    run: async () => JSON.stringify(genCartaoCompleto())
  },
];
