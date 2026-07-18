# Changelog

Todas as mudanças notáveis são documentadas aqui.  
Formato baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/).

---

## [v1.5.2] — 2026-07-18

### Atualizado
- Documentação alinhada ao estado atual do projeto
- Contagem oficial de template tags atualizada para 80
- Contagem de testes atualizada para 147
- Referências de documentação ajustadas em AGENTS.md, TESTING.md, INSTALL.md e CONTRIBUTING.md

---

## [v1.5.1] — 2026-07-17

### Corrigido
- `package.json`: removido campo `exports` (incompatível com Yarn 1.x do Insomnia v13)
- `package.json`: removidos scripts `prepare` e `prepublishOnly` (evita falha ao instalar via Insomnia)
- `package.json`: `insomnia.version` sincronizado para `1.5.1`

---

## [v1.5.0] — 2026-07-17

### Adicionado
- **80 template tags** — `{% tituloEleitor %}` e `{% pis %}` adicionados, além de novas tags de saúde, bancos e veicular
- **`{% tituloEleitor %}`** — Título de Eleitor com dígito verificador real (Justiça Eleitoral)
- **`{% pis %}`** — PIS/PASEP com dígito verificador real (Caixa Econômica Federal)
- **`{% placa %}`**, **`{% placaAntiga %}`**, **`{% placaMercosul %}`** — placas veiculares
- **10 variáveis de listas customizadas** via Environment do Insomnia:
  `CPF_LIST`, `CNPJ_LIST`, `EMAIL_LIST`, `UUID_LIST`, `PHONE_LIST`,
  `CELULAR_LIST`, `WHATSAPP_LIST`, `PIS_LIST`, `CNS_LIST`, `PLACA_LIST`
- **`AGENTS.md`** — contexto universal para agentes de IA na raiz do projeto
- **`CHANGELOG.md`**, **`SECURITY.md`**, **`INSTALL.md`** adicionados
- Documentação (`TESTING.md`, `DEVELOPMENT.md`, `CONTRIBUTING.md`) movida para raiz

### Novos módulos
- `src/generators/cnh.ts` — `genCnh()`, `validarCnh()`
- `src/generators/pis.ts` — `genPIS(context?)`, `validarPis()`
- `src/generators/vehicle.ts` — `genPlaca(context?)`, `genPlacaAntiga()`, `genPlacaMercosul()`, `validarPlaca()`

### Refatoração
- `identity.ts` simplificado — apenas nomes, username, gênero, data de nascimento
- `cpf.ts` absorveu `genCpf()` com suporte a `CPF_LIST`
- `cnpj.ts` absorveu `genCnpj()` com suporte a `CNPJ_LIST`
- `contact.ts`, `identifiers.ts`, `cns.ts`, `vehicle.ts` recebem `context?` para listas
- Validadores padronizados: `isValidRg` → `validarRg`, `validatePIS` → `validarPis`, `validateCNS` → `validarCns`
- `genProfessionalRegistration()` — tipo de retorno `: string` explícito

### Removido
- `src/generators/health.ts` — arquivo órfão
- `src/generators/professionalRegister.ts` — arquivo órfão
- `assets/docs/` — pasta removida

### Testes
- **147 testes**, 100% de aprovação

### CI/CD
- `test.yml`: `ts-node` → `tsx`

---

## [v1.4.0] — 2026-07-04

### Adicionado
- Tags de saúde: `{% tipoSanguineo %}`, `{% numeroProntuario %}`, `{% numeroCNS %}`,
  `{% convenio %}`, `{% alergia %}`, `{% conselhoProfissional %}` (CRM, CREA, OAB, CRO, COREN)
- CNH com algoritmo CONTRAN real (dois dígitos verificadores)
- RG com algoritmo SSP-SP (dígito verificador)

---

## [v1.3.1] — 2026-07-03

### Corrigido
- Geração de CNH com algoritmo oficial DENATRAN

---

## [v1.3.0] — 2026-07-02

### Adicionado
- Dados de países do mundo (ISO 3166-1, DDI, moeda)
- Geolocalização: latitude, longitude, IPv4 RFC 5737, IPv6 RFC 3849
- E-commerce: SKU, EAN-13, pedido, status, quantidade, frete

---

## [v1.2.0] — 2026-07-02

### Adicionado
- Identificadores: UUID v4, ULID, chave de idempotência, API Key, JWT, senha forte, SHA-256
- Suporte a `CPF_LIST` e `CNPJ_LIST` via Environment do Insomnia
