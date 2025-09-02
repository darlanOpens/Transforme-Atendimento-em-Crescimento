#!/bin/bash

# Script de build para debug
echo "🔍 Iniciando build de debug..."

# Verificar se estamos no diretório correto
if [ ! -f "package.json" ]; then
    echo "❌ package.json não encontrado. Certifique-se de estar no diretório raiz do projeto."
    exit 1
fi

# Limpar cache do npm
echo "🧹 Limpando cache do npm..."
npm cache clean --force

# Instalar dependências
echo "📦 Instalando dependências..."
npm ci --no-optional

# Verificar se os componentes existem
echo "🔍 Verificando componentes..."
if [ ! -d "components/ui" ]; then
    echo "❌ Pasta components/ui não encontrada!"
    exit 1
fi

echo "✅ Componentes encontrados:"
ls -la components/ui/

# Build da aplicação
echo "🏗️ Iniciando build..."
npm run build

echo "✅ Build concluído!"
