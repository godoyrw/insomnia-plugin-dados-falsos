# Guia de Desenvolvimento - Dados Falsos

## Estrutura do Projeto

```
.
├── src/
│   ├── main.ts                  # Ponto de entrada
│   ├── types.ts                 # Interfaces compartilhadas
│   ├── utils.ts                 # Funções utilitárias
│   ├── constants/               # Dados constantes
│   │   ├── names.ts
│   │   ├── locations.ts
│   │   ├── business.ts
│   │   ├── enums.ts
│   │   ├── countries.ts
│   │   └── templateTags.ts
│   └── generators/              # Funções geradoras
│       ├── identity.ts
│       ├── contact.ts
│       ├── address.ts
│       ├── company.ts
│       ├── financial.ts
│       ├── datetime.ts
│       ├── identifiers.ts
│       ├── content.ts
│       ├── ecommerce.ts
│       ├── geo.ts
│       └── countries.ts
├── test/
│   └── generators.test.ts               # Testes de qualidade
├── dist/                        # Código compilado (gerado)
├── tsconfig.json                # Configuração TypeScript
├── package.json                 # Dependências e scripts
├── README.md                    # Documentação principal
├── DEVELOPMENT.md               # Este arquivo
├── CONTRIBUTING.md              # Guia de contribuição
├── TESTING.md                   # Documentação de testes
└── LICENSE                      # Licença MIT
```

## Tecnologias

- **TypeScript 5.0+**: Type safety e melhor DX
- **Node.js 12+**: Runtime
- **Insomnia Plugin API**: Interface do plugin

## Setup Inicial

```bash
# Instalar dependências (opcional se TypeScript está global)
npm install

# Compilar TypeScript
npm run build

# Modo watch (desenvolvimento)
npm run dev
```

Se você já tem TypeScript instalado globalmente:

```bash
# Compilar diretamente
tsc

# Modo watch
tsc --watch
```

## Arquitetura Modular

O projeto está organizado em módulos por domínio:

### `src/types.ts`

Define as interfaces compartilhadas:
- `InsomniaContext`: Contexto do Insomnia com variáveis de ambiente
- `TemplateTagArg`: Argumentos de template tags
- `TemplateTag`: Contrato do plugin

### `src/utils.ts`

Funções utilitárias reutilizáveis:
- `randInt()`: Número aleatório
- `pickRandom()`: Elemento aleatório de array
- `pad()`: Preenchimento com zeros
- `calcCpfDigit()`, `calcCnpjDigit()`: Validação de documentos
- `generateValidCpf()`, `generateValidCnpj()`: Geração de documentos

### `src/constants/`

Dados constantes organizados por categoria:
- `names.ts`: Nomes, sobrenomes, apelidos, gêneros
- `locations.ts`: Cidades, bairros, ruas, UF, timezones
- `business.ts`: Departamentos, cargos, sufixos, domínios
- `enums.ts`: Planos, status, tipos, emojis
- `countries.ts`: Países, códigos ISO, telefones, moedas
- `templateTags.ts`: Definição de todas as 65 template tags

### `src/generators/`

Funções geradoras organizadas por domínio:
- `identity.ts`: Nomes, CPF, CNPJ, RG, datas
- `contact.ts`: Email, telefone, celular, WhatsApp
- `address.ts`: CEP, logradouro, bairro, cidade, estado
- `company.ts`: Razão social, cargo, departamento
- `financial.ts`: Moeda, valor, plano, status, cupom
- `datetime.ts`: DateTime ISO, timezone
- `identifiers.ts`: UUID, ULID, API Key, JWT, senha, hash
- `content.ts`: Título, descrição, texto, emoji, cor
- `ecommerce.ts`: SKU, EAN, pedido, status, quantidade, frete
- `geo.ts`: Latitude, longitude, IPv4, IPv6
- `countries.ts`: Países, códigos ISO, telefone, moeda
- `countries.ts`: Países, códigos ISO, telefone, moeda

## Compilação

```bash
# Build único com npm
npm run build

# Watch mode com npm
npm run dev

# Ou, se TypeScript está global:
tsc              # Build único
tsc --watch      # Watch mode
```

Arquivos compilados vão para `dist/src/main.js`.

## Testes

Execute os testes de validação de dados:

```bash
# Executar testes uma vez
npm test

# Modo watch (recompila ao salvar)
npm run test:watch
```


Os testes validam:

- ✅ Formatos de CPF, CNPJ, RG
- ✅ Formatos de email, telefone, celular
- ✅ Formatos de CEP, endereço
- ✅ Formatos de UUID, ULID
- ✅ Formatos de data, hora
- ✅ Valores de latitude/longitude
- ✅ Valores financeiros
- ✅ Status e enums válidos

Veja `TESTING.md` para documentação completa dos testes.

## Adicionando um Novo Template Tag

1. Crie a função geradora em um arquivo de `generators/`:

```typescript
/**
 * Gera meu dado
 * @returns {string} Valor gerado
 */
export function genMeuDado(): string {
  return 'valor gerado';
}
```

2. Importe em `src/constants/templateTags.ts`:

```typescript
import { genMeuDado } from '../generators/seu-arquivo';
```

3. Adicione à lista `templateTags`:

```typescript
{
  name: 'meuTag',
  displayName: 'dados-falsos → meuTag',
  description: 'Descrição do meu tag',
  args: [],
  run: async () => genMeuDado()
}
```

4. Compile:

```bash
npm run build
```

5. Teste no Insomnia: `{% meuTag %}`

6. Atualize o README.md com documentação

## Padrões de Código

### Nomenclatura

- Funções: `camelCase` (ex: `genFullName`)
- Constantes: `UPPER_SNAKE_CASE` (ex: `FIRST_NAMES`)
- Interfaces: `PascalCase` (ex: `TemplateTag`)

### Comentários JSDoc

Todas as funções devem ter comentários JSDoc:

```typescript
/**
 * Descrição breve da função
 * Descrição mais detalhada se necessário
 *
 * @param {type} name - Descrição do parâmetro
 * @returns {type} Descrição do retorno
 * @example
 * genMeuDado() // "resultado"
 */
export function genMeuDado(): string {
  return 'resultado';
}
```

### Type Safety

Use tipos TypeScript em tudo:

```typescript
// ✅ Bom
function pickRandom<T>(arr: T[]): T {
  return arr[randInt(0, arr.length - 1)];
}

// ❌ Evitar
function pickRandom(arr) {
  return arr[randInt(0, arr.length - 1)];
}
```

## Contribuindo

1. Fork o repositório
2. Crie uma branch: `git checkout -b feature/novo-tag`
3. Faça suas mudanças
4. Compile: `npm run build`
5. Teste: `npm test`
6. Commit: `git commit -am 'Add: novo tag'`
7. Push: `git push origin feature/novo-tag`
8. Abra um Pull Request

Veja `CONTRIBUTING.md` para diretrizes completas.

## Licença

MIT - Veja LICENSE para detalhes
