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
