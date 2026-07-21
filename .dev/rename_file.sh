#!/usr/bin/env bash

###############################################################################
# Script Name : rename-file.sh
# Project     : insomnia-plugin-dados-falsos
# Description : Renomeia um arquivo com "git mv", preservando o histórico Git.
#               Cria um commit automático. O push é opcional (confirmação).
#
# Uso:
#
#   ./rename-file.sh <origem> <destino>
#   ./rename-file.sh <origem> <destino> "mensagem personalizada"
#
# Exemplos:
#
#   ./.dev/rename-file.sh test/quality.ts test/generators.test.ts
#   ./.dev/rename-file.sh src/utils.ts src/helpers.ts "chore: rename utils"
#
# Autor  : Roberto Wanderley Godoy
# Licença: MIT
###############################################################################

set -euo pipefail

###############################################################################
# CORES
###############################################################################

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

print_success() { echo -e "${GREEN}✅ $1${NC}"; }
print_error()   { echo -e "${RED}❌ $1${NC}"; }
print_info()    { echo -e "${BLUE}ℹ️  $1${NC}"; }
print_warning() { echo -e "${YELLOW}⚠️  $1${NC}"; }

###############################################################################
# ETAPA 1 — Validação dos Parâmetros
###############################################################################

OLD_PATH="${1:-}"
NEW_PATH="${2:-}"

if [[ -z "$OLD_PATH" || -z "$NEW_PATH" ]]; then
    echo ""
    print_error "Uso: $0 <origem> <destino> [\"mensagem\"]"
    echo ""
    echo "  Exemplo:"
    echo "    $0 test/quality.ts test/generators.test.ts"
    echo ""
    exit 1
fi

# Definir COMMIT_MSG após validar parâmetros para evitar mensagem vazia
COMMIT_MSG="${3:-chore: rename ${OLD_PATH} to ${NEW_PATH}}"

###############################################################################
# ETAPA 2 — Verificação do Repositório Git
###############################################################################

if ! git rev-parse --git-dir >/dev/null 2>&1; then
    print_error "Este diretório não é um repositório Git!"
    exit 1
fi

###############################################################################
# ETAPA 3 — Validação do Arquivo de Origem
###############################################################################

if [[ ! -f "$OLD_PATH" ]]; then
    echo ""
    print_error "Arquivo não encontrado: $OLD_PATH"
    echo ""
    exit 1
fi

###############################################################################
# ETAPA 4 — Validação do Arquivo de Destino
###############################################################################

if [[ -f "$NEW_PATH" ]]; then
    echo ""
    print_error "Já existe um arquivo em: $NEW_PATH"
    echo ""
    exit 1
fi

###############################################################################
# ETAPA 5 — Criação do Diretório de Destino (se necessário)
###############################################################################

NEW_DIR=$(dirname "$NEW_PATH")

if [[ ! -d "$NEW_DIR" ]]; then
    echo ""
    print_info "Criando diretório: $NEW_DIR"
    mkdir -p "$NEW_DIR"
fi

###############################################################################
# ETAPA 6 — Renomeação via git mv
###############################################################################

echo ""
print_info "Renomeando arquivo..."
echo "   Origem : $OLD_PATH"
echo "   Destino: $NEW_PATH"
echo ""

git mv "$OLD_PATH" "$NEW_PATH"

###############################################################################
# ETAPA 7 — Commit
###############################################################################

echo ""
print_info "Criando commit..."
echo "   $COMMIT_MSG"
echo ""

git commit -m "$COMMIT_MSG"

###############################################################################
# ETAPA 8 — Push (opcional, com confirmação)
###############################################################################

CURRENT_BRANCH=$(git branch --show-current)

echo ""
echo -n "Publicar alteração em '$CURRENT_BRANCH'? (s/N): "
read -r -n1 ANSWER
echo ""

if [[ "$ANSWER" == "s" || "$ANSWER" == "S" ]]; then
    echo ""
    print_info "Publicando alteração..."
    git push origin "$CURRENT_BRANCH"
    print_success "Alteração publicada."
else
    print_info "Push ignorado. Execute manualmente quando desejar:"
    echo "    git push origin $CURRENT_BRANCH"
fi

###############################################################################
# ETAPA 9 — Resumo
###############################################################################

echo ""
echo "════════════════════════════════════════════════════════════"
echo "             FILE RENAMED SUCCESSFULLY"
echo "════════════════════════════════════════════════════════════"
echo ""
echo "   Antes  : $OLD_PATH"
echo "   Depois : $NEW_PATH"
echo "   Branch : $CURRENT_BRANCH"
echo ""

print_warning "Verifique se existem referências ao arquivo antigo em:"
echo ""
echo "   • package.json / tsconfig.json"
echo "   • .github/workflows/"
echo "   • imports TypeScript"
echo "   • documentação (README, DEVELOPMENT, etc.)"
echo ""
