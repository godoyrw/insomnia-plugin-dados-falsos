# 🇧🇷 Dados Falsos — Plugin Insomnia

> Gere dados sintéticos brasileiros com validação oficial diretamente nas Template Tags do Insomnia.

✔ CPF &nbsp;✔ CNPJ 2026 &nbsp;✔ CNH &nbsp;✔ CNS &nbsp;✔ PIS &nbsp;✔ RG &nbsp;✔ CEP &nbsp;✔ UUID &nbsp;✔ JWT &nbsp;✔ Placas Mercosul

**80 Template Tags &nbsp;·&nbsp; 0 dependências de produção &nbsp;·&nbsp; 100% TypeScript**

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
  ![80 Template Tags](https://img.shields.io/badge/Template%20Tags-80-orange)
  ![147 Tests](https://img.shields.io/badge/Tests-147%20Passing-success)
  [![Known Vulnerabilities](https://snyk.io/test/github/godoyrw/insomnia-plugin-dados-falsos/badge.svg)](https://snyk.io/test/github/godoyrw/insomnia-plugin-dados-falsos)
  [![Tests](https://github.com/godoyrw/insomnia-plugin-dados-falsos/actions/workflows/test.yml/badge.svg)](https://github.com/godoyrw/insomnia-plugin-dados-falsos/actions/workflows/test.yml)
  [![Publish NPM](https://github.com/godoyrw/insomnia-plugin-dados-falsos/actions/workflows/publish-npm.yml/badge.svg)](https://github.com/godoyrw/insomnia-plugin-dados-falsos/actions/workflows/publish-npm.yml)
  [![Release](https://github.com/godoyrw/insomnia-plugin-dados-falsos/actions/workflows/publish-release.yml/badge.svg)](https://github.com/godoyrw/insomnia-plugin-dados-falsos/actions/workflows/publish-release.yml)
  ![Gitea Last Commit](https://img.shields.io/gitea/last-commit/godoyrw/insomnia-plugin-dados-falsos)
  ![Static Badge](https://img.shields.io/badge/Godah-Code-blue?logo=github) 
  [![ORCID](https://img.shields.io/badge/ORCID-0009--0003--2100--4772-green.svg)](https://orcid.org/0009-0003-2100-4772)

  <img src="./assets/images/insomnia-plugin-dados-falsos.jpg" alt="Dados Falsos - Plugin Insomnia">
</div>

---

## Segurança e LGPD

Este plugin gera **apenas dados sintéticos**. Nenhuma informação é obtida da internet. Nenhum documento real é utilizado. Os documentos são matematicamente válidos, mas **não representam pessoas físicas ou jurídicas existentes**. Ideal para ambientes sujeitos à LGPD onde o uso de dados reais em testes é proibido.

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

### Educação

| Tag | Descrição | Exemplo |
|---|---|---|
| `{% instituicaoEnsino %}` | Instituição de ensino | Universidade de São Paulo (USP) |
| `{% curso %}` | Curso acadêmico | Ciência da Computação |

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
| `PHONE_LIST` | `{% telefone %}` | espaço | formato livre |
| `CELULAR_LIST` | `{% celular %}` | espaço | formato livre |
| `WHATSAPP_LIST` | `{% whatsapp %}` | espaço | formato livre |
| `PIS_LIST` | `{% pis %}` | espaço | 11 dígitos numéricos |
| `CNS_LIST` | `{% numeroCNS %}` | espaço | 15 dígitos numéricos |
| `PLACA_LIST` | `{% placa %}` | espaço | AAA9999 ou AAA9A99 |

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

**PHONE_LIST / CELULAR_LIST / WHATSAPP_LIST** — números cadastrados em provedores de SMS/WhatsApp de staging:
```
(11) 3333-4444
(11) 91234-5678
+55 11 91234-5678
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

### Comportamento

- Os valores são separados por **espaço** (um ou mais)
- Se a lista estiver vazia ou a variável não existir, o gerador aleatório é usado
- Um valor aleatório da lista é escolhido a cada execução da request

---

## Desenvolvimento

### Estrutura do Projeto

```
src/
├── constants/
│   ├── names.ts             # Nomes e sobrenomes brasileiros
│   ├── locations.ts         # Cidades, estados, bairros, timezones
│   ├── business.ts          # Cargos, departamentos, sufixos
│   ├── enums.ts             # Status, planos, tipos
│   ├── countries.ts         # Países e códigos ISO
│   └── templateTags.ts      # Definição das 80 template tags
├── generators/
│   ├── identity.ts          # Nomes e dados demográficos
│   ├── cpf.ts               # CPF — geração, validação, context
│   ├── cnpj.ts              # CNPJ — geração, validação, context
│   ├── cnh.ts               # CNH — geração e validação
│   ├── rg.ts                # RG — geração e validação
│   ├── pis.ts               # PIS/PASEP — geração e validação
│   ├── cns.ts               # CNS — geração e validação
│   ├── vehicle.ts           # Placas veiculares (antiga e Mercosul)
│   ├── contact.ts           # Email, telefone, celular, WhatsApp
│   ├── address.ts           # CEP, logradouro, bairro, cidade, estado
│   ├── company.ts           # Razão social, cargo, departamento
│   ├── financial.ts         # Moeda, valor, plano, status, cupom
│   ├── datetime.ts          # DateTime ISO e timezone
│   ├── identifiers.ts       # UUID, ULID, API Key, JWT, senha, hash
│   ├── content.ts           # Título, texto, emoji, cor, booleano
│   ├── ecommerce.ts         # SKU, EAN, pedido, status, frete
│   ├── geo.ts               # Latitude, longitude, IPv4, IPv6
│   ├── countries.ts         # Países, códigos ISO, moeda
│   ├── bloodType.ts         # Tipo sanguíneo
│   ├── healthPlan.ts        # Convênio de saúde
│   ├── allergy.ts           # Alergias
│   ├── medicalRecordNumber.ts   # Número de prontuário
│   └── professionalRegistration.ts  # Conselhos profissionais
├── main.ts                  # Entry point do plugin
├── types.ts                 # Tipos TypeScript
└── utils.ts                 # Funções utilitárias
test/
└── generators.test.ts       # Suite de 147 testes (100%)
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
- **Dados Acadêmicos**: Instituição de ensino, curso de graduação/técnico
- **Dados Financeiros**: Agência/conta bancária (ranges fictícios), chave Pix aleatória
- **Dados Pessoais**: Título de Eleitor, Passaporte
- **Desenvolvimento**: MAC Address, User-Agent, Locale

---

## Licença

MIT — Veja o arquivo [LICENSE](LICENSE) para detalhes.

---

## Autor

Desenvolvido por [Roberto Godoy](https://github.com/godoyrw)  
[![ORCID](https://img.shields.io/badge/ORCID-0009--0003--2100--4772-green.svg)](https://orcid.org/0009-0003-2100-4772)
