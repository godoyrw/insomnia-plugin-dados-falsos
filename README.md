# Dados Falsos - Plugin Insomnia

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/insomnia-plugin-dados-falsos.svg)](https://www.npmjs.com/package/insomnia-plugin-dados-falsos)
[![npm downloads](https://img.shields.io/npm/dt/insomnia-plugin-dados-falsos.svg)](https://www.npmjs.com/package/insomnia-plugin-dados-falsos)
[![GitHub stars](https://img.shields.io/github/stars/godoyrw/insomnia-plugin-dados-falsos.svg)](https://github.com/godoyrw/insomnia-plugin-dados-falsos)
[![Node.js](https://img.shields.io/badge/node-%3E%3D12.0.0-brightgreen)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Insomnia](https://img.shields.io/badge/Insomnia-Plugin-purple)](https://insomnia.rest/)
[![ORCID](https://img.shields.io/badge/ORCID-0009--0003--2100--4772-green.svg)](https://orcid.org/0009-0003-2100-4772)

Plugin para Insomnia focado em massa sintética pt-BR com consistência e validação real de RG, CNH, CPF, CNPJ, entre outros. Reduzindo o risco de uso de dados reais em testes. Oferece 80+ template tags cobrindo identidade, contato, endereço, empresa, financeiro, e-commerce, geolocalização e mais — com suporte ao novo formato alfanumérico CNPJ 2026 da Receita Federal.

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

---

## Template Tags

### Identidade

- `{% nomeCompleto %}` — Nome completo aleatório
- `{% primeiroNome %}` — Primeiro nome aleatório
- `{% sobrenome %}` — Sobrenome aleatório
- `{% nomeSocial %}` — Nome social / apelido
- `{% usuario %}` — Usuário/handle
- `{% nomeUsuario %}` — Nome de usuário (formato: nome.sobrenome.numero)
- `{% cpf %}` — CPF válido com dígitos verificadores
- `{% cnpj %}` — CNPJ válido — alfanumérico 2026 (padrão) ou numérico
- `{% rg %}` — RG / CNH aleatória (11 dígitos)
- `{% dataNascimento %}` — Data de nascimento (YYYY-MM-DD)
- `{% dataNascimento DD/MM/YYYY %}` — Data formatada
- `{% dataNascimento YYYYMMDD %}` — Data sem separadores
- `{% dataNascimento ISO %}` — Data ISO com timestamp
- `{% genero %}` — masculino, feminino, nao_binario, prefiro_nao_dizer
- `{% tipoSanguineo %}` — Tipo sanguíneo (A+, A-, B+, B-, AB+, AB-, O+, O-)

### Saúde

- `{% numeroProntuario %}` — Número de prontuário médico
- `{% numeroCNS %}` — Número do Cartão Nacional de Saúde (CNS)
- `{% convenio %}` — Nome de convênio de saúde
- `{% alergia %}` — Alergia
- `{% conselhoProfissional %}` — Número do conselho profissional (CRM, CREA, OAB, etc.)
- `{% conselhoProfissional CRM %}` — CRM (Medicina)
- `{% conselhoProfissional CREA %}` — CREA (Engenharia)
- `{% conselhoProfissional OAB %}` — OAB (Direito)

### Contato

- `{% email %}` — Email aleatório
- `{% email suaempresa.com.br %}` — Email com domínio customizado
- `{% emailExemplo %}` — Email com domínio example.com
- `{% telefone %}` — Telefone fixo: (XX) XXXX-XXXX
- `{% celular %}` — Celular: (XX) 9XXXX-XXXX
- `{% whatsapp %}` — WhatsApp: +55 XX 9XXXX-XXXX

### Endereço BR

- `{% cep %}` — CEP: XXXXX-XXX
- `{% logradouro %}` — Logradouro (Rua/Avenida/etc)
- `{% numero %}` — Número do endereço
- `{% complemento %}` — Complemento (Apto, Bloco, etc)
- `{% endereco %}` — Somente logradouro (sem número)
- `{% enderecoNumero %}` — Endereço completo: Rua X, 123
- `{% bairro %}` — Bairro aleatório
- `{% cidade %}` — Cidade aleatória
- `{% estado %}` — UF (sigla do estado)

### Empresa e Trabalho

- `{% razaoSocial %}` — Razão social
- `{% nomeFantasia %}` — Nome fantasia
- `{% emailCorporativo %}` — E-mail corporativo
- `{% cargo %}` — Cargo
- `{% departamento %}` — Departamento

### Financeiro

- `{% moeda %}` — Moeda (BRL)
- `{% valor %}` — Valor monetário
- `{% plano %}` — gratuito, profissional, empresarial
- `{% cupom %}` — Cupom de desconto
- `{% statusPagamento %}` — pago, pendente, falhou, reembolsado

### Datas e Tempo

- `{% datetimeIso %}` — Datetime ISO: 2026-01-21T14:35:20Z
- `{% timezone %}` — Timezone (America/Sao_Paulo, etc)

### Identificadores e Segurança

- `{% uuid %}` — UUID v4 aleatório
- `{% ulid %}` — ULID aleatório
- `{% chaveIdempotencia %}` — Chave de Idempotência
- `{% chaveApi %}` — Chave de API
- `{% tokenJwt %}` — Token JWT
- `{% senha %}` — Senha forte
- `{% hashSha256 %}` — Hash SHA256

### Conteúdo / Texto

- `{% titulo %}` — Título
- `{% descricao %}` — Descrição
- `{% textoLongo %}` — Texto longo (200-500 caracteres)
- `{% emoji %}` — Emoji aleatório
- `{% corHex %}` — Cor hexadecimal: #XXXXXX
- `{% booleano %}` — true ou false

### E-commerce / Pedidos

- `{% sku %}` — SKU: SKU-XXXXX
- `{% ean %}` — EAN: 13 dígitos
- `{% pedido %}` — Pedido: ORD-YYYYMMDD-XXXX
- `{% statusPedido %}` — criado, pago, enviado, entregue, cancelado
- `{% quantidade %}` — Quantidade
- `{% frete %}` — padrao, expresso

### Geo e Rede

- `{% latitude %}` — Latitude
- `{% longitude %}` — Longitude
- `{% ipv4 %}` — IP v4 (faixa reservada para docs)
- `{% ipv6 %}` — IP v6 (reservado para docs)

### Países do Mundo

- `{% pais %}` — Nome do país aleatório
- `{% codigoPais %}` — Código ISO do país (2 letras)
- `{% codigoTelefonePais %}` — Código de telefone internacional
- `{% moedaPais %}` — Moeda do país (ISO 4217)
- `{% paisCompleto %}` — Dados completos do país em JSON

---

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
    "rg": "{% rg %}",
    "data_nascimento": "{% dataNascimento %}",
    "genero": "{% genero %}"
  },
  "contato": {
    "email": "{% email %}",
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
  "saúde": {
    "tipoSanguineo": "{% tipoSanguineo %}",
    "numeroProntuario": "{% numeroProntuario %}",
    "numeroCNS": "{% numeroCNS %}",
    "convenio": "{% convenio %}",
    "alergia": "{% alergia %}",
    "conselhoProfissional": "{% conselhoProfissional %}"
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
✅ 76+ template tags  
✅ Listas customizadas via Environment para cenários determinísticos  
✅ Identificadores únicos (UUID, ULID, API Keys, JWT)  
✅ Dados de empresa, financeiro e e-commerce  
✅ Geolocalização e dados de rede  
✅ Escrito em TypeScript com type safety completo  
✅ Suite de testes com 110 casos e 100% de aprovação  
✅ Licença MIT — código aberto e colaborativo  

---

## Desenvolvimento

O plugin é escrito em **TypeScript** para melhor type safety e manutenibilidade.

- JSDoc completo em português
- Arquitetura limpa e coesa, separada por domínio
- Algoritmos de RG, CNH, CPF e CNPJ com Dígito Verificador (DV) real — calculados pelo algoritmo oficial da Receita Federal, garantindo números matematicamente válidos, não apenas sequências aleatórias
- Suporte ao novo formato alfanumérico 2026 da Receita Federal — base com letras A-Z e números, pioneiro entre plugins Insomnia
- Suite de testes com 110 casos e 100% de aprovação

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
└── generators.test.ts           # Suite de 75 testes
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
  Total   120 testes
  Passou  110
  Score   100%
──────────────────────────────────────────────────
```

---

## Versão

v1.3.0

---

## Licença

MIT — Veja o arquivo LICENSE para detalhes.

---

## Autor

Desenvolvido por [Roberto Godoy](https://github.com/godoyrw)  
[![ORCID](https://img.shields.io/badge/ORCID-0009--0003--2100--4772-green.svg)](https://orcid.org/0009-0003-2100-4772)