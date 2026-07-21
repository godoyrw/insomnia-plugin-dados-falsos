# PROJETO: insomnia-plugin-dados-falsos

**VERSÃO:** v3.0.4
**OBJETIVO:** Plugin Insomnia para gerar dados falsos realistas em português brasileiro com 93 template tags, cobrindo identidade, documentos, saúde, veicular, contato, endereço, empresa, financeiro, e-commerce, geolocalização, educação, cartão de crédito e mais.

---

## 1. TECH STACK

- **Linguagem**: TypeScript 5.0+
- **Runtime**: Node.js 18+
- **Build**: `npx tsc` (TypeScript Compiler)
- **Testes**: Node.js nativo sem framework — assert customizado em `test/generators.test.ts`
- **CI**: GitHub Actions com `tsx` (`.github/workflows/test.yml`)
- **Gerenciador**: npm
- **Dependências de produção**: zero
- **devDependencies**: `typescript`, `@types/node`, `tsx`

---

## 2. ESTRUTURA DE PASTAS

```
.
├── src/
│   ├── main.ts                      # Entry point — exporta templateTags para o Insomnia
│   ├── types.ts                     # Interfaces: TemplateTag, InsomniaContext, TemplateTagArg
│   ├── utils.ts                     # Helpers: randInt, pickRandom, pad, getEnvValue,
│   │                                #          slugifyEmailPart, parseNumbersByLength,
│   │                                #          validarUuid, validarData, validarEmail,
│   │                                #          validarSenha, validarEan13
│   ├── constants/
│   │   ├── names.ts                 # Nomes, sobrenomes, apelidos, gêneros, domínios de email
│   │   ├── locations.ts             # Cidades, bairros, ruas, UF, timezones
│   │   ├── business.ts              # Departamentos, cargos, sufixos legais, domínios corporativos
│   │   ├── enums.ts                 # Planos, status, tipos de frete, emojis, etc.
│   │   ├── countries.ts             # Países com código ISO, DDI, moeda
│   │   └── templateTags.ts          # Definição das 93 template tags
│   └── generators/
│       ├── identity.ts              # Nomes, username, gênero, data de nascimento
│       ├── cpf.ts                   # CPF — geração, validarCpf, genCpf(context) + CPF_LIST
│       ├── cnpj.ts                  # CNPJ — geração, validarCnpj, genCnpj(context) + CNPJ_LIST
│       ├── cnh.ts                   # CNH — genCnh, validarCnh
│       ├── rg.ts                    # RG — genRg, validarRg
│       ├── pis.ts                   # PIS/PASEP — genPIS(context), validarPis + PIS_LIST
│       ├── cns.ts                   # CNS — genCNS(context), validarCns + CNS_LIST
│       ├── vehicle.ts               # Placas — genPlaca(context), genPlacaAntiga,
│       │                            #          genPlacaMercosul, validarPlaca + PLACA_LIST
│       ├── contact.ts               # Email(+EMAIL_LIST), telefone(+PHONE_LIST),
│       │                            # celular(+CELULAR_LIST), WhatsApp(+WHATSAPP_LIST)
│       ├── address.ts               # CEP, logradouro, número, complemento, bairro,
│       │                            # cidade, estado, timezone
│       ├── company.ts               # Razão social, nome fantasia, email corporativo,
│       │                            # cargo, departamento
│       ├── financial.ts             # Moeda, valor, plano, status pagamento, cupom
│       ├── datetime.ts              # DateTime ISO
│       ├── identifiers.ts           # UUID(+UUID_LIST), ULID, chave idempotência,
│       │                            # API Key, JWT, senha, hash SHA256
│       ├── content.ts               # Cor hex, booleano, título, descrição, texto longo, emoji
│       ├── ecommerce.ts             # SKU, EAN, pedido, status pedido, quantidade, frete
│       ├── geo.ts                   # Latitude, longitude, IPv4, IPv6
│       ├── countries.ts             # Nome, código, DDI, moeda e objeto completo de país
│       ├── bloodType.ts             # Tipo sanguíneo
│       ├── healthPlan.ts            # Convênio de saúde
│       ├── allergy.ts               # Alergias
│       ├── medicalRecordNumber.ts   # Número de prontuário
│       ├── professionalRegistration.ts  # Conselhos profissionais (CRM, CREA, OAB, CRO, COREN)
│       ├── tituloEleitor.ts         # Título de Eleitor — genTituloEleitor, validarTituloEleitor
│       ├── bancario.ts              # Agência, conta e Pix
│       ├── education.ts             # Instituição, curso e dados acadêmicos
│       └── creditCard.ts            # Cartões de crédito sintéticos (Luhn, bandeira, CVV, validade)
├── test/
│   └── generators.test.ts           # Suite de 166 testes (100%)
├── dist/                            # Código compilado (gerado — não versionar)
├── .github/
│   └── workflows/
│       ├── test.yml                 # CI: roda testes em push/PR
│       └── publish-npm.yml          # CD: publica no npm ao criar tag v*
├── .dev/
│   ├── implementations.md           # Backlog de funcionalidades planejadas
│   ├── management_branches.sh       # Gerenciamento de branches Git
│   ├── publish_release.sh           # Script de release automatizado
│   └── rename_file.sh               # Renomear arquivo com git mv
├── AGENTS.md                            # Contexto para agentes de IA (lido automaticamente)
├── assets/
│   └── images/
│       └── insomnia-plugin-dados-falsos.jpg
├── tsconfig.json
├── package.json
├── README.md
├── CONTRIBUTING.md
├── DEVELOPMENT.md
├── TESTING.md
├── INSTALL.md
├── SECURITY.md
└── LICENSE
```

---

## 3. ARQUITETURA E FLUXO DE DADOS

**Camadas:**
- `constants/` — dados estáticos (arrays de strings, enums). Sem lógica.
- `generators/` — funções puras que consomem constants e utils para gerar valores.
- `main.ts` — importa `templateTags` de `constants/templateTags.ts` e exporta para o Insomnia.

**Fluxo de uma nova tag:**
1. Criar `src/generators/meuDado.ts` com `genMeuDado()` e `validarMeuDado()`.
2. Adicionar JSDoc completo em português.
3. Importar em `constants/templateTags.ts`.
4. Adicionar objeto ao array `templateTags`.
5. Adicionar testes em `test/generators.test.ts`.
6. Atualizar `README.md`, `DEVELOPMENT.md` e este arquivo.

**Regra de ouro:** zero dependências externas. O plugin funciona sem instalação adicional além do Node.js.

---

## 4. PADRÕES DE CÓDIGO

### Nomenclatura

| Tipo | Padrão | Exemplo |
|---|---|---|
| Arquivos | `camelCase.ts` | `contact.ts`, `bloodType.ts` |
| Geradores | `gen` + PascalCase | `genEmail`, `genCpf`, `genPlacaMercosul` |
| Validadores | `validar` + PascalCase | `validarCpf`, `validarPlaca`, `validarRg` |
| Constantes | `UPPER_SNAKE_CASE` | `FIRST_NAMES`, `BLOOD_TYPES` |
| Interfaces | `PascalCase` | `TemplateTag`, `InsomniaContext` |
| Funções internas | `camelCase` | `calcularDigito`, `buildFromPIS` |

### JSDoc obrigatório

```typescript
/**
 * Descrição breve.
 *
 * @param {InsomniaContext} [context] - Contexto Insomnia (opcional)
 * @returns {string} Descrição do retorno
 * @example
 * genMeuDado() // "resultado"
 */
export function genMeuDado(context?: InsomniaContext): string { ... }
```

### Tipo de retorno sempre explícito

```typescript
// ✅ correto
export function genMeuDado(): string { ... }

// ❌ evitar
export function genMeuDado() { ... }
```

### Suporte a listas via Environment

Geradores que aceitam valores fixos via contexto Insomnia seguem este padrão:

```typescript
import { getEnvValue, pickRandom } from '../utils';
import { InsomniaContext } from '../types';

export function genMeuDado(context?: InsomniaContext): string {
  const list = getEnvValue(context, 'MEU_DADO_LIST');
  if (list && list.trim()) {
    const values = list.trim().split(/\s+/).filter(Boolean);
    if (values.length > 0) return pickRandom(values);
  }
  // geração aleatória como fallback
  return 'valor gerado';
}
```

---

## 5. LISTAS CUSTOMIZADAS VIA ENVIRONMENT

Tags que suportam valores fixos via variáveis de ambiente do Insomnia:

| Variável | Tag(s) afetadas |
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
| `EDUCATION_INSTITUTION_LIST` | `{% instituicaoEnsino %}` |
| `EDUCATION_COURSE_LIST` | `{% curso %}` |
| `EDUCATION_LEVEL_LIST` | `{% nivelFormacao %}` |
| `EDUCATION_STATUS_LIST` | `{% statusAcademico %}` |
| `EDUCATION_PERIOD_LIST` | `{% periodoAcademico %}` |

As listas de documentos, contato, UUID e placa usam espaço como separador. As listas acadêmicas usam vírgula e/ou quebra de linha. Se a variável não existir, o gerador aleatório é usado.

---

## 6. TESTES

- **Execução**: `npm test` (compila com `tsc` e roda com `node`)
- **CI**: `npx tsx test/generators.test.ts` (sem compilação prévia)
- **Cobertura atual**: 166 testes, 100% de aprovação
- **Padrão**:

```typescript
test('minhaTag: deve ter formato correto', () => {
  const v = genMeuDado();
  assert(/^[A-Z]{3}-\d{3}$/.test(v), `Formato inválido: "${v}"`);
});

test('minhaTag: deve ter DV válido', () => {
  const v = genMeuDado();
  assert(validarMeuDado(v), `DV inválido: "${v}"`);
});

test('minhaTag: deve ser válido em 1000 iterações', () => {
  for (let i = 0; i < 1000; i++) {
    const v = genMeuDado();
    assert(validarMeuDado(v), `Inválido na iteração ${i}: "${v}"`);
  }
});
```

---

## 7. COMANDOS

| Comando | Descrição |
|---|---|
| `npm install` | Instala devDependencies |
| `npm run build` | Compila TypeScript para `dist/` |
| `npm run dev` | Watch mode — recompila ao salvar |
| `npm test` | Executa os 166 testes |
| `npm run test:watch` | Recompila testes ao salvar |
| `npm run test:stress` | 100 execuções consecutivas |
| `npm run clean` | Remove `dist/` e arquivos compilados |

---

## 8. REGRAS DE NEGÓCIO (CRÍTICO)

- **CPF/CNPJ**: gerados com DV válido pelo algoritmo oficial da Receita Federal. CNPJ suporta formato alfanumérico 2026 e numérico tradicional.
- **CNH**: dois dígitos verificadores pelo algoritmo CONTRAN/DENATRAN.
- **RG**: dígito verificador pelo algoritmo SSP-SP.
- **PIS/PASEP**: DV pelo algoritmo da Caixa Econômica Federal (módulo 11).
- **CNS**: gerado derivado de PIS válido, algoritmo do Ministério da Saúde.
- **EAN-13**: dígito verificador GS1.
- **Placas**: formato antigo `AAA9999` e Mercosul `AAA9A99` — letras sem I, O, Q.
- **UUID**: padrão RFC 4122 v4.
- **Senha**: mínimo 12 caracteres, maiúscula + minúscula + número + especial.
- **IPv4**: apenas faixas de documentação RFC 5737 (não IPs privados ou públicos reais).
- **Performance**: todos os geradores < 0,01 ms. Evitar loops pesados.
- **JWT**: assinatura fixa (apenas estrutural — não é JWT criptograficamente válido).

---

## 9. EXEMPLO COMPLETO — ADICIONANDO UMA NOVA TAG

```typescript
// 1. src/generators/vehiclePlate.ts
import { randInt, getEnvValue, pickRandom } from '../utils';
import { InsomniaContext } from '../types';

/**
 * Valida placa veicular brasileira (antiga ou Mercosul).
 * @param {string} placa - Placa a ser validada
 * @returns {boolean} true se válida
 */
export function validarPlaca(placa: string): boolean {
  const p = placa.toUpperCase().trim();
  return /^[A-Z]{3}\d{4}$/.test(p) || /^[A-Z]{3}\d[A-Z]\d{2}$/.test(p);
}

/**
 * Gera placa veicular brasileira aleatória.
 * Suporta PLACA_LIST via contexto Insomnia.
 * @param {InsomniaContext} [context]
 * @returns {string} Placa no formato AAA9999 ou AAA9A99
 */
export function genPlaca(context?: InsomniaContext): string {
  const list = getEnvValue(context, 'PLACA_LIST');
  if (list?.trim()) {
    const values = list.trim().split(/\s+/).filter(Boolean);
    if (values.length > 0) return pickRandom(values);
  }
  // geração aleatória ...
}

// 2. src/constants/templateTags.ts
import { genPlaca } from '../generators/vehicle';

// no array templateTags:
{
  name: 'placa',
  displayName: 'dados-falsos → placa',
  description: 'Placa veicular brasileira (antiga ou Mercosul)',
  args: [],
  run: async (context?: InsomniaContext) => genPlaca(context)
}

// 3. test/generators.test.ts
import { genPlaca, validarPlaca } from '../src/generators/vehicle';

test('placa: deve ter 7 caracteres', () => {
  assert(genPlaca().length === 7, '...');
});
test('placa: deve ser formato válido', () => {
  assert(validarPlaca(genPlaca()), '...');
});
test('placa: deve ser válida em 1000 iterações', () => {
  for (let i = 0; i < 1000; i++) assert(validarPlaca(genPlaca()), `...`);
});
```

---

## 10. DOCUMENTAÇÃO — CHECKLIST DE ATUALIZAÇÃO

Toda alteração deve manter estes arquivos sincronizados:

| Arquivo | O que atualizar |
|---|---|
| `README.md` | Tabela de tags, contadores, exemplo JSON, benchmarks |
| `DEVELOPMENT.md` | Estrutura de pastas, lista de generators |
| `TESTING.md` | Tabela de categorias/testes, detalhes por categoria |
| `CONTRIBUTING.md` | Padrões caso mudem |
| `src/main.ts` | Descrição e contagem de tags no JSDoc |
| `package.json` | `version` e `insomnia.version` |
| `AGENTS.md` | Este arquivo — estrutura, contagens, regras |

**Checklist mínimo para qualquer nova tag:**
- [ ] Generator + validador implementados
- [ ] JSDoc completo
- [ ] Testes adicionados (formato + DV/regra + 1000 iterações se aplicável)
- [ ] `templateTags.ts` atualizado
- [ ] `README.md` — tabela e exemplo JSON
- [ ] Contadores atualizados (tags e testes)
- [ ] `npm run build` sem erros
- [ ] `npm test` — 100%

---

## 11. CI/CD

- **Push para `main`/PR** → `test.yml`: `npx tsx test/generators.test.ts`
  - Falha se `Score   100%` não aparecer no output
- **Tag `v*`** → `publish-npm.yml`: build + `npm publish`
- **Release local**: `.dev/publish_release.sh [patch|minor|major]`
  - Valida branch (exige main/master), repo limpo, dependências
  - Incrementa versão, atualiza docs, commit, tag, push

---

## 12. ESTATÍSTICAS ATUAIS

| Métrica | Valor |
|---|---|
| Template Tags | 93 |
| Generators | 27 |
| Validadores exportados | 13 |
| Listas via Environment | 15 |
| Testes | 166 |
| Taxa de aprovação | 100% |
| Dependências de produção | 0 |
| Performance média por gerador | < 0,01 ms |

**Última atualização:** 2026-07-21
