# Testes - Dados Falsos

Documentação completa sobre os testes de qualidade do plugin Dados Falsos.

## Visão Geral

O projeto inclui uma suite de testes de qualidade que valida todos os geradores de dados. Os testes garantem que os dados gerados seguem os padrões brasileiros e formatos esperados.

A suite cobre as 93 template tags do plugin com 166 testes organizados por categoria, cobrindo validação de formato, regras de negócio e cenários de stress para os geradores.

| Categoria | Escopo |
|-----------|--------|
| Identidade | Nomes, documentos, gênero e datas |
| Contato | Emails, telefones, celulares e WhatsApp |
| Endereço BR | CEP, logradouro, número, bairro, cidade e UF |
| Empresa | Razão social, nome fantasia, email corporativo e cargos |
| Financeiro | Moeda, valores, planos, status e cupons |
| Datas e Tempo | Datetime ISO e timezone |
| Identificadores | UUID, ULID, API Key, JWT, senha e hash |
| Conteúdo | Cores, booleanos, textos e emoji |
| E-commerce | SKU, EAN, pedido, quantidade e frete |
| Geo e Rede | Latitude, longitude, IPv4 e IPv6 |
| Países do Mundo | Nome, código, DDI, moeda e objeto completo |
| Saúde | Tipos sanguíneos, prontuário, CNS e conselhos profissionais |
| PIS/PASEP | PIS com validação oficial |
| Título de Eleitor | Título com validação oficial |
| Bancário | Agência, conta e Pix |
| Veicular | Placas antigas e Mercosul |
| Cartão de Crédito | Número, bandeira, CVV e validade |

## Executando os Testes

### Comando Básico

```bash
npm test
```

Este comando:

1. Compila o arquivo de testes TypeScript
2. Executa os testes
3. Exibe um relatório com resultados

### Modo Watch (Desenvolvimento)

```bash
npm run test:watch
```

Recompila os testes automaticamente quando arquivos são modificados.

## Estrutura dos Testes

Os testes estão em `test/generators.test.ts` e cobrem as 93 template tags com 166 testes de validação.

### Categorias de Testes

- **Identidade**: nomeCompleto, primeiroNome, sobrenome, nomeSocial, usuario, nomeUsuario, cpf, cnpj, cnh, rg, tituloEleitor, dataNascimento, genero
- **Contato**: email, emailExemplo, telefone, celular, whatsapp
- **Endereço**: cep, logradouro, numero, complemento, endereco, enderecoNumero, bairro, cidade, estado, timezone
- **Empresa**: razaoSocial, nomeFantasia, emailCorporativo, cargo, departamento
- **Financeiro**: moeda, valor, plano, statusPagamento, cupom
- **Datas**: datetimeIso, timezone
- **Identificadores**: uuid, ulid, chaveIdempotencia, chaveApi, tokenJwt, senha, hashSha256
- **Conteúdo**: corHex, booleano, titulo, descricao, textoLongo, emoji
- **E-commerce**: sku, ean, pedido, statusPedido, quantidade, frete
- **Geolocalização**: latitude, longitude, ipv4, ipv6
- **Países**: pais, codigoPais, codigoTelefonePais, moedaPais, paisCompleto
- **Saúde**: tipoSanguineo, numeroProntuario, numeroCNS, convenio, alergia, conselhoProfissional (CRM, CREA, OAB, CRO, COREN)
- **Educação**: instituicaoEnsino, curso, nivelFormacao, statusAcademico, periodoAcademico, semestreAcademico, anoAcademico, registroAcademico
- **PIS/PASEP**: pis
- **Título de Eleitor**: tituloEleitor (incluindo 1000 iterações de validação)
- **Bancário**: agencia, conta e pixAleatoria (incluindo 1000 iterações)
- **Veicular**: placa, placaAntiga e placaMercosul
- **Cartão de Crédito**: numeroCartao, bandeiraCartao, cvv, validadeCartao, cartaoCompleto

## Resultado dos Testes

### Última Execução

```
──────────────────────────────────────────────────
  Resultados
──────────────────────────────────────────────────
  Total   166 testes
  Passou  166
  Score   100%
──────────────────────────────────────────────────
```

### Detalhes dos Testes por Categoria

**Identidade, educação e documentos (44 testes)**
- nomeCompleto (2), primeiroNome (2), sobrenome (1), nomeSocial (1), usuario (2), nomeUsuario (2)
- cpf (3), cnpj (5), cnh (3), rg (3)
- dataNascimento (3), genero (1)
- instituicaoEnsino (2), curso (2), nivelFormacao (1), statusAcademico (1), periodoAcademico (1), semestreAcademico (1), anoAcademico (1), registroAcademico (1)
- pis (2), tituloEleitor (4)

**Contato (10 testes)**
- email (2), emailExemplo (2), telefone (2), celular (2), whatsapp (2)

**Endereço (12 testes)**
- cep (2), logradouro (2), numero (1), complemento (1), endereco (1), enderecoNumero (1)
- bairro (1), cidade (1), estado (1), timezone (1)

**Empresa (7 testes)**
- razaoSocial (2), nomeFantasia (1), emailCorporativo (2), cargo (1), departamento (1)

**Financeiro (7 testes)**
- moeda (1), valor (2), plano (1), statusPagamento (1), cupom (2)

**Datas e Tempo (4 testes)**
- datetimeIso (4)

**Identificadores (12 testes)**
- uuid (2), ulid (2), chaveIdempotencia (1), chaveApi (2), tokenJwt (2), senha (2), hashSha256 (1)

**Conteúdo (9 testes)**
- corHex (2), booleano (1), titulo (2), descricao (1), textoLongo (2), emoji (1)

**E-commerce (9 testes)**
- sku (1), ean (2), pedido (2), statusPedido (1), quantidade (2), frete (1)

**Geo e Rede (8 testes)**
- latitude (2), longitude (2), ipv4 (3), ipv6 (1)

**Países do Mundo (9 testes)**
- pais (2), codigoPais (1), codigoTelefonePais (3), moedaPais (1), paisCompleto (2)

**Saúde (10 testes)**
- tipoSanguineo (2), numeroProntuario (1), numeroCNS (1), convenio (1), alergia (1)
- conselhoProfissional sem parâmetro (1), CRM (1), CREA (1), OAB (1)

**Bancário (10 testes)**
- agencia (3), conta (4), pixAleatoria (3)

**Veicular (6 testes)**
- placa: tamanho (1), formato geral (1)
- placaAntiga: formato AAA9999 (1), letras e dígitos (1)
- placaMercosul: formato AAA9A99 (1), letra na 5ª posição (1)

**Cartão de Crédito (9 testes)**
- numeroCartao (3), bandeiraCartao (1), cvv (2), validadeCartao (1), cartaoCompleto (1), validarCartao (1)

## Cobertura de Testes

A suite valida:

- ✅ Formatos de dados brasileiros
- ✅ Dígitos verificadores reais (CPF, CNPJ, CNH, RG, PIS, CNS, EAN, Título de Eleitor)
- ✅ Placas veiculares (formato antigo e Mercosul)
- ✅ Padrões de telefone e email
- ✅ Identificadores únicos (UUID, ULID)
- ✅ Datas e horas
- ✅ Valores monetários
- ✅ Enumerações (status, planos, tipos)
- ✅ Geolocalização (latitude, longitude, IP)
- ✅ E-commerce (SKU, EAN, pedidos)
- ✅ Dados de saúde e conselhos profissionais
- ✅ Cartões de crédito sintéticos com validação por Luhn

## Adicionando Novos Testes

Edite `test/generators.test.ts` seguindo o padrão:

```typescript
test('minhaTag: deve ter formato correto', () => {
  const v = genMinhaFuncao();
  assert(/regex/.test(v), `Formato inválido: "${v}"`);
});
```

## Troubleshooting

### Erro: "tsc not found"

```bash
npm install   # instala typescript local
```

### Erro: "Module not found"

```bash
npm run build
```

### Testes falhando

1. Execute `npm run build` para recompilar
2. Verifique os logs de erro no console

## Integração Contínua

O workflow `.github/workflows/test.yml` executa automaticamente em todo push e pull request:

```bash
npx tsx test/generators.test.ts
```

## Performance

Os testes executam em menos de 1 segundo e incluem verificações de 1.000 iterações para título de eleitor, agência, conta e chave Pix aleatória.
