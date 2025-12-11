#!/bin/bash

# Script de teste para verificar a configuração SMTP

echo "🔍 Verificando configuração SMTP..."
echo ""

# Verificar se .env.local existe
if [ ! -f .env.local ]; then
  echo "❌ Arquivo .env.local não encontrado!"
  exit 1
fi

echo "✅ Arquivo .env.local encontrado"
echo ""

# Carregar variáveis
export $(cat .env.local | grep -v '#' | xargs)

echo "📧 Configuração SMTP:"
echo "  SMTP_HOST: $SMTP_HOST"
echo "  SMTP_PORT: $SMTP_PORT"
echo "  SMTP_SECURE: $SMTP_SECURE"
echo "  SMTP_FROM: $SMTP_FROM"
echo ""

# Verificar se nodemailer está instalado
if npm list nodemailer > /dev/null 2>&1; then
  echo "✅ nodemailer instalado"
else
  echo "❌ nodemailer não instalado"
  echo "   Execute: npm install nodemailer --save"
  exit 1
fi

echo ""
echo "✅ Configuração validada! Pronto para usar."
echo ""
echo "Para iniciar o servidor de desenvolvimento:"
echo "  npm run dev"
echo ""
echo "Para fazer build de produção:"
echo "  npm run build"
echo "  npm run start"
