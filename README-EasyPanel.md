# Deploy no EasyPanel

Este projeto está configurado para ser deployado no EasyPanel usando Docker.

## 📋 Pré-requisitos

- EasyPanel configurado
- Repositório Git com o código
- Docker habilitado no EasyPanel

## 🚀 Deploy no EasyPanel

### 1. Preparação do Repositório

Certifique-se de que os seguintes arquivos estão no seu repositório:
- `Dockerfile`
- `.dockerignore`
- `docker-compose.yml` (opcional)
- `next.config.ts` (com `output: 'standalone'`)

### 2. Configuração no EasyPanel

1. **Acesse o EasyPanel**
2. **Crie um novo projeto**
3. **Selecione "Docker" como tipo de deploy**
4. **Configure o repositório Git:**
   - URL do repositório
   - Branch (geralmente `main` ou `master`)
   - Credenciais de acesso

### 3. Configurações do Container

- **Porta:** `3000`
- **Comando de build:** `docker build -t app .`
- **Comando de start:** `docker run -p 3000:3000 app`

### 4. Variáveis de Ambiente (Opcional)

Se necessário, configure as seguintes variáveis:
```
NODE_ENV=production
PORT=3000
HOSTNAME=0.0.0.0
```

### 5. Deploy

1. **Clique em "Deploy"**
2. **Aguarde o build completar**
3. **Verifique se a aplicação está rodando**

## 🔧 Configurações Específicas

### Porta
A aplicação roda na porta `3000` por padrão.

### Health Check
O container inclui health check configurado para verificar se a aplicação está respondendo.

### Restart Policy
Configurado para `unless-stopped` para garantir que a aplicação reinicie automaticamente.

## 📝 Notas Importantes

- O Dockerfile usa multi-stage build para otimizar o tamanho da imagem
- A aplicação roda como usuário não-root por segurança
- O modo `standalone` do Next.js é necessário para o Docker funcionar corretamente
- O `.dockerignore` exclui arquivos desnecessários para otimizar o build

## 🐛 Troubleshooting

### Build falha
- Verifique se o `next.config.ts` tem `output: 'standalone'`
- Confirme se todas as dependências estão no `package.json`

### Aplicação não inicia
- Verifique os logs do container no EasyPanel
- Confirme se a porta 3000 está liberada
- Verifique se as variáveis de ambiente estão corretas

### Performance
- A imagem usa Alpine Linux para reduzir o tamanho
- O build é otimizado para produção
- Dependências de desenvolvimento são excluídas

## 🔄 Atualizações

Para atualizar a aplicação:
1. Faça push das mudanças para o repositório
2. No EasyPanel, clique em "Redeploy"
3. Aguarde o novo build e deploy

## 📞 Suporte

Se encontrar problemas:
1. Verifique os logs no EasyPanel
2. Confirme se o Dockerfile está correto
3. Teste localmente com `docker-compose up`
