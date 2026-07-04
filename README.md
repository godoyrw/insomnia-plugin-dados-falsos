# Dados Falsos - Plugin Insomnia

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/insomnia-plugin-dados-falsos.svg)](https://www.npmjs.com/package/insomnia-plugin-dados-falsos)
[![npm downloads](https://img.shields.io/npm/dt/insomnia-plugin-dados-falsos.svg)](https://www.npmjs.com/package/insomnia-plugin-dados-falsos)
[![GitHub stars](https://img.shields.io/github/stars/godoyrw/insomnia-plugin-dados-falsos.svg)](https://github.com/godoyrw/insomnia-plugin-dados-falsos)
[![Node.js](https://img.shields.io/badge/node-%3E%3D12.0.0-brightgreen)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Insomnia](https://img.shields.io/badge/Insomnia-Plugin-purple)](https://insomnia.rest/)
[![ORCID](https://img.shields.io/badge/ORCID-0009--0003--2100--4772-green.svg)](https://orcid.org/0009-0003-2100-4772)

Plugin para Insomnia focado em massa sintética pt-BR com consistência e validação real de CNH, CPF, CNPJ, entre outros. Reduzindo o risco de uso de dados reais em testes. Oferece 72+ template tags cobrindo identidade, contato, endereço, empresa, financeiro, e-commerce, geolocalização e mais — com suporte ao novo formato alfanumérico CNPJ 2026 da Receita Federal.

<div align="center">
  <img src="./assets/images/insomnia-plugin-dados-falsos.jpg" alt="Dados Falsos - Plugin Insomnia">
</div>

---

## Instalação

### Opção 1: Via NPM no Insomnia (Recomendado)

No Insomnia, vá em **Preferences → Plugins → Install Plugin** e digite:

```
insomnia-plugin-dados-falsos
```

### Opção 2: Instalação Local (Desenvolvimento)

1. Clone ou baixe este repositório
2. Localize a pasta de plugins do Insomnia:
   - **Linux/Mac**: `~/.config/Insomnia/plugins/`
   - **Windows**: `%APPDATA%\Insomnia\plugins\`
3. Copie a pasta do plugin:
```bash
cp -r insomnia-plugin-dados-falsos ~/.config/Insomnia/plugins/
```
4. Compile o TypeScript:
```bash
npm install && npm run build
```
5. Reinicie o Insomnia e confirme em **Preferences → Plugins**

### Opção 3: Instalação Manual via Arquivo

1. Compacte a pasta em `.tar.gz` ou `.zip`
2. No Insomnia: **Preferences → Plugins → Install Plugin**
3. Selecione o arquivo compactado

| Categoria   | Tag                               | Descrição                                           | Exemplo                                                 |
| ----------- | --------------------------------- | --------------------------------------------------- | ------------------------------------------------------- |
| Identidade  | `{% nomeCompleto %}`              | Nome completo aleatório                             | João da Silva                                           |
| Identidade  | `{% primeiroNome %}`              | Primeiro nome aleatório                             | João                                                    |
| Identidade  | `{% sobrenome %}`                 | Sobrenome aleatório                                 | Silva                                                   |
| Identidade  | `{% nomeSocial %}`                | Nome social / apelido                               | Joca                                                    |
| Identidade  | `{% usuario %}`                   | Handle/usuário aleatório                            | joaosilva                                               |
| Identidade  | `{% nomeUsuario %}`               | Username formato nome.sobrenome.numero              | joao.silva.42                                           |
| Identidade  | `{% cpf %}`                       | CPF válido com dígitos verificadores                | 123.456.789-09                                          |
| Identidade  | `{% cnpj %}`                      | CNPJ válido (numérico ou alfanumérico 2026)         | 12.345.678/0001-95                                      |
| Identidade  | `{% cnh %}`                       | CNH válida (11 dígitos)                             | 12345678909                                             |
| Identidade  | `{% rg %}`                        | RG válido                                           | 12345678X                                             |
| Identidade  | `{% dataNascimento %}`            | Data de nascimento padrão ISO (YYYY-MM-DD)          | 1995-03-21                                              |
| Identidade  | `{% dataNascimento DD/MM/YYYY %}` | Data formatada                                      | 21/03/1995                                              |
| Identidade  | `{% dataNascimento YYYYMMDD %}`   | Data sem separadores                                | 19950321                                                |
| Identidade  | `{% dataNascimento ISO %}`        | Data ISO com timestamp                              | 1995-03-21T00:00:00Z                                    |
| Identidade  | `{% genero %}`                    | masculino, feminino, nao_binario, prefiro_nao_dizer | masculino                                               |
| Identidade  | `{% tipoSanguineo %}`             | Tipo sanguíneo                                      | O+                                                      |
| Saúde       | `{% numeroProntuario %}`          | Número de prontuário médico                         | PRN-102938                                              |
| Saúde       | `{% numeroCNS %}`                 | Cartão Nacional de Saúde                            | 898000000000001                                         |
| Saúde       | `{% convenio %}`                  | Nome de convênio médico                             | Amil                                                    |
| Saúde       | `{% alergia %}`                   | Alergia aleatória                                   | lactose                                                 |
| Saúde       | `{% conselhoProfissional %}`      | Conselho profissional genérico                      | CRM 123456                                              |
| Saúde       | `{% conselhoProfissional CRM %}`  | CRM médico                                          | CRM 123456-SP                                           |
| Saúde       | `{% conselhoProfissional CREA %}` | CREA engenharia                                     | CREA 123456                                             |
| Saúde       | `{% conselhoProfissional OAB %}`  | OAB advocacia                                       | OAB/SP 123456                                           |
| Contato     | `{% email %}`                     | Email aleatório                                     | [joao@gmail.com](mailto:joao@gmail.com)                 |
| Contato     | `{% email suaempresa.com.br %}`   | Email com domínio customizado                       | [joao@suaempresa.com.br](mailto:joao@suaempresa.com.br) |
| Contato     | `{% emailExemplo %}`              | Email example.com                                   | [joao@example.com](mailto:joao@example.com)             |
| Contato     | `{% telefone %}`                  | Telefone fixo                                       | (11) 3333-4444                                          |
| Contato     | `{% celular %}`                   | Celular BR                                          | (11) 91234-5678                                         |
| Contato     | `{% whatsapp %}`                  | WhatsApp internacional BR                           | +55 11 91234-5678                                       |
| Endereço BR | `{% cep %}`                       | CEP válido                                          | 01310-000                                               |
| Endereço BR | `{% logradouro %}`                | Rua/Avenida                                         | Rua Augusta                                             |
| Endereço BR | `{% numero %}`                    | Número                                              | 123                                                     |
| Endereço BR | `{% complemento %}`               | Complemento                                         | Apto 42                                                 |
| Endereço BR | `{% endereco %}`                  | Apenas logradouro                                   | Rua Augusta                                             |
| Endereço BR | `{% enderecoNumero %}`            | Logradouro + número                                 | Rua Augusta, 123                                        |
| Endereço BR | `{% bairro %}`                    | Bairro aleatório                                    | Bela Vista                                              |
| Endereço BR | `{% cidade %}`                    | Cidade aleatória                                    | São Paulo                                               |
| Endereço BR | `{% estado %}`                    | UF (sigla)                                          | SP                                                      |
| Empresa     | `{% razaoSocial %}`               | Razão social                                        | ACME LTDA                                               |
| Empresa     | `{% nomeFantasia %}`              | Nome fantasia                                       | ACME Tech                                               |
| Empresa     | `{% emailCorporativo %}`          | Email corporativo                                   | [contato@empresa.com](mailto:contato@empresa.com)       |
| Empresa     | `{% cargo %}`                     | Cargo profissional                                  | Engenheiro de Software                                  |
| Empresa     | `{% departamento %}`              | Departamento                                        | Tecnologia                                              |
| Financeiro  | `{% moeda %}`                     | Moeda                                               | BRL                                                     |
| Financeiro  | `{% valor %}`                     | Valor monetário                                     | 199.90                                                  |
| Financeiro  | `{% plano %}`                     | Plano de assinatura                                 | profissional                                            |
| Financeiro  | `{% cupom %}`                     | Código de desconto                                  | SAVE20                                                  |
| Financeiro  | `{% statusPagamento %}`           | Status pagamento                                    | pago                                                    |
| Datas       | `{% datetimeIso %}`               | ISO datetime                                        | 2026-01-21T14:35:20Z                                    |
| Datas       | `{% timezone %}`                  | Timezone                                            | America/Sao_Paulo                                       |
| Segurança   | `{% uuid %}`                      | UUID v4                                             | 550e8400-e29b-41d4-a716-446655440000                    |
| Segurança   | `{% ulid %}`                      | ULID                                                | 01ARZ3NDEKTSV4RRFFQ69G5FAV                              |
| Segurança   | `{% chaveIdempotencia %}`         | Chave idempotente                                   | idem_abc123                                             |
| Segurança   | `{% chaveApi %}`                  | API key                                             | sk_test_abc123                                          |
| Segurança   | `{% tokenJwt %}`                  | JWT                                                 | eyJhbGciOiJI...                                         |
| Segurança   | `{% senha %}`                     | Senha forte                                         | Xy!9pQ#2mL                                              |
| Segurança   | `{% hashSha256 %}`                | Hash SHA256                                         | a94a8fe5...                                             |
| Conteúdo    | `{% titulo %}`                    | Título aleatório                                    | Sistema de Pagamentos                                   |
| Conteúdo    | `{% descricao %}`                 | Descrição curta                                     | Descrição gerada automaticamente                        |
| Conteúdo    | `{% textoLongo %}`                | Texto 200–500 caracteres                            | Lorem ipsum...                                          |
| Conteúdo    | `{% emoji %}`                     | Emoji aleatório                                     | 🚀                                                      |
| Conteúdo    | `{% corHex %}`                    | Cor hexadecimal                                     | #A1B2C3                                                 |
| Conteúdo    | `{% booleano %}`                  | Booleano                                            | true                                                    |
| E-commerce  | `{% sku %}`                       | SKU                                                 | SKU-12345                                               |
| E-commerce  | `{% ean %}`                       | EAN 13 dígitos                                      | 7891234567890                                           |
| E-commerce  | `{% pedido %}`                    | ID pedido                                           | ORD-20260704-1234                                       |
| E-commerce  | `{% statusPedido %}`              | Status pedido                                       | enviado                                                 |
| E-commerce  | `{% quantidade %}`                | Quantidade                                          | 3                                                       |
| E-commerce  | `{% frete %}`                     | Tipo frete                                          | expresso                                                |
| Geo e Rede  | `{% latitude %}`                  | Latitude                                            | -23.5505                                                |
| Geo e Rede  | `{% longitude %}`                 | Longitude                                           | -46.6333                                                |
| Geo e Rede  | `{% ipv4 %}`                      | IPv4 RFC 5737                                       | 203.0.113.42                                            |
| Geo e Rede  | `{% ipv6 %}`                      | IPv6 RFC 3849                                       | 2001:db8::a1b2                                          |
| Países      | `{% pais %}`                      | País                                                | Brasil                                                  |
| Países      | `{% codigoPais %}`                | ISO 3166-1                                          | BR                                                      |
| Países      | `{% codigoTelefonePais %}`        | Código telefone                                     | +55                                                     |
| Países      | `{% moedaPais %}`                 | Moeda ISO                                           | BRL                                                     |
| Países      | `{% paisCompleto %}`              | JSON completo país                                  | {...}                                                   |


## Exemplo Completo

```json
{
  "identidade": {
    "nome_completo": "{% nomeCompleto %}",
    "primeiro_nome": "{% primeiroNome %}",
    "sobrenome": "{% sobrenome %}",
    "nome_social": "{% nomeSocial %}",
    "usuario": "{% usuario %}",
    "nome_usuario": "{% nomeUsuario %}",
    "cpf": "{% cpf %}",
    "cnpj": "{% cnpj %}",
    "cnh": "{% cnh %}",
    "rg": "{% rg %}",
    "data_nascimento": "{% dataNascimento %}",
    "genero": "{% genero %}"
  },
  "contato": {
    "email": "{% email %}",
    "email_exemplo": "{% emailExemplo %}",
    "email_corporativo": "{% emailCorporativo %}",
    "telefone": "{% telefone %}",
    "celular": "{% celular %}",
    "whatsapp": "{% whatsapp %}"
  },
  "endereco": {
    "cep": "{% cep %}",
    "logradouro": "{% logradouro %}",
    "numero": "{% numero %}",
    "complemento": "{% complemento %}",
    "bairro": "{% bairro %}",
    "cidade": "{% cidade %}",
    "estado": "{% estado %}"
  },
  "empresa": {
    "razao_social": "{% razaoSocial %}",
    "nome_fantasia": "{% nomeFantasia %}",
    "cargo": "{% cargo %}",
    "departamento": "{% departamento %}"
  },
  "financeiro": {
    "moeda": "{% moeda %}",
    "valor": "{% valor %}",
    "plano": "{% plano %}",
    "cupom": "{% cupom %}",
    "status_pagamento": "{% statusPagamento %}"
  },
  "datas": {
    "datetime_iso": "{% datetimeIso %}",
    "timezone": "{% timezone %}"
  },
  "identificadores": {
    "uuid": "{% uuid %}",
    "ulid": "{% ulid %}",
    "chave_idempotencia": "{% chaveIdempotencia %}",
    "chave_api": "{% chaveApi %}",
    "token_jwt": "{% tokenJwt %}",
    "senha": "{% senha %}",
    "hash_sha256": "{% hashSha256 %}"
  },
  "conteudo": {
    "titulo": "{% titulo %}",
    "descricao": "{% descricao %}",
    "texto_longo": "{% textoLongo %}",
    "emoji": "{% emoji %}"
  },
  "ecommerce": {
    "sku": "{% sku %}",
    "ean": "{% ean %}",
    "pedido": "{% pedido %}",
    "status_pedido": "{% statusPedido %}",
    "quantidade": "{% quantidade %}",
    "frete": "{% frete %}"
  },
  "geo": {
    "latitude": "{% latitude %}",
    "longitude": "{% longitude %}",
    "ipv4": "{% ipv4 %}",
    "ipv6": "{% ipv6 %}"
  },
  "paises": {
    "pais": "{% pais %}",
    "codigo_pais": "{% codigoPais %}",
    "codigo_telefone": "{% codigoTelefonePais %}",
    "moeda": "{% moedaPais %}",
    "pais_completo": "{% paisCompleto %}"
  },
  "utilitarios": {
    "cor_hex": "{% corHex %}",
    "booleano": "{% booleano %}"
  },
  "saude": {
    "tipo_sanguineo": "{% tipoSanguineo %}",
    "numero_prontuario": "{% numeroProntuario %}",
    "numero_cns": "{% numeroCNS %}",
    "convenio": "{% convenio %}",
    "alergia": "{% alergia %}",
    "conselho_profissional": "{% conselhoProfissional %}",
    "crm": "{% conselhoProfissional CRM %}",
    "crea": "{% conselhoProfissional CREA %}",
    "oab": "{% conselhoProfissional OAB %}"
  }
}
```

---

## Listas Customizadas via Environment

Para usar CPFs ou CNPJs específicos em cenários determinísticos, defina no Environment do Insomnia:

**CPF_LIST**
```
12345678901 98765432100 55544433322
```

**CNPJ_LIST**
```
12345678901234 98765432100123
```

O plugin seleciona um valor aleatório da lista. Se não estiver definida, gera um novo valor válido automaticamente.

---

## Características

✅ CNH, CPF e CNPJ (formato antigo e novo alfanumérico 2026) com Dígito Verificador real  
✅ Dados realistas em português brasileiro  
✅ Suporte a múltiplos formatos de data  
✅ Telefones, WhatsApp e CEP com formatação brasileira  
✅ 72+ template tags  
✅ Listas customizadas via Environment para cenários determinísticos  
✅ Identificadores únicos (UUID, ULID, API Keys, JWT)  
✅ Dados de empresa, financeiro e e-commerce  
✅ Geolocalização e dados de rede  
✅ Escrito em TypeScript com type safety completo  
✅ Suite de testes com 122 casos e 100% de aprovação  
✅ Licença MIT — código aberto e colaborativo  

---

## Próximos Passos / Roadmap

Conforme definido no plano de implementação ([`.dev/implementations.md`](.dev/implementations.md)), os seguintes recursos são prioridades para futuras versões:

### 🩺 Alta Prioridade
- **Dados de Saúde**: Número de cartão SUS fictício, convênio fictício
- **Dados Pessoais e Profissionais**: PIS/PASEP, Título de Eleitor, Passaporte, Renda mensal, Escolaridade, Nome social/apelido
- **Dados Veiculares**: Placa Veicular (formato Mercosul e antiga)
- **Dados Previdenciários/Trabalhistas**: Número do PIS/PASEP/NIT, Número do Título de Eleitor

### 📊 Média Prioridade
- **Dados Acadêmicos**: Nome de Instituição de Ensino, Nome de Curso Técnico/Graduação
- **Dados Financeiros Específicos**: Dados Bancários Básicos (Agência/Conta), Chave Pix Aleatória
- **Dados Pessoais e Profissionais**: Banco, Agência, Conta, Telefone comercial, Site pessoal
- **Desenvolvimento**: MAC Address, User-Agent, Locale
- **Internet**: Username (avancado)

Esses recursos serão implementados seguindo os mesmos padrões de qualidade:
- Zero dependências externas
- Performance <1ms
- Validação real de dados brasileiros
- Documentação completa em português
- Testes automatizados de qualidade

## Desenvolvimento

O plugin é escrito em **TypeScript** para melhor type safety e manutenibilidade.

- JSDoc completo em português
- Arquitetura limpa e coesa, separada por domínio
- Algoritmos de CNH, CPF e CNPJ com Dígito Verificador (DV) real — calculados pelo algoritmo oficial da Receita Federal, garantindo números matematicamente válidos, não apenas sequências aleatórias
- Suporte ao novo formato alfanumérico 2026 da Receita Federal — base com letras A-Z e números, pioneiro entre plugins Insomnia
- Suite de testes com 122 casos e 100% de aprovação

### Estrutura do Projeto

```
src/
├── constants/
│   ├── business.ts      # Dados de empresas e cargos
│   ├── countries.ts     # Lista de países e códigos
│   ├── enums.ts         # Enumerações (gêneros, status, etc)
│   ├── locations.ts     # Cidades, estados, bairros
│   ├── names.ts         # Nomes e sobrenomes brasileiros
│   └── templateTags.ts  # Definição dos template tags
├── generators/
│   ├── address.ts       # Endereço BR
│   ├── cnpj.ts          # Gerador CNPJ (antigo e 2026)
│   ├── company.ts       # Empresa e trabalho
│   ├── contact.ts       # Contato
│   ├── content.ts       # Conteúdo e texto
│   ├── countries.ts     # Países do mundo
│   ├── cpf.ts           # Gerador CPF
│   ├── datetime.ts      # Datas e tempo
│   ├── ecommerce.ts     # E-commerce
│   ├── financial.ts     # Financeiro
│   ├── geo.ts           # Geolocalização e rede
│   ├── identifiers.ts   # UUID, ULID, JWT, etc
│   └── identity.ts      # Identidade brasileira
├── main.ts              # Entry point do plugin
├── types.ts             # Tipos TypeScript
└── utils.ts             # Helpers matemáticos e de string
test/
└── generators.test.ts           # Suite de 122 testes
```

### Setup

```bash
npm install
```

### Build

```bash
npm run build
```

Compila os arquivos na pasta `dist/`.

### Watch Mode

```bash
npm run dev
```

Recompila automaticamente ao detectar mudanças nos arquivos TypeScript.

### Testes

```bash
npm test
```

```
  ✓ cpf: deve ter 11 dígitos (0.1ms)
  ✓ cnpj: alfanumérico deve ter 14 caracteres (0.2ms)
  ✓ cnpj: numérico deve conter apenas números (0.1ms)
  ...

──────────────────────────────────────────────────
  Resultados
──────────────────────────────────────────────────
  Total   122 testes
  Passou  122
  Score   100%
──────────────────────────────────────────────────
```

---

## Versão

v1.4.0

---

## Licença

MIT — Veja o arquivo LICENSE para detalhes.

---

## Autor

Desenvolvido por [Roberto Godoy](https://github.com/godoyrw)  
[![ORCID](https://img.shields.io/badge/ORCID-0009--0003--2100--4772-green.svg)](https://orcid.org/0009-0003-2100-4772)