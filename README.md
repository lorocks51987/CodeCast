# 🎙️ CodeCast

> **Histórias de quem faz a tecnologia acontecer** — um podcast da UNIMAR

Site oficial do CodeCast, podcast apresentado por **Luiz** e **André** da Universidade de Marília (UNIMAR), trazendo convidados da tecnologia para compartilhar experiências, aprendizados e trajetórias.

## 🚀 Como rodar localmente

### Requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Passos

```bash
# 1) Clone o repositório
git clone https://github.com/seu-usuario/codecast.git

# 2) Acesse a pasta do projeto
cd codecast

# 3) Instale as dependências
npm install

# 4) Rode o servidor de desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:8080`

### Variáveis de ambiente
Crie um arquivo `.env` na raiz do projeto com:

```
VITE_YOUTUBE_API_KEY=coloque_sua_chave_aqui
VITE_YOUTUBE_CHANNEL_ID=seu_channel_id
```

Não faça commit do `.env`. Um arquivo `env.example` pode ser fornecido localmente para referência.

## 🔎 SEO

O projeto já inclui otimizações no `index.html`:

- Meta `description`, `author` e `robots`
- Link `canonical` e `hreflang` (`pt-BR`)
- Open Graph: `og:title`, `og:description`, `og:type`, `og:url`, `og:site_name`, `og:image`
- Twitter Cards: `twitter:card`, `twitter:site`, `twitter:title`, `twitter:description`, `twitter:image`
- JSON-LD (`application/ld+json`): tipos `Organization` e `WebSite`
- `robots.txt` e `sitemap.xml` em `public/` apontando para `https://code-cast-two.vercel.app/`

Recomendado:

- Gerar uma imagem social (`public/og-image.jpg`) e apontar nas metas `og:image`/`twitter:image`
- Ajustar domínios finais (produção) no `canonical`, `og:url`, JSON-LD e `robots.txt`/`sitemap.xml`
- Monitorar cobertura no Google Search Console

## 🛠️ Tecnologias

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + Radix UI
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **State Management**: React Query

## 📱 Funcionalidades

- ✅ Design responsivo com tema cyberpunk/terminal
- ✅ Seção de apresentadores com GitHub-style cards
- ✅ Episódios com integração ao YouTube
- ✅ Convidados em destaque com carrossel
- ✅ Links para redes sociais (Instagram, YouTube, TikTok)
- ✅ Navegação suave entre seções
- ✅ Animações e efeitos neon

## 🎯 Seções do Site

1. **Hero** - Apresentação principal com efeito de digitação
2. **Apresentadores** - Cards dos hosts Luiz e André
3. **Sobre** - Informações sobre o podcast
4. **Episódios** - Lista de todos os episódios
5. **Convidados** - Destaque dos convidados especiais
6. **Contato** - Links para redes sociais

## 📦 Scripts Disponíveis

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build para produção
npm run preview      # Preview do build
npm run lint         # Verificar código com ESLint
```

## 🌐 Deploy

O projeto está configurado para deploy em qualquer plataforma que suporte aplicações React/Vite:

- Vercel
- Netlify
- GitHub Pages
- Surge.sh

## 📞 Contato

- **Instagram**: [@codecast_unimar](https://www.instagram.com/codecast_unimar/)
- **YouTube**: [@codecast_unimar](https://www.youtube.com/@codecast_unimar)
- **TikTok**: [@codecast_unimar](https://www.tiktok.com/@codecast_unimar)

## 📄 Licença

Este projeto é propriedade da UNIMAR (Universidade de Marília) e do CodeCast.
