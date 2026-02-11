# Dados Falsos - Plugin Insomnia
[![License: AGPL v3](https://img.shields.io/badge/License-AGPLv3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
[![npm version](https://badge.fury.io/js/insomnia-plugin-dados-falsos.svg)](https://www.npmjs.com/package/insomnia-plugin-dados-falsos)
[![npm downloads](https://img.shields.io/npm/dt/insomnia-plugin-dados-falsos.svg)](https://www.npmjs.com/package/insomnia-plugin-dados-falsos)
[![GitHub stars](https://img.shields.io/github/stars/godoyrw/insomnia-plugin-dados-falsos.svg)](https://github.com/godoyrw/insomnia-plugin-dados-falsos)
[![Node.js](https://img.shields.io/badge/node-%3E%3D12.0.0-brightgreen)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Insomnia](https://img.shields.io/badge/Insomnia-Plugin-purple)](https://insomnia.rest/)

Plugin para Insomnia focado em massa sintética pt-BR com consistência e validação (CPF/CNPJ), reduzindo risco de uso de dados reais em testes. Entrega 50+ tags, formatos de data, e geradores de identificadores e credenciais de teste (JWT, idempotência, API keys, hashes), com override por Environment para cenários determinísticos.

![Insomnia Logo](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyqwgHeUDT6P4Xf9v6rqBmohUsP29pm2WTYg&s)

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

4. Se estiver desenvolvendo, compile o TypeScript:
```bash
npm install
npm run build
```

5. Reinicie o Insomnia
6. Vá em `Preferences > Plugins` e confirme que o plugin aparece na lista

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
- `{% endereco %}` - Endereço completo: Rua X, 123
- `{% bairro %}` - Bairro aleatório
- `{% cidade %}` - Cidade aleatória
- `{% estado %}` - UF (sigla do estado)
- `{% pais %}` - País (BR)

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
    "estado": "{% estado %}",
    "pais": "{% pais %}"
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

✅ CPF e CNPJ com validação de dígito verificador  
✅ Dados realistas em português  
✅ Suporte a múltiplos formatos de data  
✅ Telefones, WhatsApp e CEP com formatação brasileira  
✅ 50+ template tags diferentes  
✅ Suporte a listas customizadas via Environment  
✅ Identificadores únicos (UUID, ULID, API Keys, JWT)  
✅ Dados de empresa, financeiro e e-commerce  
✅ Geolocalização e dados de rede  
✅ Escrito em TypeScript com type safety completo  
✅ Licença AGPL-3.0 - Código aberto e colaborativo

## Desenvolvimento

O plugin é escrito em **TypeScript** para melhor type safety e manutenibilidade.

### Setup

```bash
npm install
```

### Build

```bash
npm run build
```

Compila os arquivos `.ts` para `.js` na pasta `dist/`.

### Watch Mode (Desenvolvimento)

```bash
npm run dev
```

Recompila automaticamente quando você fizer mudanças nos arquivos TypeScript.

### Testes

```bash
npm test
```

Executa testes de qualidade dos geradores de dados.

## Versão

1.0.0

## Licença

AGPL-3.0 - Veja o arquivo LICENSE para detalhes
