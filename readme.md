# Portal Magra Quiz 🌟

Quiz interativo para descobrir o arquétipo de brasileiras nos EUA, com design alinhado à identidade visual Portal Magra.

## 🎨 Cores da Marca

- **Primary:** #FF6B8D (Rosa coral do logo)
- **Light:** #FF8FA3 (Variação mais clara) 
- **Background:** Gradient #fff5f7 → #ffe8ed
- **Hover:** #fff0f3

## 🚀 Como usar

1. **Clone o repositório:**
   ```bash
   git clone [URL_DO_SEU_REPO]
   cd portal-magra-quiz
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure o número do WhatsApp:**
   - Abra `app/quiz/page.js`
   - Na linha 5, substitua o número:
   ```javascript
   const WHATSAPP_NUMBER = 'SEU_NUMERO_AQUI';
   ```

4. **Execute em desenvolvimento:**
   ```bash
   npm run dev
   ```

5. **Acesse:** http://localhost:3000/quiz

## 📱 Deploy Rápido

### Vercel (Recomendado)
```bash
# Conectar GitHub e deploy automático
vercel --prod
```

### Netlify
```bash
# Build command: npm run build
# Publish directory: .next
```

## 🎯 Funcionalidades

- ✅ **7 perguntas emocionais** direcionadas para brasileiras nos EUA
- ✅ **5 arquétipos personalizados** (Recém-Chegada, Acelerada, Resistente, Invisível, Nostálgica)
- ✅ **Direcionamento automático** para WhatsApp com mensagem personalizada
- ✅ **Compartilhamento viral** com texto pronto para Stories/WhatsApp
- ✅ **Design responsivo** com cores Portal Magra
- ✅ **Tracking de eventos** (Meta Pixel + GA4 ready)
- ✅ **UTM capture** automático para atribuição

## 📊 Para Anúncios

**URLs otimizadas:**
- Quiz direto: `seusite.com/quiz`
- Com tracking: `seusite.com/quiz?utm_source=meta&ref=anuncio1`

**Copy sugerido:**
```
🎯 "Sou A Acelerada 🚀 - e você?"
Descubra seu arquétipo de brasileira nos EUA em 1 minuto
+ Guia personalizado grátis no WhatsApp
Link: seusite.com/quiz
```

## 📁 Estrutura

```
portal-magra-quiz/
├── app/
│   ├── quiz/
│   │   └── page.js          # Quiz principal (cores Portal Magra)
│   ├── layout.js            # Layout com SEO
│   ├── page.js              # Homepage 
│   └── globals.css          # CSS com variáveis Portal Magra
├── package.json
├── tailwind.config.js
└── README.md
```

## 🛠 Configurações Principais

**No arquivo `app/quiz/page.js`:**
- **WHATSAPP_NUMBER:** Seu número do WhatsApp
- **RESULT_DELAY_MS:** Tempo de loading do resultado (1200ms)

**Cores personalizadas em CSS:**
```css
:root {
  --portal-magra-primary: #FF6B8D;
  --portal-magra-light: #FF8FA3;
  --portal-magra-bg: #fff5f7;
}
```

## 📈 Estratégia de Conversão

1. **Anúncios** → Quiz viral (CPM baixo)
2. **Quiz** → Arquétipo + direcionamento WhatsApp  
3. **WhatsApp** → Material grátis + oferta $10
4. **Compartilhamento** → Crescimento orgânico

## 📞 Próximos Passos

1. Configure seu número do WhatsApp
2. Faça deploy na Vercel
3. Teste o fluxo completo
4. Configure Meta Pixel (opcional)
5. Rode anúncios direcionando para `/quiz`

## 🎨 Identidade Visual

O quiz usa as cores exatas do logo Portal Magra (#FF6B8D) para manter total consistência com a marca, criando uma experiência coesa desde o anúncio até a conversão final no WhatsApp.