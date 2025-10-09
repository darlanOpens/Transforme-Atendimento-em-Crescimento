# Guia de Integração RD Station Marketing via GTM
**Data**: 2025-10-09
**Status**: ✅ Implementado

---

## 📋 Resumo da Implementação

Adicionamos disparos de eventos para o Google Tag Manager (GTM) no formulário "Conversa Estratégica Popup" para integrar com RD Station Marketing.

---

## 🔧 O Que Foi Implementado

### **1. Eventos dataLayer Adicionados**

Quando o formulário é enviado com sucesso, dois eventos são disparados para o `window.dataLayer`:

#### **Evento 1: form_submission (Genérico)**
```javascript
window.dataLayer.push({
  'event': 'form_submission',
  'formName': 'Conversa Estratégica',
  'formId': 'conversa_estrategica',
  'conversionName': 'Lead - Conversa Estratégica',
  'formData': {
    'nome': 'Nome do usuário',
    'email': 'email@exemplo.com',
    'telefone': '11999999999',
    'empresa': 'Nome da Empresa',
    'segmento': 'Segmento selecionado'
  }
})
```

#### **Evento 2: rdstation_conversion (Específico RD Station)**
```javascript
window.dataLayer.push({
  'event': 'rdstation_conversion',
  'conversion_identifier': 'conversa-estrategica',
  'email': 'email@exemplo.com',
  'name': 'Nome do usuário',
  'mobile_phone': '11999999999',
  'company': 'Nome da Empresa',
  'cf_segmento': 'Segmento selecionado'
})
```

---

## ✅ Como Testar Localmente

### **Passo 1: Abrir o Console do Navegador**
1. Acesse: http://localhost:3001
2. Pressione **F12** ou **Ctrl+Shift+I**
3. Vá para a aba **Console**

### **Passo 2: Verificar dataLayer Antes do Envio**
No console, digite:
```javascript
window.dataLayer
```

Você deve ver um array (pode estar vazio se GTM não estiver instalado localmente).

### **Passo 3: Preencher e Enviar o Formulário**
1. Clique em qualquer botão "Agendar" no site
2. Preencha todos os campos:
   - **Nome**: Teste Silva
   - **E-mail**: teste@exemplo.com
   - **WhatsApp**: (11) 99999-9999
   - **Empresa**: Empresa Teste
   - **Segmento**: Selecione qualquer opção
3. Clique em "Agendar Conversa"

### **Passo 4: Verificar Eventos no Console**
Após o envio bem-sucedido, no console digite novamente:
```javascript
window.dataLayer
```

Você deve ver os eventos `form_submission` e `rdstation_conversion` adicionados ao array.

**Alternativa - Monitorar em Tempo Real:**
```javascript
window.dataLayer = window.dataLayer || [];
window.dataLayer.push = function(...args) {
  console.log('📊 Evento GTM disparado:', args);
  return Array.prototype.push.apply(this, args);
};
```

---

## 🎯 Configuração no GTM (Google Tag Manager)

### **Passo 1: Acessar o GTM**
1. Acesse: https://tagmanager.google.com/
2. Selecione o container do site Opens

### **Passo 2: Criar Variáveis Personalizadas**

Crie as seguintes variáveis do tipo **Variável da Camada de Dados**:

| Nome da Variável | Nome da Camada de Dados |
|------------------|-------------------------|
| `DLV - Email` | `email` |
| `DLV - Name` | `name` |
| `DLV - Mobile Phone` | `mobile_phone` |
| `DLV - Company` | `company` |
| `DLV - Segmento` | `cf_segmento` |
| `DLV - Conversion Identifier` | `conversion_identifier` |

### **Passo 3: Criar Acionador**

**Nome**: `CE - RD Station Conversion`

**Tipo**: Evento personalizado

**Configurações**:
- **Nome do evento**: `rdstation_conversion`
- **Aciona em**: Todos os eventos personalizados

### **Passo 4: Criar Tag RD Station**

**Nome**: `Tag - RD Station - Conversa Estratégica`

**Tipo**: HTML Personalizado

**HTML**:
```html
<script type="text/javascript">
(function() {
  var email = {{DLV - Email}};
  var name = {{DLV - Name}};
  var phone = {{DLV - Mobile Phone}};
  var company = {{DLV - Company}};
  var segmento = {{DLV - Segmento}};

  // Verificar se já existe função RdIntegration
  if (typeof RdIntegration !== 'undefined') {
    try {
      RdIntegration('conversa-estrategica', {
        'email': email,
        'name': name,
        'mobile_phone': phone,
        'company': company,
        'cf_segmento': segmento
      });
      console.log('✅ Conversão RD Station enviada:', email);
    } catch(e) {
      console.error('❌ Erro ao enviar para RD Station:', e);
    }
  } else {
    console.warn('⚠️ RD Station não carregado. Verifique instalação.');
  }
})();
</script>
```

**Acionamento**: Use o acionador `CE - RD Station Conversion`

### **Passo 5: Publicar as Alterações**
1. Clique em **Enviar**
2. Adicione uma descrição: "Integração formulário Conversa Estratégica com RD Station"
3. Clique em **Publicar**

---

## 🔍 Como Testar em Produção

### **Método 1: GTM Preview Mode**

1. No GTM, clique em **Visualizar** (Preview)
2. Digite a URL do site: `https://opens.com.br`
3. Preencha e envie o formulário
4. No painel de preview do GTM:
   - Verifique se o evento `rdstation_conversion` aparece
   - Verifique se a tag RD Station foi disparada
   - Verifique os valores das variáveis

### **Método 2: Console do Navegador (Produção)**

1. Acesse o site em produção
2. Abra o Console (F12)
3. Digite:
```javascript
// Monitorar dataLayer
window.dataLayer
```

4. Preencha e envie o formulário
5. Verifique os eventos no dataLayer

### **Método 3: RD Station Dashboard**

1. Acesse o RD Station Marketing
2. Vá em **Integrações** → **Códigos de Acompanhamento**
3. Após enviar o formulário, aguarde alguns minutos
4. Verifique em **Leads** se a conversão foi registrada
5. Verifique se os campos personalizados foram preenchidos:
   - Nome
   - E-mail
   - Telefone
   - Empresa
   - Segmento (campo personalizado)

---

## 🐛 Troubleshooting

### **Problema 1: "window.dataLayer is undefined"**

**Causa**: GTM não está instalado na página

**Solução**:
1. Verifique se o código do GTM está no `<head>` do site
2. Verifique se o GTM está publicado
3. Limpe o cache do navegador

### **Problema 2: Eventos Não Aparecem no dataLayer**

**Causa**: Formulário pode não estar enviando com sucesso

**Solução**:
1. Verifique o console por erros
2. Verifique se o webhook N8N responde com sucesso (status 200)
3. Teste com dados diferentes

### **Problema 3: Tag RD Station Não Dispara**

**Causa**: Acionador ou tag mal configurados

**Solução**:
1. Use o **Preview Mode** do GTM
2. Verifique se o evento `rdstation_conversion` aparece
3. Verifique se o acionador está configurado corretamente
4. Verifique se as variáveis estão capturando os valores

### **Problema 4: "RdIntegration is not defined"**

**Causa**: Script do RD Station Marketing não carregado

**Solução**:
1. Acesse **RD Station** → **Integrações** → **Códigos de Acompanhamento**
2. Copie o código de tracking base do RD Station
3. Adicione no GTM como tag HTML personalizada
4. Configure para disparar em **Todas as Páginas**

### **Problema 5: Campos Não Aparecem no RD Station**

**Causa**: Campos personalizados não criados no RD Station

**Solução**:
1. Acesse **RD Station** → **Contatos** → **Campos Personalizados**
2. Crie o campo `cf_segmento` (tipo: Lista de opções)
3. Adicione as opções do segmento
4. Salve e tente novamente

---

## 📊 Dados Enviados

### **Campos Padrão**
- **Nome**: `name` (string)
- **E-mail**: `email` (string) - **obrigatório**
- **Telefone**: `mobile_phone` (string, apenas números)
- **Empresa**: `company` (string)

### **Campos Personalizados**
- **Segmento**: `cf_segmento` (string)
  - Valores possíveis: Saúde, Educação, Varejo, Tecnologia, Serviços, Indústria, Construção e Imobiliário, Finanças, Entretenimento e Lazer, Governamental, Ecommerce, ONG, Automotivo, Turismo, Transporte, Telecomunicações, Segurança, Hotelaria, Advocacia, Moda, Marketing, Alimentação, Comunicação, Outro

### **Metadados**
- **Identificador de Conversão**: `conversa-estrategica`
- **Nome do Formulário**: Conversa Estratégica
- **ID do Formulário**: conversa_estrategica

---

## 🚀 Fluxo Completo de Conversão

```
1. Usuário preenche formulário
   ↓
2. Validação frontend (React)
   ↓
3. Envio para webhook N8N
   ↓
4. Webhook responde com sucesso
   ↓
5. Disparar eventos dataLayer:
   - event: form_submission
   - event: rdstation_conversion
   ↓
6. GTM captura evento rdstation_conversion
   ↓
7. GTM dispara tag RD Station
   ↓
8. RD Station registra conversão
   ↓
9. Lead aparece no dashboard RD Station
```

---

## ✅ Checklist de Verificação

Antes de considerar a integração concluída, verifique:

- [ ] Código dataLayer implementado no formulário
- [ ] Eventos disparados com sucesso no console local
- [ ] GTM instalado e publicado no site
- [ ] Variáveis criadas no GTM
- [ ] Acionador `rdstation_conversion` criado
- [ ] Tag RD Station criada e configurada
- [ ] Preview mode do GTM testado e funcionando
- [ ] Conversão testada em produção
- [ ] Lead apareceu no RD Station
- [ ] Campos personalizados preenchidos corretamente

---

## 📞 Suporte

### **Problemas com GTM:**
- Documentação: https://support.google.com/tagmanager
- Community: https://www.en.advertisercommunity.com/t5/Google-Tag-Manager/ct-p/google-tag-manager

### **Problemas com RD Station:**
- Documentação: https://developers.rdstation.com/
- Suporte: suporte@rdstation.com

### **Problemas com o Formulário:**
- Verificar console do navegador
- Verificar webhook N8N: https://n8n.opens.com.br/webhook/hubspot-form
- Verificar logs do servidor

---

**Implementado por**: Claude Code
**Arquivo modificado**: `components/ui/conversa-estrategica-popup.tsx`
**Linhas**: 11-16, 142-172
