# Changelog

Todas as mudanças notáveis são documentadas aqui.  
Formato baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/).

---

## [v1.5.1] — 2026-07-17

### Adicionado
- **76 template tags** — +5 novas tags em relação à v1.5.1
- **`{% pis %}`** — PIS/PASEP com dígito verificador real (algoritmo Caixa Econômica Federal)
- **`{% placa %}`** — Placa veicular aleatória (antiga ou Mercosul)
- **`{% placaAntiga %}`** — Placa formato antigo AAA9999
- **`{% placaMercosul %}`** — Placa formato Mercosul AAA9A99
- **`{% usuario %}`** — corrigido para retornar username estruturado (era apelido)
- **10 variáveis de listas customizadas** via Environment do Insomnia:
  `CPF_LIST`, `CNPJ_LIST`, `EMAIL_LIST`, `UUID_LIST`, `PHONE_LIST`,
  `CELULAR_LIST`, `WHATSAPP_LIST`, `PIS_LIST`, `CNS_LIST`, `PLACA_LIST`
- **`AGENTS.md`** na raiz — contexto universal para agentes de IA (Kiro, Claude, Codex, etc.)
- **`SECURITY.md`** — política de segurança e LGPD
- **`INSTALL.md`**, **`TESTING.md`**, **`DEVELOPMENT.md`**, **`CONTRIBUTING.md`** movidos para a raiz

### Novo módulo `src/generators/vehicle.ts`
- `genPlaca(context?)`, `genPlacaAntiga()`, `genPlacaMercosul()`, `validarPlaca()`

### Novo módulo `src/generators/cnh.ts`
- `genCnh()`, `validarCnh()` — extraídos de `identity.ts`

### Novo módulo `src/generators/pis.ts`
- `genPIS(context?)`, `validarPis()` — usado internamente pelo CNS

### Refatoração
- **`identity.ts`** simplificado — apenas nomes, username, gênero, data de nascimento
- **`cpf.ts`** absorveu `genCpf()` com suporte a `CPF_LIST`
- **`cnpj.ts`** absorveu `genCnpj()` com suporte a `CNPJ_LIST`
- **`cns.ts`** recebe `context?` com suporte a `CNS_LIST`
- **`contact.ts`** recebe `context?` com suporte a `EMAIL_LIST`, `PHONE_LIST`, `CELULAR_LIST`, `WHATSAPP_LIST`
- **`identifiers.ts`** recebe `context?` com suporte a `UUID_LIST`
- **`vehicle.ts`** recebe `context?` com suporte a `PLACA_LIST`

### Padronização
- Validadores renomeados para padrão `validar*` em português:
  `isValidRg` → `validarRg`, `validatePIS` → `validarPis`, `validateCNS` → `validarCns`
- `genProfessionalRegistration()` — tipo de retorno `: string` explícito adicionado

### Removido
- `src/generators/health.ts` — arquivo órfão (funcionalidade em módulos dedicados)
- `src/generators/professionalRegister.ts` — arquivo órfão (duplicata com nome errado)
- `assets/docs/` — pasta removida (documentação movida para raiz do projeto)

### Testes
- **138 testes**, 100% de aprovação (+12 em relação à v1.5.1)
- Validadores `validarCnh`, `validarRg`, `validarPis` importados dos módulos oficiais
- Função local `isValidCnh` removida do arquivo de testes (substituída pelo módulo)

### CI/CD
- `test.yml`: `ts-node` → `tsx` (consistente com devDependencies)

---

## [v1.5.1] — 2026-07-04

### Adicionado
- **Tags de saúde**: `{% tipoSanguineo %}`, `{% numeroProntuario %}`, `{% numeroCNS %}`,
  `{% convenio %}`, `{% alergia %}`, `{% conselhoProfissional %}` (CRM, CREA, OAB, CRO, COREN)
- **CNH** com algoritmo CONTRAN real (dois dígitos verificadores)
- **RG** com algoritmo SSP-SP

### Testes
- 126 testes, 100% de aprovação

---

## [v1.3.1] — anterior

### Corrigido
- Geração de CNH com algoritmo oficial
