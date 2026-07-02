# Testes - Dados Falsos

Documentação completa sobre os testes de qualidade do plugin Dados Falsos.

## Visão Geral

O projeto inclui uma suite de testes de qualidade que valida todos os geradores de dados. Os testes garantem que os dados gerados seguem os padrões brasileiros e formatos esperados.

A suite cobre **todas as 65 template tags** com **110 testes** organizados por categoria:

| Categoria           | Tags | Testes |
|---------------------|------|--------|
| Identidade          | 11   | 22     |
| Contato             | 5    | 10     |
| Endereço            | 9    | 12     |
| Empresa             | 5    | 7      |
| Financeiro          | 5    | 8      |
| Datas e Tempo       | 2    | 4      |
| Identificadores     | 7    | 12     |
| Conteúdo            | 6    | 9      |
| E-commerce          | 6    | 9      |
| Geolocalização      | 4    | 8      |
| Países do Mundo     | 5    | 9      |
| **TOTAL**           | **65** | **110** |

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

Recompila e executa os testes automaticamente quando arquivos são modificados.

## Estrutura dos Testes

Os testes estão localizados em `test/generators.test.ts` e cobrem todas as 65 template tags com 110 testes de validação:

### Categorias de Testes

- **Identidade**: Nome, CPF, CNPJ, RG, data de nascimento, gênero, nome de usuário
- **Contato**: Email, telefone, celular, WhatsApp
- **Endereço**: CEP, logradouro, número, complemento, bairro, cidade, estado, país
- **Empresa**: Razão social, nome fantasia, email corporativo, cargo, departamento
- **Financeiro**: Moeda, valor, plano, status de pagamento, cupom
- **Datas**: Datetime ISO, timezone
- **Identificadores**: UUID, ULID, chave de idempotência, chave de API, JWT, senha, hash SHA256
- **Conteúdo**: Cor hexadecimal, booleano, título, descrição, texto longo, emoji
- **E-commerce**: SKU, EAN, pedido, status de pedido, quantidade, frete
- **Geolocalização**: Latitude, longitude, IP v4, IP v6

## Resultado dos Testes

### Última Execução

```
──────────────────────────────────────────────────
  Resultados
──────────────────────────────────────────────────
  Total   110 testes
  Passou  110
  Score   100%
──────────────────────────────────────────────────

```

### Detalhes dos Testes por Categoria

**Identidade (15 testes)**
- nomeCompleto, primeiroNome, sobrenome, nomeSocial, usuario, nomeUsuario
- cpf (2 testes), cnpj (2 testes), rg
- dataNascimento (2 testes), genero

**Contato (6 testes)**
- email (2 testes), emailExemplo
- telefone, celular, whatsapp

**Endereço (10 testes)**
- cep, logradouro, numero, complemento, endereco
- bairro, cidade, estado, pais

**Empresa (5 testes)**
- razaoSocial, nomeFantasia, emailCorporativo, cargo, departamento

**Financeiro (6 testes)**
- moeda, valor (2 testes), plano, statusPagamento, cupom

**Dados (1 teste)**
- datetimeIso

**Identificadores (8 testes)**
- uuid (2 testes), ulid, chaveIdempotencia, chaveApi
- tokenJwt, senha, hashSha256

**Conteúdo (6 testes)**
- corHex, booleano, titulo, descricao, textoLongo, emoji

**E-commerce (7 testes)**
- sku, ean (2 testes), pedido, statusPedido, quantidade, frete

**Geolocalização (5 testes)**
- latitude, longitude, ipv4 (2 testes), ipv6

**Países do Mundo (6 testes)**
- nome, código ISO, telefone, moeda, bandeira, região


## Adicionando Novos Testes

Para adicionar novos testes, edite `test/generators.test.ts`:

```typescript
// Exemplo de novo teste
const novoValor = genNovaFuncao();
if (validacao(novoValor)) {
  console.log('✅ Descrição do teste');
  passed++;
} else {
  console.log('❌ Descrição do teste');
  failed++;
}
total++;
```

## Cobertura de Testes

A suite de testes cobre:

- ✅ Formatos de dados brasileiros
- ✅ Validação de dígitos verificadores (CPF, CNPJ)
- ✅ Padrões de telefone e email
- ✅ Identificadores únicos (UUID, ULID)
- ✅ Datas e horas
- ✅ Valores monetários
- ✅ Enumerações (status, planos, tipos)
- ✅ Geolocalização (latitude, longitude, IP)
- ✅ E-commerce (SKU, EAN, pedidos)

## Troubleshooting

### Erro: "tsc not found"

Instale TypeScript globalmente:

```bash
npm install -g typescript
```

Ou use a versão local:

```bash
npx tsc test/generators.test.ts --outDir dist && node dist/generators.test.ts
```

### Erro: "Module not found"

Certifique-se de que a build foi executada:

```bash
npm run build
```

### Testes falhando

1. Verifique se os geradores foram modificados
2. Execute `npm run build` para recompilar
3. Verifique os logs de erro no console

## Integração Contínua

Para integrar os testes em CI/CD:

```yaml
# Exemplo para GitHub Actions
- name: Run tests
  run: npm test
```

## Performance

Os testes executam em menos de 1 segundo e não requerem recursos externos.

## Próximos Passos

- Adicionar testes de performance
- Adicionar testes de integração com Insomnia
- Aumentar cobertura para 100% de funções
- Adicionar testes de edge cases
