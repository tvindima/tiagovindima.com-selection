# Guia de Publicação / Deployment Guide

## 🌐 Como obter o link do seu site / How to get your site's link

### Opção 1: Deploy no Vercel (Recomendado / Recommended)

O Vercel é a plataforma criada pelos mesmos criadores do Next.js e oferece deploy gratuito.

**Passos:**

1. **Crie uma conta no Vercel**
   - Acesse: https://vercel.com
   - Faça login com sua conta GitHub

2. **Importe seu repositório**
   - Clique em "Add New Project"
   - Selecione este repositório: `tvindima/tiagovindima.com-selection`
   - Clique em "Import"

3. **Configure o projeto**
   - O Vercel detectará automaticamente que é um projeto Next.js
   - Deixe as configurações padrão
   - Clique em "Deploy"

4. **Aguarde o deploy** (leva ~2 minutos)
   - O Vercel criará automaticamente um link como: `https://tiagovindima-com-selection.vercel.app`
   - Este é o seu link público! 🎉

**Link rápido:**
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tvindima/tiagovindima.com-selection)

---

### Opção 2: Deploy no Netlify

1. Acesse: https://netlify.com
2. Faça login com GitHub
3. Clique em "Add new site" → "Import an existing project"
4. Selecione o repositório
5. Configure:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Clique em "Deploy"

---

### Opção 3: Deploy Manual (Servidor próprio)

Se você tem um servidor VPS ou hosting:

```bash
# 1. Clone o repositório
git clone https://github.com/tvindima/tiagovindima.com-selection.git
cd tiagovindima.com-selection

# 2. Instale as dependências
npm install

# 3. Build do projeto
npm run build

# 4. Inicie o servidor
npm start
```

O site estará disponível em `http://localhost:3000`

Para expor na internet, configure um proxy reverso (nginx/Apache) apontando para a porta 3000.

---

## 🔗 Domínio Personalizado

Depois do deploy, você pode adicionar seu próprio domínio (ex: www.tiagovindima.com):

### No Vercel:
1. Vá em Settings → Domains
2. Adicione seu domínio
3. Configure os DNS conforme instruído

### No Netlify:
1. Vá em Domain settings
2. Adicione custom domain
3. Configure os DNS conforme instruído

---

## ✅ Verificação

Após o deploy, acesse o link fornecido e você deverá ver:
- Logo da Tiago Vindima
- Menu hamburger funcional
- Carrossel de imagens de propriedades
- Links de navegação no rodapé

---

## 🆘 Suporte

Se encontrar problemas:
1. Verifique os logs de build no Vercel/Netlify
2. Certifique-se de que todas as imagens estão na pasta `/public`
3. Execute `npm run build` localmente para testar
