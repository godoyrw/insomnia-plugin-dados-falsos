#!/usr/bin/env bash

###############################################################################
# Script Name : publish_release.sh
# Project     : insomnia-plugin-dados-falsos
# Description : Automatiza versionamento e publicação de release via Git/npm.
#
# Fluxo:
#   1. Valida tipo de incremento (patch|minor|major).
#   2. Valida dependências (git, node, npm).
#   3. Valida package.json.
#   4. Valida branch (exige main ou master, ou confirmação).
#   5. Verifica repositório limpo.
#   6. Lê versão atual.
#   7. Incrementa versão via npm.
#   8. Atualiza referências de versão nos docs.
#   9. Faz stage e commit da release.
#  10. Cria (ou recria) tag Git.
#  11. Publica branch e tag no remoto.
#
# Uso:
#   ./publish_release.sh                   → incrementa PATCH
#   ./publish_release.sh patch             → incrementa PATCH
#   ./publish_release.sh minor             → incrementa MINOR
#   ./publish_release.sh major             → incrementa MAJOR
#   ./publish_release.sh patch --force-tag → recria tag existente
#
# Autor  : Roberto Wanderley Godoy
# Licença: MIT
###############################################################################

set -Eeuo pipefail

###############################################################################
# PARÂMETROS
###############################################################################

FORCE=false
BUMP="${1:-patch}"
[[ "${2:-}" == "--force-tag" ]] && FORCE=true

###############################################################################
# TRATAMENTO GLOBAL DE ERROS
###############################################################################

trap 'echo "❌ Error on line $LINENO"; exit 1' ERR

###############################################################################
# ETAPA 1 — Validação do Tipo de Incremento
###############################################################################

case "$BUMP" in
    patch | minor | major) ;;
    *)
        echo
        echo "❌ Tipo inválido: '$BUMP'"
        echo
        echo "   Uso: $0 [patch|minor|major] [--force-tag]"
        echo
        exit 1
        ;;
esac

###############################################################################
# ETAPA 2 — Validação das Dependências
###############################################################################

for c in git node npm; do
    command -v "$c" >/dev/null || {
        echo
        echo "❌ Dependência não encontrada: $c"
        echo
        exit 1
    }
done

###############################################################################
# ETAPA 3 — Validação do Projeto
###############################################################################

[[ -f package.json ]] || {
    echo
    echo "❌ package.json não encontrado."
    echo
    exit 1
}

###############################################################################
# ETAPA 4 — Validação da Branch
#
# Releases devem partir de main ou master.
# Outras branches exigem confirmação explícita.
###############################################################################

CURRENT_BRANCH=$(
    git branch --show-current 2>/dev/null ||
    git rev-parse --abbrev-ref HEAD
)

if [[ "$CURRENT_BRANCH" != "main" && "$CURRENT_BRANCH" != "master" ]]; then
    echo
    echo "⚠️  Branch atual: $CURRENT_BRANCH"
    echo
    echo "   Releases devem partir de 'main' ou 'master'."
    echo
    read -rp "   Continuar mesmo assim? [y/N] " BRANCH_ANSWER
    echo
    if [[ ! "$BRANCH_ANSWER" =~ ^[Yy] ]]; then
        echo "Release aborted."
        exit 1
    fi
fi

###############################################################################
# ETAPA 5 — Verificação do Repositório Limpo
###############################################################################

if ! git diff --quiet || ! git diff --cached --quiet; then
    echo
    echo "⚠️  Existem alterações não commitadas."
    echo
    echo "   Faça commit ou stash antes de criar uma release."
    echo
    exit 1
fi

###############################################################################
# ETAPA 6 — Leitura da Versão Atual
###############################################################################

OLD=$(node -p "require('./package.json').version")

###############################################################################
# ETAPA 7 — Incremento da Versão
#
# npm version atualiza package.json e package-lock.json.
# --no-git-tag-version evita commit/tag automáticos do npm.
###############################################################################

npm version "$BUMP" --no-git-tag-version >/dev/null

NEW=$(node -p "require('./package.json').version")
TAG="v$NEW"

###############################################################################
# ETAPA 8 — Atualização dos Documentos
#
# Substitui ocorrências de "v1.2.3" pela nova versão em todos os arquivos
# listados. package.json é tratado separadamente (npm version já o atualizou).
#
# Observação: main.ts NÃO entra mais nessa lista — a versão do plugin agora
# é lida diretamente do package.json via `import { version } from '../package.json'`,
# então não há mais um "@version X.X.X" fixo para substituir ali.
###############################################################################

FILES=(
    README.md
    DEVELOPMENT.md
    CONTRIBUTING.md
    TESTING.md
    INSTALL.md
    SECURITY.md
    CHANGELOG.md
    AGENTS.md
)

OLD_ESC="${OLD//./\\.}"
SEMVER='[0-9]\+\.[0-9]\+\.[0-9]\+'

for f in "${FILES[@]}"; do
    [[ -f "$f" ]] || continue

    if sed --version >/dev/null 2>&1; then
        # GNU sed (Linux)
        sed -i \
            -e "s/v${OLD_ESC}/v${NEW}/g" \
            -e "s/version: ${SEMVER}/version: ${NEW}/g" \
            "$f"
    else
        # BSD sed (macOS)
        sed -i '' \
            -e "s/v${OLD_ESC}/v${NEW}/g" \
            -e "s/version: ${SEMVER}/version: ${NEW}/g" \
            "$f"
    fi

    git add "$f"
done

###############################################################################
# ETAPA 9 — Stage e Commit da Release
###############################################################################

git add package.json
[[ -f package-lock.json ]] && git add package-lock.json

if git diff --cached --quiet; then
    echo
    echo "ℹ️  Nenhuma alteração para commitar."
    echo
else
    git commit -m "chore(release): $TAG"
fi

###############################################################################
# ETAPA 10 — Criação da Tag
###############################################################################

if git rev-parse "$TAG" >/dev/null 2>&1; then

    if $FORCE; then
        echo
        echo "⚠️  Recriando tag existente $TAG..."
        echo
        git tag -d "$TAG" 2>/dev/null || true
        git push origin ":refs/tags/$TAG" 2>/dev/null || true
    else
        read -rp "Tag $TAG já existe. Recriar? [y/N] " ANSWER
        if [[ ! "$ANSWER" =~ ^[Yy] ]]; then
            echo
            echo "Release aborted."
            echo
            exit 1
        fi
        git tag -d "$TAG" 2>/dev/null || true
        git push origin ":refs/tags/$TAG" 2>/dev/null || true
    fi

fi

git tag "$TAG"

###############################################################################
# ETAPA 11 — Publicação
###############################################################################

echo
echo "🚀 Publicando branch $CURRENT_BRANCH..."
echo
git push origin "$CURRENT_BRANCH"

echo
echo "🏷️  Publicando tag $TAG..."
echo
git push origin "$TAG"

###############################################################################
# ETAPA 12 — Build do Projeto
#
# Garante que o diretório dist reflita exatamente a versão que será publicada.
###############################################################################

echo
echo "🔨 Executando build..."
echo

npm run build

###############################################################################
# ETAPA 13 — Geração do pacote NPM
###############################################################################

PACK_DIR=".packs"

mkdir -p "$PACK_DIR"

echo
echo "📦 Gerando pacote npm..."
echo

PACKAGE=$(npm pack --pack-destination "$PACK_DIR")

echo
echo "✅ Pacote criado:"
echo "   $PACK_DIR/$PACKAGE"
echo

###############################################################################
# RESUMO FINAL
###############################################################################

echo
echo "════════════════════════════════════════════════════════════"
echo "           RELEASE CONCLUÍDA COM SUCESSO"
echo "════════════════════════════════════════════════════════════"
echo "✅ Release publicada com sucesso."
echo
echo " ->  📦 Versão anterior : $OLD"
echo " ->  📦 Nova versão     : $NEW"
echo " ->  🏷️  Tag Git        : $TAG"
echo " ->  🌿 Branch          : $CURRENT_BRANCH"
echo " ->  📦 Pacote          : $PACK_DIR/$PACKAGE"
echo
echo "✅ Release publicada com sucesso."
echo