#!/usr/bin/env bash
# ==============================================================================
# MooveLabs - Safe Commit & EasyPanel Deploy Script
# ==============================================================================

set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}====================================================${NC}"
echo -e "${BLUE}🛡️  MooveLabs — Auditoria de Segurança & Deploy EasyPanel${NC}"
echo -e "${BLUE}====================================================${NC}"

# 1. Verificação de Repositório Git
if [ ! -d ".git" ]; then
    echo -e "${YELLOW}⚠️  Repositório Git não inicializado. Inicializando...${NC}"
    git init
    git branch -M main
fi

# 2. Auditoria de Arquivos Sensíveis
echo -e "\n${YELLOW}🔍 [1/5] Auditando arquivos rastreados para evitar vazamento de dados...${NC}"
SENSITIVE_FILES=$(git status --porcelain | grep -E '\.env$|\.env\.local$|\.pem$|id_rsa' || true)

if [ -n "$SENSITIVE_FILES" ]; then
    echo -e "${RED}❌ ALERTA DE SEGURANÇA: Arquivos sensíveis detectados na árvore de trabalho:${NC}"
    echo "$SENSITIVE_FILES"
    echo -e "${RED}Abortando para evitar vazamento de credenciais! Verifique seu .gitignore.${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Nenhum arquivo sensível detectado.${NC}"

# 3. Teste de Build Local
echo -e "\n${YELLOW}📦 [2/5] Testando build do Next.js localmente...${NC}"
if npm run build; then
    echo -e "${GREEN}✅ Build executado com sucesso!${NC}"
else
    echo -e "${RED}❌ Falha no build. Corrija os erros antes de commitar ou fazer deploy.${NC}"
    exit 1
fi

# 4. Commit Seguro
COMMIT_MSG="$1"
if [ -z "$COMMIT_MSG" ]; then
    echo -e "\n${YELLOW}📝 Digite a mensagem do commit (Padrão Conventional Commits, ex: feat(home): ajuste de layout):${NC}"
    read -r COMMIT_MSG
fi

if [ -z "$COMMIT_MSG" ]; then
    COMMIT_MSG="chore: update project assets and codebase"
fi

echo -e "\n${YELLOW}💾 [3/5] Adicionando arquivos e realizando commit...${NC}"
git add .
git commit -m "$COMMIT_MSG" || echo -e "${YELLOW}ℹ️ Nenhuma alteração pendente para commit.${NC}"

# 5. Push para o Repositório Remoto
echo -e "\n${YELLOW}🚀 [4/5] Enviando alterações para o repositório remoto (git push)...${NC}"
if git remote | grep -q "origin"; then
    git push origin main || git push origin master || echo -e "${YELLOW}⚠️ Falha no push remoto ou branch não configurada.${NC}"
else
    echo -e "${YELLOW}⚠️ Nenhum remote 'origin' configurado. Configure com: git remote add origin <URL_DO_REPO>${NC}"
fi

# 6. Disparo do Webhook do EasyPanel (Se configurado)
echo -e "\n${YELLOW}🌐 [5/5] Notificando EasyPanel para Deploy...${NC}"
if [ -n "$EASYPANEL_WEBHOOK_URL" ]; then
    echo -e "Disparando webhook: $EASYPANEL_WEBHOOK_URL"
    RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" -X POST "$EASYPANEL_WEBHOOK_URL")
    if [ "$RESPONSE" -ge 200 ] && [ "$RESPONSE" -lt 300 ]; then
        echo -e "${GREEN}🎉 Deploy acionado com sucesso no EasyPanel (HTTP $RESPONSE)!${NC}"
    else
        echo -e "${RED}⚠️ Resposta inesperada do webhook EasyPanel: HTTP $RESPONSE${NC}"
    fi
else
    echo -e "${BLUE}ℹ️ Dica: Para deploy automático, exporte a variável EASYPANEL_WEBHOOK_URL:${NC}"
    echo -e "   export EASYPANEL_WEBHOOK_URL=\"https://easypanel.seudominio.com/api/deploy-webhook?token=SEU_TOKEN\""
fi

echo -e "\n${GREEN}✨ Processo concluído com segurança!${NC}"
