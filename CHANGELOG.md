# Changelog

Todas as alterações relevantes deste projeto serão documentadas neste arquivo.

O formato é baseado em Keep a Changelog,
e este projeto segue Semantic Versioning.

## [Unreleased]

### Added

### Changed

### Deprecated

### Removed

### Fixed

### Security

## [3.0.9] - 2026-07-31
### Added
- Nenhuma
### Changed
- Documentação: Atualização dos contadores de template tags (98→108) e testes (172→182) em AGENTS.md, DEVELOPMENT.md, TESTING.md e README.md
- Changelog: Adição das entradas faltantes para versões v1.0.0, v1.0.1, v3.0.6, v3.0.7 e v3.1.0
- Validação: Verificação de que todos os geradores têm template tags e testes correspondentes
### Deprecated
- Nenhuma
### Removed
- Nenhuma
### Fixed
- Nenhuma
### Security
- Nenhuma

## [3.0.8] - 2026-07-21
### Added
- Nenhuma

### Changed
- Versão aumentada para 3.0.8 (chore de release)

### Deprecated
- Nenhuma

### Removed
- Nenhuma

### Fixed
- Nenhuma

### Security
- Nenhuma

## [3.0.7] - 2026-07-21
### Added
- Nenhuma

### Changed
- Documentação: Correção da seção "Patrocinadores" no README.md
  - Removida linha horizontal desnecessária antes de várias seções
  - Movido a seção "Patrocinadores" para o final do README
  - Adicionado badge de patrocinador
  - Atualizado links e formatação

### Deprecated
- Nenhuma

### Removed
- Nenhuma

### Fixed
- Nenhuma

### Security
- Nenhuma

## [3.0.6] - 2026-07-21
### Added
- **Tags de Utilitários HTTP/API** (10 novas tags):
  - `{% statusHttp %}` - Código de status HTTP comum
  - `{% metodoHttp %}` - Método HTTP (GET, POST, etc.)
  - `{% contentType %}` - Valor de Content-Type
  - `{% accept %}` - Valor do cabeçalho Accept
  - `{% acceptLanguage %}` - Valor do cabeçalho Accept-Language
  - `{% cacheControl %}` - Valor do cabeçalho Cache-Control
  - `{% userAgent %}` - User-Agent representativo de navegador/cliente HTTP
  - `{% authorizationBearer %}` - Cabeçalho Authorization com JWT estrutural
  - `{% correlationId %}` - ID de correlação UUID v4 (suporta UUID_LIST)
  - `{% httpIdempotencyKey %}` - Chave de idempotência UUID v4 (suporta UUID_LIST)
- Novo utilitário de teste de estresse em TypeScript (`test/stress.test.ts`)
- Suporte para definir a quantidade de execuções via parâmetro de linha de comando
- Relatório detalhado com progresso, ETA, tempo médio e resumo final no teste de estresse

### Changed
- Estrutura do `package.json` padronizada conforme práticas recomendadas do ecossistema Node.js
- Adicionado campo `packageManager` para documentar a versão utilizada durante o desenvolvimento
- Revisados metadados do pacote (autor, mantenedores, licenciamento, etc.)
- Mantida compatibilidade com Insomnia através de `peerDependencies` (sem alteração nas dependências de desenvolvimento)
- Script de teste de estresse refatorado de Bash para TypeScript multiplataforma

### Deprecated
- Nenhuma

### Removed
- Nenhuma

### Fixed
- Nenhuma

### Security
- Nenhuma

## [3.0.5] - 2026-07-21
### Added
- Expansão dos dados bancários com as template tags `{% codigoBanco %}`, `{% tipoConta %}`, `{% chavePixCpf %}`, `{% chavePixEmail %}` e `{% chavePixTelefone %}`.
- Catálogo de bancos e instituições de pagamento com códigos FEBRABAN/COMPE, incluindo Banco do Brasil, Santander, Caixa, Bradesco, Itaú, Nubank, PagBank, Mercado Pago, C6 Bank, Sicredi e Sicoob.
- Geração de chaves Pix por CPF, e-mail e telefone brasileiro no padrão internacional E.164.

### Changed
- Catálogo público atualizado para 98 template tags e suíte de qualidade para 172 testes.
- Documentação de desenvolvimento, testes e uso atualizada para cobrir o domínio bancário expandido.

## [3.0.4] - 2026-07-21

### Added
- Novas template tags para cartões de crédito sintéticos: `numeroCartao`, `bandeiraCartao`, `cvv`, `validadeCartao` e `cartaoCompleto`.
- Gerador de cartões com suporte a Visa, Mastercard, Elo, Hipercard e American Express, incluindo validação pelo algoritmo de Luhn.
- Versionamento dos utilitários e documentos internos da pasta `.dev/`.

### Changed
- Documentação revisada e sincronizada com o catálogo atual: 93 template tags e 166 testes.
- Instruções de listas customizadas atualizadas com os separadores suportados e as cinco listas acadêmicas.
- Instalação local ajustada para preservar a estrutura esperada pelo campo `main` do pacote.

## [3.0.3] - 2026-07-20

### Changed
- Metadados de versão atualizados para `3.0.3`.

## [1.5.3] - 2026-07-18

### Added
- Novas template tags acadêmicas: `instituicaoEnsino`, `curso`, `nivelFormacao`, `statusAcademico`, `periodoAcademico`, `semestreAcademico`, `anoAcademico` e `registroAcademico`.
- Suporte a listas customizadas via Environment para geração acadêmica.

### Changed
- Documentação alinhada ao estado atual do projeto, incluindo README, DEVELOPMENT, TESTING, AGENTS, INSTALL, CONTRIBUTING e CHANGELOG.
- Contagem oficial de template tags atualizada para 88 e de testes para 157.
- Metadados do pacote e descrições públicas atualizados para refletir o catálogo completo do plugin.

### Fixed
- Correção de referências antigas a 80 tags e 147 testes em diversos arquivos de documentação.
- Ajuste de inconsistências de versão e descrição no pacote e no ponto de entrada do plugin.

### Security
- Nenhuma alteração de segurança específica nesta versão.

## [1.5.1] - 2026-07-17

### Fixed
- Removido o campo `exports` do `package.json`, que causava incompatibilidade com o Yarn 1.x usado pelo Insomnia v13.
- Removidos os scripts `prepare` e `prepublishOnly` para evitar falhas na instalação via Insomnia.
- Sincronizada a versão do metadata do Insomnia para `1.5.1`.

## [1.5.0] - 2026-07-17

### Added
- Expansão do catálogo de template tags com suporte a `{% tituloEleitor %}`, `{% pis %}` e novos módulos de saúde, bancos, veicular e educação.
- Novas tags: `{% tituloEleitor %}`, `{% pis %}`, `{% placa %}`, `{% placaAntiga %}` e `{% placaMercosul %}`.
- Novos arquivos de documentação: `AGENTS.md`, `CHANGELOG.md`, `SECURITY.md` e `INSTALL.md`.
- Suporte a 10 listas customizadas via Environment do Insomnia: `CPF_LIST`, `CNPJ_LIST`, `EMAIL_LIST`, `UUID_LIST`, `PHONE_LIST`, `CELULAR_LIST`, `WHATSAPP_LIST`, `PIS_LIST`, `CNS_LIST` e `PLACA_LIST`.

### Changed
- Refatoração da estrutura interna para modularizar geradores e utilidades.
- Padronização dos validadores para nomes como `validarRg`, `validarPis` e `validarCns`.
- Documentação reorganizada em raiz (`TESTING.md`, `DEVELOPMENT.md` e `CONTRIBUTING.md`).

### Removed
- Arquivos órfãos `src/generators/health.ts` e `src/generators/professionalRegister.ts`.
- Pasta `assets/docs/` removida.

### Fixed
- Ajustes de geração e validação para os módulos de CNH, PIS e placas veiculares.

### Security
- Atualização do fluxo de CI para usar `tsx` no teste automatizado.

## [1.4.0] - 2026-07-04

### Added
- Novas tags de saúde: `{% tipoSanguineo %}`, `{% numeroProntuario %}`, `{% numeroCNS %}`, `{% convenio %}`, `{% alergia %}` e `{% conselhoProfissional %}`.
- Implementação de CNH com algoritmo CONTRAN real.
- Implementação de RG com algoritmo SSP-SP.

## [1.3.1] - 2026-07-03

### Fixed
- Correção na geração de CNH com algoritmo oficial DENATRAN.

## [1.3.0] - 2026-07-02

### Added
- Dados de países do mundo com ISO 3166-1, DDI e moeda.
- Geolocalização com latitude, longitude, IPv4 RFC 5737 e IPv6 RFC 3849.
- Suporte a e-commerce com SKU, EAN-13, pedido, status, quantidade e frete.

## [1.2.0] - 2026-07-02

### Added
- Identificadores: UUID v4, ULID, chave de idempotência, API Key, JWT, senha forte e SHA-256.
- Suporte a `CPF_LIST` e `CNPJ_LIST` via Environment do Insomnia.
