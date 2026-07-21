#!/usr/bin/env bash

###############################################################################
# Git Branch Manager
#
# Objetivo:
#   Automatizar operações comuns de gerenciamento de branches Git
#   através de um menu interativo ou linha de comando.
#
# Funcionalidades:
#   1. Criar branch local e publicar no remoto.
#   2. Deletar branch local e remota.
#   3. Sincronizar branches com o repositório remoto.
#   4. Listar branches locais e remotas.
#
# Uso:
#
#   ./management_branches.sh
#       Abre o menu interativo.
#
#   ./management_branches.sh --create
#       Cria uma nova branch.
#
#   ./management_branches.sh --delete
#       Remove uma branch local e remota.
#
#   ./management_branches.sh --sync
#       Sincroniza referências locais e remotas.
#
#   ./management_branches.sh --list
#       Lista branches locais e remotas.
#
# Autor  : Roberto Wanderley Godoy
# Licença: MIT
###############################################################################

set -euo pipefail

###############################################################################
# CORES ANSI
###############################################################################

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

###############################################################################
# FUNÇÕES DE MENSAGEM
###############################################################################

print_success() { echo -e "${GREEN}✅ $1${NC}"; }
print_error()   { echo -e "${RED}❌ $1${NC}"; }
print_info()    { echo -e "${BLUE}ℹ️  $1${NC}"; }
print_warning() { echo -e "${YELLOW}⚠️  $1${NC}"; }

###############################################################################
# FUNÇÃO: ler_tecla
#
# Captura uma única tecla sem exigir ENTER.
# Retorna: ENTER | ESC | <caractere>
###############################################################################

ler_tecla() {
    local key
    IFS= read -r -n1 -s key 2>/dev/null || true

    if [[ -z "$key" ]]; then
        echo "ENTER"
        return 0
    fi

    local code
    code=$(printf '%d' "'$key" 2>/dev/null || echo "0")

    if [[ "$code" == "27" ]]; then
        echo "ESC"
        return 0
    fi

    echo "$key"
}

###############################################################################
# FUNÇÃO: perguntar
#
# Lê texto do usuário caractere a caractere.
# ESC cancela imediatamente.
#
# Uso: perguntar "Prompt: " NOME_VARIAVEL
###############################################################################

perguntar() {
    local prompt="$1"
    local var_name="$2"
    local resposta=""
    local tecla

    echo -n "$prompt"

    while true; do
        tecla=$(ler_tecla)

        if [[ "$tecla" == "ENTER" ]]; then
            break
        elif [[ "$tecla" == "ESC" ]]; then
            echo ""
            print_error "Operação cancelada (ESC)."
            exit 0
        else
            resposta="${resposta}${tecla}"
            echo -n "$tecla"
        fi
    done

    echo ""

    # printf -v é seguro contra injeção (substitui eval)
    printf -v "$var_name" '%s' "$resposta"
}

###############################################################################
# FUNÇÃO: confirmar
#
# Solicita confirmação simples (s/N).
# Retorna 0 para sim, 1 para não.
###############################################################################

confirmar() {
    local msg="${1:-Continuar?}"
    echo -n "$msg (s/N): "

    local tecla
    tecla=$(ler_tecla)
    echo ""

    if [[ "$tecla" == "ESC" ]]; then
        print_error "Operação cancelada (ESC)."
        exit 0
    fi

    [[ "$tecla" == "s" || "$tecla" == "S" ]]
}

###############################################################################
# FUNÇÃO: pausa_ou_sair
#
# ENTER → continua | ESC → encerra
###############################################################################

pausa_ou_sair() {
    echo ""
    echo -n "Pressione ENTER para continuar ou ESC para sair..."

    local tecla
    tecla=$(ler_tecla)
    echo ""

    if [[ "$tecla" == "ESC" ]]; then
        print_info "Saindo..."
        exit 0
    fi
}

###############################################################################
# FUNÇÃO: validar_repo
#
# Garante que o diretório atual é um repositório Git.
###############################################################################

validar_repo() {
    if ! git rev-parse --git-dir >/dev/null 2>&1; then
        print_error "Este diretório não é um repositório Git!"
        exit 1
    fi
}

###############################################################################
# FUNÇÃO: delete_branch
###############################################################################

delete_branch() {
    print_info "Iniciando exclusão de branch..."
    validar_repo

    local CURRENT_BRANCH
    CURRENT_BRANCH=$(git branch --show-current)

    echo ""
    print_info "Branches locais disponíveis:"
    git branch --list

    echo ""

    local BRANCH_NAME
    perguntar "Branch a DELETAR (local e remota): " BRANCH_NAME

    if [[ -z "$BRANCH_NAME" ]]; then
        print_error "Nome da branch não pode estar vazio!"
        return 1
    fi

    if ! git show-ref --verify --quiet "refs/heads/$BRANCH_NAME"; then
        print_error "A branch '$BRANCH_NAME' não existe localmente!"
        return 1
    fi

    if [[ "$BRANCH_NAME" == "$CURRENT_BRANCH" ]]; then
        print_error "Não é possível deletar a branch atual. Troque de branch antes."
        return 1
    fi

    echo ""
    if ! confirmar "Tem certeza que deseja deletar '$BRANCH_NAME'?"; then
        print_info "Operação cancelada."
        return 0
    fi

    print_info "Deletando branch local..."
    if git branch -d "$BRANCH_NAME" 2>/dev/null; then
        print_success "Branch local removida."
    else
        print_warning "Tentando remoção forçada..."
        git branch -D "$BRANCH_NAME"
        print_success "Branch local removida (forçado)."
    fi

    print_info "Removendo branch remota..."
    if git push origin --delete "$BRANCH_NAME" 2>/dev/null; then
        print_success "Branch remota removida."
    else
        print_warning "Branch remota inexistente ou já removida."
    fi

    print_info "Atualizando referências..."
    git remote prune origin >/dev/null 2>&1

    print_success "Processo concluído."
}

###############################################################################
# FUNÇÃO: create_branch
###############################################################################

create_branch() {
    print_info "Iniciando criação de branch..."
    validar_repo

    local BRANCH_NAME
    perguntar "Nome da NOVA branch: " BRANCH_NAME

    if [[ -z "$BRANCH_NAME" ]]; then
        print_error "Nome inválido."
        return 1
    fi

    if git show-ref --verify --quiet "refs/heads/$BRANCH_NAME"; then
        print_error "A branch '$BRANCH_NAME' já existe."
        return 1
    fi

    echo ""
    if ! confirmar "Criar branch '$BRANCH_NAME'?"; then
        print_info "Operação cancelada."
        return 0
    fi

    local CURRENT_BRANCH
    CURRENT_BRANCH=$(git branch --show-current)
    print_info "Branch atual: $CURRENT_BRANCH"

    git checkout -b "$BRANCH_NAME"
    print_success "Branch criada."

    git push -u origin "$BRANCH_NAME"
    print_success "Branch publicada no remoto."

    print_success "Processo concluído."
}

###############################################################################
# FUNÇÃO: sync_and_clean
###############################################################################

sync_and_clean() {
    print_info "Sincronizando repositório..."
    validar_repo

    git fetch --all --prune
    git remote prune origin

    echo ""
    print_info "Branches com tracking remoto removido:"
    git branch -vv | grep ': gone]' || echo "  Nenhuma."

    echo ""
    print_success "Sincronização concluída."
}

###############################################################################
# FUNÇÃO: list_branches
###############################################################################

list_branches() {
    validar_repo

    print_info "Branches locais:"
    git branch --list

    echo ""
    print_info "Branches remotas:"
    git branch -r

    echo ""
    print_info "Tracking:"
    git branch -vv
}

###############################################################################
# MENU PRINCIPAL
###############################################################################

show_menu() {
    while true; do
        echo ""
        echo "======================================================"
        echo "🚀 GERENCIADOR DE BRANCHES GIT"
        echo "======================================================"
        echo ""
        echo "  1 → DELETAR branch"
        echo "  2 → CRIAR branch"
        echo "  3 → SINCRONIZAR"
        echo "  4 → LISTAR branches"
        echo "  5 → SAIR"
        echo ""
        echo -n "Escolha [1-5]: "

        local OPTION
        OPTION=$(ler_tecla)
        echo ""

        case "$OPTION" in
            1) delete_branch ;;
            2) create_branch ;;
            3) sync_and_clean ;;
            4) list_branches ;;
            5 | ESC) exit 0 ;;
            *) print_error "Opção inválida." ; continue ;;
        esac

        pausa_ou_sair
    done
}

###############################################################################
# PONTO DE ENTRADA
###############################################################################

if [[ $# -ge 1 ]]; then
    case "$1" in
        -d | --delete) delete_branch ;;
        -c | --create) create_branch ;;
        -s | --sync)   sync_and_clean ;;
        -l | --list)   list_branches ;;
        -h | --help)
            echo "Uso: $0 [opção]"
            echo ""
            echo "  -c, --create   Criar branch"
            echo "  -d, --delete   Deletar branch"
            echo "  -s, --sync     Sincronizar"
            echo "  -l, --list     Listar"
            echo "  -h, --help     Ajuda"
            ;;
        *)
            print_error "Opção desconhecida: $1"
            exit 1
            ;;
    esac
else
    show_menu
fi
