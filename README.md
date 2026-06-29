# Dados Falsos - Plugin Insomnia

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/insomnia-plugin-dados-falsos.svg)](https://www.npmjs.com/package/insomnia-plugin-dados-falsos)
[![npm downloads](https://img.shields.io/npm/dt/insomnia-plugin-dados-falsos.svg)](https://www.npmjs.com/package/insomnia-plugin-dados-falsos)
[![GitHub stars](https://img.shields.io/github/stars/godoyrw/insomnia-plugin-dados-falsos.svg)](https://github.com/godoyrw/insomnia-plugin-dados-falsos)
[![Node.js](https://img.shields.io/badge/node-%3E%3D12.0.0-brightgreen)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Insomnia](https://img.shields.io/badge/Insomnia-Plugin-purple)](https://insomnia.rest/)
[![ORCID](https://img.shields.io/badge/ORCID-0009--0003--2100--4772-green.svg)](https://orcid.org/0009-0003-2100-4772)

Plugin para Insomnia focado em massa sintética pt-BR com consistência e validação (CPF/CNPJ), reduzindo risco de uso de dados reais em testes. Entrega 50+ tags, formatos de data, e geradores de identificadores e credenciais de teste (JWT, idempotência, API keys, hashes), com override por Environment para cenários determinísticos.

<div align="center">
  <img src="./assets/images/insomnia-plugin-dados-falsos.jpg" alt="Node Ecosystem Doctor">
</div>

## Instalação

### Opção 1: Instalação Local (Desenvolvimento)

1. Clone ou baixe este repositório
2. Localize a pasta de plugins do Insomnia:
   - **Linux/Mac**: `~/.config/Insomnia/plugins/`
   - **Windows**: `%APPDATA%\Insomnia\plugins\`

3. Copie a pasta do plugin para lá:
```bash
cp -r insomnia-plugin-dados-falsos ~/.config/Insomnia/plugins/
```

1. Se estiver desenvolvendo, compile o TypeScript:
```bash
npm install
npm run build
```

1. Reinicie o Insomnia
2. Vá em `Preferences > Plugins` e confirme que o plugin aparece na lista

### Opção 2: Instalação via NPM (Recomendado)

```bash
# No Insomnia, vá em Preferences > Plugins > Install Plugin
# Digite o nome do pacote: insomnia-plugin-dados-falsos
```

### Opção 3: Instalação Manual via Arquivo

1. Compacte a pasta em `.tar.gz` ou `.zip`
2. No Insomnia: `Preferences > Plugins > Install Plugin`
3. Selecione o arquivo compactado

## Como Usar

Use qualquer um dos template tags abaixo em seus campos de requisição:

### Identidade

- `{% nomeCompleto %}` - Nome completo aleatório
- `{% primeiroNome %}` - Primeiro nome aleatório
- `{% sobrenome %}` - Sobrenome aleatório
- `{% nomeSocial %}` - Nome social / apelido
- `{% usuario %}` - Usuário/handle
- `{% nomeUsuario %}` - Nome de usuário (formato: nome.sobrenome.numero)
- `{% cpf %}` - CPF válido com dígitos verificadores
- `{% cnpj %}` - CNPJ válido com dígitos verificadores
- `{% rg %}` - RG / CNH aleatória (11 dígitos)
- `{% dataNascimento %}` - Data de nascimento (YYYY-MM-DD)
- `{% dataNascimento DD/MM/YYYY %}` - Data formatada
- `{% dataNascimento YYYYMMDD %}` - Data sem separadores
- `{% dataNascimento ISO %}` - Data ISO com timestamp
- `{% genero %}` - Gênero / pronome (masculino, feminino, nao_binario, prefiro_nao_dizer)

### Contato

- `{% email %}` - Email aleatório
- `{% email suaempresa.com.br %}` - Email com domínio customizado
- `{% emailExemplo %}` - Email com domínio example.com
- `{% telefone %}` - Telefone fixo: (XX) XXXX-XXXX
- `{% celular %}` - Celular: (XX) 9XXXX-XXXX
- `{% whatsapp %}` - WhatsApp: +55 XX 9XXXX-XXXX

### Endereço BR

- `{% cep %}` - CEP: XXXXX-XXX
- `{% logradouro %}` - Logradouro (Rua/Avenida/etc)
- `{% numero %}` - Número do endereço
- `{% complemento %}` - Complemento (Apto, Bloco, etc)
- `{% endereco %}` - Logradouro (somente rua/avenida)
- `{% enderecoNumero %}` - Endereço completo com número: Rua X, 123
- `{% bairro %}` - Bairro aleatório
- `{% cidade %}` - Cidade aleatória
- `{% estado %}` - UF (sigla do estado)

### Empresa e Trabalho

- `{% razaoSocial %}` - Razão social
- `{% nomeFantasia %}` - Nome fantasia
- `{% emailCorporativo %}` - E-mail corporativo
- `{% cargo %}` - Cargo
- `{% departamento %}` - Departamento

### Financeiro

- `{% moeda %}` - Moeda (BRL)
- `{% valor %}` - Valor monetário
- `{% plano %}` - Plano (gratuito, profissional, empresarial)
- `{% cupom %}` - Cupom de desconto
- `{% statusPagamento %}` - Status pagamento (pago, pendente, falhou, reembolsado)

### Datas e Tempo

- `{% datetimeIso %}` - Datetime ISO: 2026-01-21T14:35:20Z
- `{% timezone %}` - Timezone (America/Sao_Paulo, etc)

### Identificadores e Segurança

- `{% uuid %}` - UUID v4 aleatório
- `{% ulid %}` - ULID aleatório
- `{% chaveIdempotencia %}` - Chave de Idempotência
- `{% chaveApi %}` - Chave de API
- `{% tokenJwt %}` - Token JWT
- `{% senha %}` - Senha forte
- `{% hashSha256 %}` - Hash SHA256

### Conteúdo / Texto

- `{% titulo %}` - Título
- `{% descricao %}` - Descrição
- `{% textoLongo %}` - Observação longa (200-500 caracteres)
- `{% emoji %}` - Emoji aleatório

### E-commerce / Pedidos

- `{% sku %}` - SKU: SKU-XXXXX
- `{% ean %}` - EAN: 13 dígitos
- `{% pedido %}` - Pedido: ORD-YYYYMMDD-XXXX
- `{% statusPedido %}` - Status pedido (criado, pago, enviado, entregue, cancelado)
- `{% quantidade %}` - Quantidade
- `{% frete %}` - Frete (padrao, expresso)

### Geo e Rede

- `{% latitude %}` - Latitude
- `{% longitude %}` - Longitude
- `{% ipv4 %}` - IP v4 (faixa reservada para docs)
- `{% ipv6 %}` - IP v6 (reservado para docs)

### Países do Mundo

- `{% pais %}` - Nome do país aleatório
- `{% codigoPais %}` - Código ISO do país (2 letras)
- `{% codigoTelefonePais %}` - Código de telefone internacional
- `{% moedaPais %}` - Moeda do país (ISO 4217)
- `{% paisCompleto %}` - Dados completos do país em JSON

### Cores e Utilitários

- `{% corHex %}` - Cor hexadecimal: #XXXXXX
- `{% booleano %}` - Valor booleano: true ou false

## Exemplos de Uso

### Exemplo Completo com Todos os Tags

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
  }
}
```

## Usando Listas Customizadas

Se quiser usar CPFs ou CNPJs específicos, defina no Environment do Insomnia:

**CPF_LIST** (espaçados ou em linha):
```
12345678901 98765432100 55544433322
```

**CNPJ_LIST**:
```
12345678901234 98765432100123
```

O plugin vai usar um valor aleatório da lista. Se a lista não estiver definida, gera um novo valor válido.

## Características

✅ CPF e CNPJ (antio e novo 2026) com validação de dígito verificador  
✅ Dados realistas em português  
✅ Suporte a múltiplos formatos de data  
✅ Telefones, WhatsApp e CEP com formatação brasileira  
✅ 50+ template tags diferentes  
✅ Suporte a listas customizadas via Environment  
✅ Identificadores únicos (UUID, ULID, API Keys, JWT)  
✅ Dados de empresa, financeiro e e-commerce  
✅ Geolocalização e dados de rede  
✅ Escrito em TypeScript com type safety completo  
✅ Licença MIT - Código aberto e colaborativo

## Desenvolvimento

O plugin é escrito em **TypeScript** para melhor type safety e manutenibilidade.

- JSDoc completo em português
- Arquitetura limpa e coesa
- Algoritmos de CPF/CNPJ com Dígito Verificador (DV) real — os dois últimos dígitos são calculados pelo algoritmo oficial da    
  Receita Federal, garantindo números matematicamente válidos, não apenas sequências aleatórias
- Suporte ao novo formato alfanumérico 2026 da Receita Federal — base com letras A-Z e números, pioneiro entre plugins Insomnia
- Suite de testes com 75 casos e 100% de aprovação

### Setup

```bash
npm install
```

### Build

```bash
npm run build
```

Compila os arquivos na pasta `dist/`.

### Watch Mode (Desenvolvimento)

```bash
npm run dev
```
Recompila automaticamente quando você fizer mudanças nos arquivos TypeScript.

### Testes


```bash
npm test

> insomnia-plugin-dados-falsos@1.1.0 test
> tsc test/quality.ts --outDir dist && node dist/test/quality.js

  ✓ nomeCompleto: deve ter pelo menos 2 palavras (0.1ms)
  ✓ primeiroNome: deve ter pelo menos 2 caracteres (0.0ms)
  ✓ sobrenome: deve ter pelo menos 2 caracteres (0.0ms)
  ✓ nomeSocial: deve ter pelo menos 2 caracteres (0.0ms)
  ✓ nomeUsuario: deve ter formato nome.sobrenome.numero ou nome_sobrenome_numero (0.2ms)
  ✓ cpf: deve ter 11 dígitos (0.1ms)
  ✓ cpf: deve conter apenas números (0.1ms)
  ✓ cnpj: alfanumérico deve ter 14 caracteres (0.2ms)
  ✓ cnpj: alfanumérico deve ter base A-Z/0-9 e DVs numéricos (0.1ms)
  ✓ cnpj: numérico deve ter 14 dígitos (0.0ms)
  ✓ cnpj: numérico deve conter apenas números (0.1ms)
  ✓ rg: deve ter 11 dígitos (0.1ms)
  ✓ dataNascimento: deve estar no formato YYYY-MM-DD (0.3ms)
  ✓ dataNascimento: deve ter valores válidos (0.1ms)
  ✓ genero: deve ser um dos valores válidos (0.0ms)
  ✓ email: deve conter @ (0.2ms)
  ✓ email: deve conter domínio válido (0.0ms)
  ✓ emailExemplo: deve usar domínio example.com (0.1ms)
  ✓ telefone: deve ter formato (XX) XXXX-XXXX (0.1ms)
  ✓ celular: deve ter formato (XX) 9XXXX-XXXX (0.1ms)
  ✓ whatsapp: deve ter formato +55 XX 9XXXX-XXXX (0.1ms)
  ✓ cep: deve ter formato XXXXX-XXX (0.1ms)
  ✓ logradouro: deve ter pelo menos 3 caracteres (0.0ms)
  ✓ numero: deve ser um inteiro positivo (0.1ms)
  ✓ complemento: deve ter pelo menos 2 caracteres (0.1ms)
  ✓ endereco: deve ter pelo menos 3 caracteres (0.0ms)
  ✓ enderecoNumero: deve conter logradouro e número (0.0ms)
  ✓ bairro: deve ter pelo menos 2 caracteres (0.0ms)
  ✓ cidade: deve ter pelo menos 2 caracteres (0.0ms)
  ✓ estado: deve ser uma sigla de 2 caracteres (0.1ms)
  ✓ timezone: deve conter barra separando região e cidade (0.0ms)
  ✓ razaoSocial: deve ter pelo menos 3 caracteres (0.1ms)
  ✓ nomeFantasia: deve ter pelo menos 2 caracteres (0.0ms)
  ✓ emailCorporativo: deve conter @ (0.0ms)
  ✓ cargo: deve ter pelo menos 2 caracteres (0.0ms)
  ✓ departamento: deve ter pelo menos 2 caracteres (0.0ms)
  ✓ moeda: deve ser BRL (0.0ms)
  ✓ valor: deve ser número positivo (0.0ms)
  ✓ valor: deve ter até 2 casas decimais (0.1ms)
  ✓ plano: deve ser um dos valores válidos (0.0ms)
  ✓ statusPagamento: deve ser um dos valores válidos (0.0ms)
  ✓ cupom: deve ter pelo menos 4 caracteres (0.0ms)
  ✓ datetimeIso: deve ter formato válido (0.1ms)
  ✓ uuid: deve ter 36 caracteres (0.1ms)
  ✓ uuid: deve ter 5 segmentos separados por hífen (0.0ms)
  ✓ ulid: deve ter 26 caracteres (0.1ms)
  ✓ chaveIdempotencia: deve ter 36 caracteres (0.0ms)
  ✓ chaveApi: deve ter pelo menos 32 caracteres (0.1ms)
  ✓ tokenJwt: deve ter 3 partes separadas por ponto (0.1ms)
  ✓ senha: deve ter pelo menos 12 caracteres (0.1ms)
  ✓ hashSha256: deve ter 64 caracteres (0.1ms)
  ✓ corHex: deve ter formato #XXXXXX (0.1ms)
  ✓ booleano: deve ser true ou false (0.0ms)
  ✓ titulo: deve ter pelo menos 3 caracteres (0.0ms)
  ✓ descricao: deve ter pelo menos 5 caracteres (0.0ms)
  ✓ textoLongo: deve ter pelo menos 50 caracteres (0.0ms)
  ✓ emoji: deve ter pelo menos 1 caractere (0.0ms)
  ✓ sku: deve ter formato SKU-XXXXX (0.1ms)
  ✓ ean: deve ter 13 dígitos (0.0ms)
  ✓ ean: deve conter apenas números (0.0ms)
  ✓ pedido: deve ter formato ORD-YYYYMMDD-XXXX (0.1ms)
  ✓ statusPedido: deve ser um dos valores válidos (0.1ms)
  ✓ quantidade: deve ser um inteiro positivo (0.0ms)
  ✓ frete: deve ser um dos valores válidos (0.0ms)
  ✓ latitude: deve estar entre -90 e 90 (0.0ms)
  ✓ longitude: deve estar entre -180 e 180 (0.0ms)
  ✓ ipv4: deve ter 4 octetos (0.0ms)
  ✓ ipv4: octetos devem estar entre 0 e 255 (0.0ms)
  ✓ ipv6: deve conter dois pontos (0.0ms)
  ✓ pais: deve ter pelo menos 3 caracteres (0.0ms)
  ✓ codigoPais: deve ser uma sigla de 2 caracteres (0.1ms)
  ✓ codigoTelefonePais: deve começar com + (0.0ms)
  ✓ codigoTelefonePais: deve conter apenas números após + (0.0ms)
  ✓ moedaPais: deve ser uma sigla de 3 caracteres (0.0ms)
  ✓ paisCompleto: deve ser um objeto com todos os campos (0.0ms)

──────────────────────────────────────────────────
  Resultados
──────────────────────────────────────────────────
  Total   75 testes
  Passou  75
  Score   100%
──────────────────────────────────────────────────
```


Executa testes de qualidade dos geradores de dados.

## Versão

1.1.0

## Licença

MIT - Veja o arquivo LICENSE para detalhes

## Autor

Desenvolvido por [Roberto Godoy](https://github.com/godoyrw)  
[![ORCID](https://img.shields.io/badge/ORCID-0009--0003--2100--4772-green.svg)](https://orcid.org/0009-0003-2100-4772)