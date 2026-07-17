# Guia de Desenvolvimento — Dados Falsos

## Estrutura do Projeto

```
.
├── src/
│   ├── main.ts                      # Entry point do plugin
│   ├── types.ts                     # Interfaces compartilhadas
│   ├── utils.ts                     # Funções utilitárias (randInt, pickRandom, getEnvValue, ...)
│   ├── constants/
│   │   ├── names.ts                 # Nomes e sobrenomes brasileiros
│   │   ├── locations.ts             # Cidades, estados, bairros, timezones
│   │   ├── business.ts              # Cargos, departamentos, sufixos, domínios
│   │   ├── enums.ts                 # Status, planos, tipos, emojis
│   │   ├── countries.ts             # Países, códigos ISO, telefones, moedas
│   │   └── templateTags.ts          # Definição das 76 template tags
│   └── generators/
│       ├── identity.ts              # Nomes e dados demográficos
│       ├── cpf.ts                   # CPF — geração, validação, CPF_LIST
│       ├── cnpj.ts                  # CNPJ — geração, validação, CNPJ_LIST (2026)
│       ├── cnh.ts                   # CNH — geração e validação
│       ├── rg.ts                    # RG — geração e validação
│       ├── pis.ts                   # PIS/PASEP — geração, validação, PIS_LIST
│       ├── cns.ts                   # CNS — geração, validação, CNS_LIST
│       ├── vehicle.ts               # Placas veiculares, PLACA_LIST
│       ├── contact.ts               # Email, telefone, celular, WhatsApp + listas
│       ├── address.ts               # CEP, logradouro, bairro, cidade, estado, timezone
│       ├── company.ts               # Razão social, cargo, departamento
│       ├── financial.ts             # Moeda, valor, plano, status, cupom
│       ├── datetime.ts              # DateTime ISO
│       ├── identifiers.ts           # UUID, ULID, API Key, JWT, senha, hash + UUID_LIST
│       ├── content.ts               # Título, texto, emoji, cor, booleano
│       ├── ecommerce.ts             # SKU, EAN, pedido, status, quantidade, frete
│       ├── geo.ts                   # Latitude, longitude, IPv4, IPv6
│       ├── countries.ts             # Países, códigos ISO, moeda
│       ├── bloodType.ts             # Tipo sanguíneo
│       ├── healthPlan.ts            # Convênio de saúde
│       ├── allergy.ts               # Alergias
│       ├── medicalRecordNumber.ts   # Número de prontuário
│       └── professionalRegistration.ts  # Conselhos profissionais (CRM, CREA, OAB...)
├── test/
│   └── generators.test.ts           # Suite de 138 testes (100%)
├── dist/                            # Código compilado (gerado pelo build)
├── .github/workflows/
│   ├── test.yml                     # CI — executa testes em todo push/PR
│   └── publish-npm.yml              # CD — publica no npm ao criar tag v*
├── .dev/
│   ├── implementations.md           # Backlog de funcionalidades planejadas
│   └── management_branches.sh       # Scripts de gestão de branches
├── assets/
│   └── images/
│       └── insomnia-plugin-dados-falsos.jpg
├── tsconfig.json
├── package.json
├── README.md
├── CONTRIBUTING.md
├── DEVELOPMENT.md                   # Este arquivo
├── TESTING.md
├── INSTALL.md
├── SECURITY.md
└── LICENSE
```

## Tecnologias

- **TypeScript 5.0+** — type safety e melhor DX
- **Node.js 18+** — runtime
- **Insomnia Plugin API** — interface do plugin
- **tsx** — execução direta de TypeScript nos testes via CI

## Setup Inicial

```bash
npm install    # instala devDependencies (typescript, tsx, @types/node)
npm run build  # compila para dist/
npm test       # executa os 138 testes
```

## Comandos disponíveis

| Comando | Descrição |
|---|---|
| `npm run build` | Compila TypeScript para `dist/` |
| `npm run dev` | Watch mode — recompila ao salvar |
| `npm test` | Executa a suite de testes uma vez |
| `npm run test:watch` | Recompila testes ao salvar |
| `npm run test:stress` | 100 execuções consecutivas para detectar flakiness |
| `npm run clean` | Remove `dist/` e arquivos compilados |

## Arquitetura

### Separação de responsabilidades

Cada domínio tem seu próprio arquivo em `src/generators/`. Regra geral:

- Documentos com DV (CPF, CNPJ, CNH, RG, PIS, CNS) → arquivo próprio com gerador **e** validador
- Dados que precisam de context Insomnia (CPF_LIST, etc.) → a função geradora aceita `context?: InsomniaContext`
- Dados sem validação formal → geradores simples sem validador exportado

### Listas via Environment

Tags que suportam listas fixas via variáveis de ambiente do Insomnia:

| Variável | Tag(s) |
|---|---|
| `CPF_LIST` | `{% cpf %}` |
| `CNPJ_LIST` | `{% cnpj %}` |
| `EMAIL_LIST` | `{% email %}` |
| `UUID_LIST` | `{% uuid %}`, `{% chaveIdempotencia %}` |
| `PHONE_LIST` | `{% telefone %}` |
| `CELULAR_LIST` | `{% celular %}` |
| `WHATSAPP_LIST` | `{% whatsapp %}` |
| `PIS_LIST` | `{% pis %}` |
| `CNS_LIST` | `{% numeroCNS %}` |
| `PLACA_LIST` | `{% placa %}` |

## Adicionando um Novo Template Tag

1. Crie `src/generators/meuDado.ts`:

```typescript
import { pickRandom } from '../utils';

/**
 * Gera meu dado
 * @returns {string} Valor gerado
 * @example
 * genMeuDado() // "valor"
 */
export function genMeuDado(): string {
  return pickRandom(['valor1', 'valor2']);
}
```

2. Importe em `src/constants/templateTags.ts` e adicione ao array:

```typescript
import { genMeuDado } from '../generators/meuDado';

// ...no array templateTags:
{
  name: 'meuTag',
  displayName: 'dados-falsos → meuTag',
  description: 'Descrição do tag',
  args: [],
  run: async () => genMeuDado()
}
```

3. Compile e teste:

```bash
npm run build
npm test
```

4. Atualize `README.md` com a nova tag na tabela correta.

## Padrões de Código

### Nomenclatura

| Tipo | Padrão | Exemplo |
|---|---|---|
| Geradores | `gen` + PascalCase | `genFullName` |
| Validadores | `validar` + PascalCase | `validarCpf` |
| Constantes | `UPPER_SNAKE_CASE` | `FIRST_NAMES` |
| Interfaces | `PascalCase` | `TemplateTag` |
| Funções internas | `camelCase` | `calcularDigito` |

### JSDoc obrigatório

```typescript
/**
 * Descrição breve
 *
 * @param {type} param - Descrição
 * @returns {type} Descrição do retorno
 * @example
 * genMeuDado() // "resultado"
 */
export function genMeuDado(): string { ... }
```

### Tipos explícitos

```typescript
// ✅ sempre declarar retorno
export function genMeuDado(): string { ... }

// ❌ retorno implícito
export function genMeuDado() { ... }
```

## CI/CD

- **Push para `main` ou PR** → `test.yml` executa `npx tsx test/generators.test.ts`
- **Tag `v*`** → `publish-npm.yml` executa build + `npm publish`
- O CI falha se `Score 100%` não aparecer no output dos testes

## Licença

MIT — veja `LICENSE` para detalhes.
