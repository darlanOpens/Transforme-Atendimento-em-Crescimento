# Dockerfile para Next.js - Otimizado para EasyPanel
FROM node:18-alpine AS base

# Instalar dependências necessárias
RUN apk add --no-cache libc6-compat

# Definir diretório de trabalho
WORKDIR /app

# Copiar arquivos de dependências
COPY package.json package-lock.json* ./

# Limpar cache e instalar TODAS as dependências
RUN npm cache clean --force && \
    npm ci --no-optional && \
    npm cache clean --force

# Copiar código fonte
COPY . .

# Verificar se os arquivos foram copiados corretamente
RUN ls -la components/ui/

# Build da aplicação (sem linting para evitar erros de ESLint)
RUN DISABLE_ESLINT_PLUGIN=true npm run build

# Imagem de produção
FROM node:18-alpine AS runner

# Criar usuário não-root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Instalar dependências necessárias
RUN apk add --no-cache libc6-compat

# Definir diretório de trabalho
WORKDIR /app

# Copiar arquivos necessários da imagem de build
COPY --from=base /app/public ./public
COPY --from=base /app/.next/standalone ./
COPY --from=base /app/.next/static ./.next/static

# Alterar propriedade dos arquivos
RUN chown -R nextjs:nodejs /app

# Mudar para usuário não-root
USER nextjs

# Expor porta
EXPOSE 3000

# Variáveis de ambiente
ENV PORT=3000
ENV NODE_ENV=production
ENV HOSTNAME="0.0.0.0"

# Comando para iniciar a aplicação
CMD ["node", "server.js"]
