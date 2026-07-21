# 🇧🇷 Dados Falsos — Plugin Insomnia

> Gere dados sintéticos brasileiros com validação oficial diretamente nas Template Tags do Insomnia.

✔ CPF &nbsp;✔ CNPJ 2026 &nbsp;✔ CNH &nbsp;✔ CNS &nbsp;✔ PIS &nbsp;✔ RG &nbsp;✔ CEP &nbsp;✔ UUID &nbsp;✔ JWT &nbsp;✔ Placas Mercosul &nbsp;✔ Cartões de Crédito

**98 Template Tags &nbsp;·&nbsp; 0 dependências de produção &nbsp;·&nbsp; 100% TypeScript**

---

<div align="center">

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![npm version](https://badge.fury.io/js/insomnia-plugin-dados-falsos.svg)](https://www.npmjs.com/package/insomnia-plugin-dados-falsos)
  [![npm downloads](https://img.shields.io/npm/dt/insomnia-plugin-dados-falsos.svg)](https://www.npmjs.com/package/insomnia-plugin-dados-falsos)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue)](https://www.typescriptlang.org/)
  [![Insomnia](https://img.shields.io/badge/Insomnia-Plugin-purple)](https://insomnia.rest/)
  ![100% Offline](https://img.shields.io/badge/100%25-Offline-2ea44f)
  ![LGPD Friendly](https://img.shields.io/badge/LGPD-Friendly-0052cc)
  ![Zero Dependencies](https://img.shields.io/badge/0-Production%20Dependencies-2ea44f)
  ![Official Algorithms](https://img.shields.io/badge/Algorithms-Official-6f42c1)
  ![98 Template Tags](https://img.shields.io/badge/Template%20Tags-98-orange)
  ![172 Tests](https://img.shields.io/badge/Tests-172%20Passing-success)
  [![Known Vulnerabilities](https://snyk.io/test/github/godoyrw/insomnia-plugin-dados-falsos/badge.svg)](https://snyk.io/test/github/godoyrw/insomnia-plugin-dados-falsos)
  [![Tests](https://github.com/godoyrw/insomnia-plugin-dados-falsos/actions/workflows/test.yml/badge.svg)](https://github.com/godoyrw/insomnia-plugin-dados-falsos/actions/workflows/test.yml)
  [![Publish NPM](https://github.com/godoyrw/insomnia-plugin-dados-falsos/actions/workflows/publish-npm.yml/badge.svg)](https://github.com/godoyrw/insomnia-plugin-dados-falsos/actions/workflows/publish-npm.yml)
  [![Release](https://github.com/godoyrw/insomnia-plugin-dados-falsos/actions/workflows/publish-release.yml/badge.svg)](https://github.com/godoyrw/insomnia-plugin-dados-falsos/actions/workflows/publish-release.yml)
  ![Static Badge](https://img.shields.io/badge/Godah-Code-blue?logo=github) 
  [![ORCID](https://img.shields.io/badge/ORCID-0009--0003--2100--4772-green.svg)](https://orcid.org/0009-0003-2100-4772)

  <img src="./assets/images/insomnia-plugin-dados-falsos.jpg" alt="Dados Falsos - Plugin Insomnia">
</div>

---

## Segurança e LGPD

Este plugin gera dados de forma local, a partir de constantes e algoritmos internos; nenhuma informação é obtida da internet nem de bases de dados externas. Documentos e identificadores podem ser matematicamente válidos, mas são destinados exclusivamente a testes. Como todo identificador gerado aleatoriamente pode coincidir com um valor existente, não os use para representar pessoas, empresas ou contas reais.

### Não há comunicação com APIs externas durante a geração dos dados.

---

## Diferenciais

| Característica                                 | Status |
| ---------------------------------------------- | :----: |
| Documentos brasileiros matematicamente válidos |    ✅   |
| Algoritmos oficiais implementados              |    ✅   |
| Suporte ao novo CNPJ Alfanumérico 2026         |    ✅   |
| Geração e validação de documentos              |    ✅   |
| Zero dependências de produção                  |    ✅   |
| Desenvolvido em 100% em TypeScript             |    ✅   |
| Compatível com Insomnia                        |    ✅   |
| Dados sintéticos para testes                   |    ✅   |

### Zero dependências de produção.

```json
"devDependencies": {
  "@types/node": "...",
  "tsx": "...",
  "typescript": "..."
}
```
---

## Documentos suportados

| Documento | Gerador | Validador | Algoritmo |
|---|---|---|---|
| CPF | ✅ | ✅ | Receita Federal |
| CNPJ (numérico e alfanumérico 2026) | ✅ | ✅ | Receita Federal |
| CNH | ✅ | ✅ | CONTRAN / DENATRAN |
| RG | ✅ | ✅ | SSP-SP |
| PIS/PASEP | ✅ | ✅ | Caixa Econômica Federal |
| Título de Eleitor | ✅ | ✅ | Justiça Eleitoral |
| CNS | ✅ | ✅ | Ministério da Saúde |
| EAN-13 | ✅ | ✅ | GS1 |
| UUID v4 | ✅ | ✅ | RFC 4122 / RFC 9562 |
| Placa Antiga (AAA9999) | ✅ | ✅ | CONTRAN |
| Placa Mercosul (AAA9A99) | ✅ | ✅ | CONTRAN |

---

## Instalação

### Via NPM no Insomnia (Recomendado)

**Preferences → Plugins → Install Plugin** e digite:

```
insomnia-plugin-dados-falsos
```

### Instalação Local (Desenvolvimento)

```bash
git clone https://github.com/godoyrw/insomnia-plugin-dados-falsos.git
cd insomnia-plugin-dados-falsos
npm install && npm run build
cp -r . ~/.config/Insomnia/plugins/insomnia-plugin-dados-falsos
```

Reinicie o Insomnia e confirme em **Preferences → Plugins**.

---

## Compatibilidade

| Requisito | Versão mínima |
|-----------|---------------|
| Node.js | 18 ou superior |
| Insomnia | 2021.7.0 ou superior |
| TypeScript | 5.x (desenvolvimento) |

---

## Uso rápido

```
{% cpf %}              → 52998224725
{% cnpj %}             → AB12CD34EF5601
{% cnh %}              → 12345678909
{% numeroCNS %}        → 123456789010004
{% pis %}              → 12345678901
{% placa %}            → ABC1D23
{% placaMercosul %}    → BRA1A23
{% uuid %}             → 550e8400-e29b-41d4-a716-446655440000
{% tokenJwt %}         → eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
{% datetimeIso %}      → 2026-07-16T14:35:20Z
```

---

## Algoritmos implementados

Os documentos que possuem algoritmos oficiais são gerados conforme suas especificações de referência,
produzindo identificadores matematicamente válidos para uso em testes e homologação.

Os documentos que possuem dígitos verificadores implementam integralmente
as regras oficiais de validação definidas pelos respectivos órgãos reguladores e entidades normativas.

- **Receita Federal** — CPF (módulo 11), CNPJ numérico e alfanumérico 2026
- **CONTRAN / DENATRAN** — CNH (dois dígitos verificadores), Placas (antiga e Mercosul)
- **Ministério da Saúde** — CNS definitivo derivado do PIS, CNS provisório
- **Caixa Econômica Federal** — PIS/PASEP (módulo 11, pesos 3-2-9-8-7-6-5-4-3-2)
- **SSP-SP** — RG com dígito verificador (módulo 11)
- **GS1** — EAN-13 com dígito verificador
- **RFC 4122 / RFC 9562** — UUID v4
- **RFC 5737 / RFC 3849** — IPv4 e IPv6 de documentação

---

## Performance

Benchmark realizado em 1.000 execuções consecutivas (Node.js 24, AMD Ryzen), sem warm-up.

| Gerador | Tempo médio |
|---|---|
| CPF | 0,002 ms |
| PIS/PASEP | 0,002 ms |
| RG | 0,002 ms |
| UUID | 0,003 ms |
| CNS | 0,004 ms |
| CNH | 0,005 ms |
| CNPJ | 0,005 ms |
| Nome completo | 0,001 ms |
| Placa veicular | 0,001 ms |

Todos os geradores completam em **menos de 0,01 ms** — sem I/O, sem rede, sem dependências externas.

---

## Template Tags

### Identidade

| Tag | Descrição | Exemplo |
|---|---|---|
| `{% nomeCompleto %}` | Nome completo | João da Silva |
| `{% primeiroNome %}` | Primeiro nome | João |
| `{% sobrenome %}` | Sobrenome | Silva |
| `{% nomeSocial %}` | Nome social / apelido | Joca |
| `{% usuario %}` | Handle de usuário | joao.silva.42 |
| `{% nomeUsuario %}` | Username nome.sobrenome.num | joao.silva.42 |
| `{% cpf %}` | CPF com DV real | 52998224725 |
| `{% cnpj %}` | CNPJ (numérico ou alfanumérico 2026) | AB12CD34EF5601 |
| `{% cnh %}` | CNH com 2 DVs reais | 12345678909 |
| `{% rg %}` | RG com DV (SSP-SP) | 12345678X |
| `{% tituloEleitor %}` | Título de Eleitor com DV real | 123456780167 |
| `{% dataNascimento %}` | Data ISO (YYYY-MM-DD) | 1985-03-15 |
| `{% dataNascimento DD/MM/YYYY %}` | Data formatada | 15/03/1985 |
| `{% dataNascimento YYYYMMDD %}` | Data sem separadores | 19850315 |
| `{% dataNascimento ISO %}` | Data ISO com timestamp | 1985-03-15T00:00:00Z |
| `{% genero %}` | masculino / feminino / nao_binario | masculino |

### Saúde

| Tag | Descrição | Exemplo |
|---|---|---|
| `{% tipoSanguineo %}` | Tipo sanguíneo ABO/Rh | O+ |
| `{% numeroProntuario %}` | Número de prontuário | PRONT 102938 |
| `{% numeroCNS %}` | CNS com DV (Ministério da Saúde) | 123456789010004 |
| `{% pis %}` | PIS/PASEP com DV real | 12345678901 |
| `{% convenio %}` | Convênio de saúde | Amil |
| `{% alergia %}` | Alergia comum | Penicilina |
| `{% conselhoProfissional %}` | Conselho aleatório | CRM-SP 12345 |
| `{% conselhoProfissional CRM %}` | CRM (Medicina) | CRM-SP 12345 |
| `{% conselhoProfissional CREA %}` | CREA (Engenharia) | CREA-RJ 67890-3 |
| `{% conselhoProfissional OAB %}` | OAB (Direito) | OAB/SP 12345 |
| `{% conselhoProfissional CRO %}` | CRO (Odontologia) | CRO-MG 12345 |
| `{% conselhoProfissional COREN %}` | COREN (Enfermagem) | COREN-DF 12345 |

### Veicular

| Tag | Descrição | Exemplo |
|---|---|---|
| `{% placa %}` | Placa aleatória (antiga ou Mercosul) | ABC1234 |
| `{% placaAntiga %}` | Formato antigo AAA9999 | ABC1234 |
| `{% placaMercosul %}` | Formato Mercosul AAA9A99 | ABC1D23 |

### Bancário

| Tag | Descrição | Exemplo |
|---|---|---|
| `{% agencia %}` | Agência bancária sintética (4 dígitos) | 4532 |
| `{% conta %}` | Conta bancária sintética (XXXXX-X) | 56789-3 |
| `{% pixAleatoria %}` | Chave Pix Aleatória (UUID v4 — formato Banco Central) | 550e8400-e29b-41d4-a716-446655440000 |
| `{% codigoBanco %}` | Banco no formato código FEBRABAN/COMPE e nome | 341 - Itaú Unibanco |
| `{% tipoConta %}` | Tipo de conta: corrente, poupança ou pagamento | corrente |
| `{% chavePixCpf %}` | Chave Pix CPF válida (11 dígitos) | 12345678909 |
| `{% chavePixEmail %}` | Chave Pix de e-mail válida | ana.souza.1234@example.com |
| `{% chavePixTelefone %}` | Chave Pix de telefone no formato E.164 | +5511998765432 |

### Cartão de Crédito

| Tag | Descrição | Exemplo |
|---|---|---|
| `{% numeroCartao %}` | Número de cartão válido pelo algoritmo de Luhn | 4539148803436467 |
| `{% numeroCartao Visa %}` | Número de cartão para uma bandeira específica | 4539148803436467 |
| `{% bandeiraCartao %}` | Bandeira do cartão | Visa |
| `{% cvv %}` | CVV do cartão | 382 |
| `{% validadeCartao %}` | Validade no formato MM/YY | 08/29 |
| `{% cartaoCompleto %}` | Objeto completo com número, bandeira, CVV e validade | `{...}` |

### Educação

| Tag | Descrição | Exemplo |
|---|---|---|
| `{% instituicaoEnsino %}` | Instituição de ensino | Universidade de São Paulo (USP) |
| `{% curso %}` | Curso acadêmico | Ciência da Computação |
| `{% nivelFormacao %}` | Nível de formação | Graduação |
| `{% statusAcademico %}` | Status acadêmico | Cursando |
| `{% periodoAcademico %}` | Período de estudo | Manhã |
| `{% semestreAcademico %}` | Semestre acadêmico | 4º Semestre |
| `{% anoAcademico %}` | Ano acadêmico | 2026 |
| `{% registroAcademico %}` | Registro completo em JSON | `{...}` |

### Contato

| Tag | Descrição | Exemplo |
|---|---|---|
| `{% email %}` | Email aleatório | joao.silva.42@gmail.com |
| `{% email suaempresa.com.br %}` | Email domínio customizado | joao@suaempresa.com.br |
| `{% emailExemplo %}` | Email example.com | joao@example.com |
| `{% telefone %}` | Telefone fixo | (11) 3333-4444 |
| `{% celular %}` | Celular BR | (11) 91234-5678 |
| `{% whatsapp %}` | WhatsApp +55 | +55 11 91234-5678 |

### Endereço BR

| Tag | Descrição | Exemplo |
|---|---|---|
| `{% cep %}` | CEP | 01310-100 |
| `{% logradouro %}` | Rua/Avenida | Rua Augusta |
| `{% numero %}` | Número | 123 |
| `{% complemento %}` | Complemento | Apto 42 |
| `{% endereco %}` | Logradouro | Rua Augusta |
| `{% enderecoNumero %}` | Logradouro + número | Rua Augusta, 123 |
| `{% bairro %}` | Bairro | Bela Vista |
| `{% cidade %}` | Cidade | São Paulo |
| `{% estado %}` | UF | SP |

### Empresa

| Tag | Descrição | Exemplo |
|---|---|---|
| `{% razaoSocial %}` | Razão social | ACME LTDA |
| `{% nomeFantasia %}` | Nome fantasia | ACME Tech |
| `{% emailCorporativo %}` | Email corporativo | contato@empresa.com |
| `{% cargo %}` | Cargo | Engenheiro de Software |
| `{% departamento %}` | Departamento | Tecnologia |

### Financeiro

| Tag | Descrição | Exemplo |
|---|---|---|
| `{% moeda %}` | Moeda | BRL |
| `{% valor %}` | Valor monetário | 199.90 |
| `{% plano %}` | Plano de assinatura | profissional |
| `{% cupom %}` | Código de desconto | SAVE20 |
| `{% statusPagamento %}` | Status pagamento | pago |

### Datas e Tempo

| Tag | Descrição | Exemplo |
|---|---|---|
| `{% datetimeIso %}` | ISO 8601 completo | 2026-07-16T14:35:20Z |
| `{% timezone %}` | Timezone IANA | America/Sao_Paulo |

### Segurança e Identificadores

| Tag | Descrição | Exemplo |
|---|---|---|
| `{% uuid %}` | UUID v4 (RFC 4122) | 550e8400-e29b-41d4-a716-446655440000 |
| `{% ulid %}` | ULID (Crockford Base32) | 01ARZ3NDEKTSV4RRFFQ69G5FAV |
| `{% chaveIdempotencia %}` | Chave idempotente (UUID) | 9f1c2c2e-... |
| `{% chaveApi %}` | API Key | sk_test_abc123... |
| `{% tokenJwt %}` | JWT estruturado | eyJhbGciOiJIUzI1NiIs... |
| `{% senha %}` | Senha forte (12+ chars) | Xy!9pQ#2mL@z |
| `{% hashSha256 %}` | Hash SHA-256 (64 hex) | a94a8fe5... |

### Conteúdo

| Tag | Descrição | Exemplo |
|---|---|---|
| `{% titulo %}` | Título aleatório | Sistema de Pagamentos |
| `{% descricao %}` | Descrição curta | Descrição gerada automaticamente |
| `{% textoLongo %}` | Texto 200–500 chars | Lorem ipsum... |
| `{% emoji %}` | Emoji aleatório | 🚀 |
| `{% corHex %}` | Cor hexadecimal | #A1B2C3 |
| `{% booleano %}` | Booleano | true |

### E-commerce

| Tag | Descrição | Exemplo |
|---|---|---|
| `{% sku %}` | Código de produto | SKU-12345 |
| `{% ean %}` | EAN-13 com DV real | 7891234567890 |
| `{% pedido %}` | ID de pedido | ORD-20260716-1234 |
| `{% statusPedido %}` | Status do pedido | enviado |
| `{% quantidade %}` | Quantidade | 3 |
| `{% frete %}` | Tipo de frete | expresso |

### Geo e Rede

| Tag | Descrição | Exemplo |
|---|---|---|
| `{% latitude %}` | Latitude | -23.5505 |
| `{% longitude %}` | Longitude | -46.6333 |
| `{% ipv4 %}` | IPv4 RFC 5737 | 203.0.113.42 |
| `{% ipv6 %}` | IPv6 RFC 3849 | 2001:db8::a1b2 |

### Países do Mundo

| Tag | Descrição | Exemplo |
|---|---|---|
| `{% pais %}` | Nome do país | Brasil |
| `{% codigoPais %}` | ISO 3166-1 alpha-2 | BR |
| `{% codigoTelefonePais %}` | Código DDI | +55 |
| `{% moedaPais %}` | Moeda ISO 4217 | BRL |
| `{% paisCompleto %}` | JSON com todos os campos | {...} |

---

## Listas Customizadas via Environment

Quando você precisa de valores específicos nos testes — documentos cadastrados no banco de homologação, emails com caixa real, UUIDs de registros existentes — defina listas no Environment do Insomnia. O plugin seleciona um valor aleatório da lista a cada execução. Se a variável não existir, gera um novo valor válido automaticamente.

### Variáveis suportadas

| Variável | Tag(s) | Separador | Formato esperado |
|---|---|---|---|
| `CPF_LIST` | `{% cpf %}` | espaço | 11 dígitos numéricos |
| `CNPJ_LIST` | `{% cnpj %}` | espaço | 14 caracteres (numérico ou alfanumérico) |
| `EMAIL_LIST` | `{% email %}` | espaço | email válido |
| `UUID_LIST` | `{% uuid %}`, `{% chaveIdempotencia %}` | espaço | UUID v4 |
| `PHONE_LIST` | `{% telefone %}` | espaço | telefone sem espaços |
| `CELULAR_LIST` | `{% celular %}` | espaço | celular sem espaços |
| `WHATSAPP_LIST` | `{% whatsapp %}` | espaço | WhatsApp sem espaços |
| `PIS_LIST` | `{% pis %}` | espaço | 11 dígitos numéricos |
| `CNS_LIST` | `{% numeroCNS %}` | espaço | 15 dígitos numéricos |
| `PLACA_LIST` | `{% placa %}` | espaço | AAA9999 ou AAA9A99 |
| `EDUCATION_INSTITUTION_LIST` | `{% instituicaoEnsino %}` | vírgula ou quebra de linha | nome da instituição |
| `EDUCATION_COURSE_LIST` | `{% curso %}` | vírgula ou quebra de linha | nome do curso |
| `EDUCATION_LEVEL_LIST` | `{% nivelFormacao %}` | vírgula ou quebra de linha | nível de formação |
| `EDUCATION_STATUS_LIST` | `{% statusAcademico %}` | vírgula ou quebra de linha | status acadêmico |
| `EDUCATION_PERIOD_LIST` | `{% periodoAcademico %}` | vírgula ou quebra de linha | período de estudo |

### Exemplos de configuração

**CPF_LIST** — CPFs cadastrados no banco de staging:
```
52998224725 98765432100 55544433322
```

**CNPJ_LIST** — CNPJs de empresas de homologação:
```
12345678000195 AB12CD34EF5601
```

**EMAIL_LIST** — emails com caixas reais para testar fluxos de auth:
```
qa1@suaempresa.com qa2@suaempresa.com qa3@suaempresa.com
```

**UUID_LIST** — IDs de registros pré-existentes no banco de staging:
```
550e8400-e29b-41d4-a716-446655440000 6ba7b810-9dad-11d1-80b4-00c04fd430c8
```

**PHONE_LIST / CELULAR_LIST / WHATSAPP_LIST** — números cadastrados em provedores de SMS/WhatsApp de staging (sem espaços, pois o espaço separa itens):
```
(11)3333-4444 (11)91234-5678 +551191234-5678
```

**PIS_LIST** — PIS de funcionários fictícios cadastrados no sistema de RH de homologação:
```
12345678901 98765432100
```

**CNS_LIST** — CNS de pacientes do ambiente de homologação do sistema de saúde:
```
123456789010004 700000000000001
```

**PLACA_LIST** — placas cadastradas no sistema de frotas/logística de staging:
```
ABC1234 BRA1A23 XYZ9876
```

**EDUCATION_COURSE_LIST** — cursos disponíveis no ambiente de homologação (vírgulas ou quebras de linha):
```
Ciência da Computação, Engenharia de Software
Administração
```

### Comportamento

- As listas de documentos, contato, UUID e placa usam **espaço** como separador
- As listas acadêmicas usam **vírgula** e/ou **quebra de linha**, preservando espaços dentro de cada valor
- Se a lista estiver vazia ou a variável não existir, o gerador aleatório é usado
- Um valor aleatório da lista é escolhido a cada execução da request

---

## Desenvolvimento

### Estrutura do Projeto

```
.
├── src/
│   ├── main.ts                      # Entry point do plugin
│   ├── types.ts                     # Interfaces compartilhadas
│   ├── utils.ts                     # Funções utilitárias
│   ├── constants/
│   │   ├── names.ts                 # Nomes e sobrenomes brasileiros
│   │   ├── locations.ts             # Cidades, estados, bairros, timezones
│   │   ├── business.ts              # Cargos, departamentos, sufixos, domínios
│   │   ├── enums.ts                 # Status, planos, tipos, emojis
│   │   ├── countries.ts             # Países, códigos ISO, telefones, moedas
│   │   ├── banking.ts                # Bancos FEBRABAN/COMPE e tipos de conta
│   │   └── templateTags.ts           # Definição das 98 template tags
│   └── generators/
│       ├── address.ts               # CEP, logradouro, bairro, cidade, estado
│       ├── allergy.ts               # Alergias
│       ├── bancario.ts              # Agência, conta e Pix
│       ├── bloodType.ts             # Tipo sanguíneo
│       ├── cnh.ts                   # CNH — geração e validação
│       ├── cnpj.ts                  # CNPJ — geração, validação e CNPJ_LIST
│       ├── cns.ts                   # CNS — geração e validação
│       ├── company.ts               # Razão social, cargo, departamento
│       ├── contact.ts               # Email, telefone, celular, WhatsApp
│       ├── content.ts               # Título, texto, emoji, cor, booleano
│       ├── countries.ts             # Países, códigos ISO, moeda
│       ├── cpf.ts                   # CPF — geração, validação e CPF_LIST
│       ├── creditCard.ts            # Cartões de crédito sintéticos e Luhn
│       ├── datetime.ts              # DateTime ISO e timezone
│       ├── ecommerce.ts             # SKU, EAN, pedido, status, frete
│       ├── education.ts             # Instituição, curso e dados acadêmicos
│       ├── financial.ts             # Moeda, valor, plano, status, cupom
│       ├── geo.ts                   # Latitude, longitude, IPv4, IPv6
│       ├── healthPlan.ts            # Convênio de saúde
│       ├── identifiers.ts           # UUID, ULID, API Key, JWT, senha, hash
│       ├── identity.ts              # Nomes e dados demográficos
│       ├── medicalRecordNumber.ts   # Número de prontuário
│       ├── pis.ts                   # PIS/PASEP — geração e validação
│       ├── professionalRegistration.ts # Conselhos profissionais
│       ├── rg.ts                    # RG — geração e validação
│       ├── tituloEleitor.ts         # Título de Eleitor
│       └── vehicle.ts               # Placas veiculares e listas de placas
├── test/
│   └── generators.test.ts           # Suite de 172 testes (100%)
├── .github/
│   └── workflows/
│       ├── test.yml                 # CI
│       └── publish-npm.yml          # Publicação no npm
├── .dev/
│   ├── implementations.md           # Backlog de funcionalidades
│   ├── management_branches.sh       # Gerenciamento de branches
│   ├── publish_release.sh           # Release automatizado
│   └── rename_file.sh              # Renomeação de arquivos
├── assets/
│   └── images/
│       └── insomnia-plugin-dados-falsos.jpg
├── AGENTS.md
├── CHANGELOG.md
├── package.json
├── README.md
├── DEVELOPMENT.md
├── TESTING.md
├── INSTALL.md
├── CONTRIBUTING.md
├── SECURITY.md
└── LICENSE
```

### Setup

```bash
npm install
npm run build
npm test
```

---

## Roadmap

Contribuições são bem-vindas. Funcionalidades planejadas para próximas versões:

### 📊 Média Prioridade
- **Dados Pessoais**: passaporte e documentos internacionais
- **Desenvolvimento**: MAC Address, User-Agent, Locale

---

## Licença

MIT — Veja o arquivo [LICENSE](LICENSE) para detalhes.

---

## Autor

Desenvolvido por [Roberto Godoy](https://github.com/godoyrw)  
[![ORCID](https://img.shields.io/badge/ORCID-0009--0003--2100--4772-green.svg)](https://orcid.org/0009-0003-2100-4772)

## Apoio

<iframe src="https://github.com/sponsors/godoyrw/card" title="Patrocinar - Roberto W Godoy" height="225" width="600" style="border: 0;"></iframe>
