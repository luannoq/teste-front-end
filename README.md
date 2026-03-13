# 🛒 Econverse — Teste Front-End Jr

> Resolução do teste técnico para a vaga de Desenvolvedor Front-End Jr na Econverse.

---

## 📋 Sobre o projeto

Página de vitrine de produtos desenvolvida conforme layout fornecido no Figma, consumindo dados de uma API JSON externa, com interação de modal ao clicar nos produtos.

---

## 🚀 Stack

| Tecnologia | Uso |
|------------|-----|
| React 18 | Biblioteca de UI |
| TypeScript | Tipagem estática |
| SASS | Pré-processador CSS |
| Vite | Bundler e dev server |

---

## ✅ Requisitos atendidos

- [x] Desenvolvido em **React + TypeScript**
- [x] Vitrine de produtos consumindo **JSON externo**
- [x] **Modal** ao clicar no produto com informações do JSON
- [x] Pré-processador **SASS**
- [x] Layout **pixel a pixel** conforme Figma
- [x] **Sem** bibliotecas UI (Bootstrap, Foundation, etc.)

## ⭐ Pontos extras

- [x] HTML **semântico** (`header`, `nav`, `section`, `article`, `footer`)
- [x] Boas práticas de **SEO** (meta tags, alt em imagens, hierarquia de headings)

---

## ✨ Funcionalidades

- **Header** com topbar, logo, barra de busca, ícones e navegação
- **Banner** principal com imagem de fundo
- **Categorias** com ícones SVG
- **Vitrine de produtos** com carrossel e navegação por setas
- **Abas de categoria** (Celular, Acessórios, Tablets, Notebooks, TVs)
- **Modal** ao clicar no produto com seletor de quantidade
- **Accordion** "Ver todos" nas seções secundárias
- **Banners de parceiros** em grid
- **Carrossel de marcas**
- **Newsletter** com validação de formulário
- **Footer** com links institucionais e redes sociais

---

## 🗂️ Estrutura do projeto
```
src/
├── components/
│   ├── Header/           # Topbar, logo, search bar, nav
│   ├── Banner/           # Banner principal
│   ├── CategoryIcons/    # Grid de categorias com ícones SVG
│   ├── ProductSection/   # Seção de produtos (tabs + carrossel)
│   ├── ProductCard/      # Card individual de produto
│   ├── ProductModal/     # Modal com detalhes e quantidade
│   ├── PartnerBanner/    # Banners de parceiros
│   ├── BrandCarousel/    # Carrossel de marcas
│   ├── Newsletter/       # Formulário de inscrição
│   └── Footer/           # Rodapé
├── data/
│   └── products.json     # Dados dos produtos
├── hooks/
│   └── usePrice.ts       # Formatação de preços
├── styles/
│   ├── _variables.scss   # Cores, fontes e mixins
│   └── global.scss       # Reset e estilos globais
├── types/
│   └── index.ts          # Interfaces TypeScript
└── App.tsx
```

---

## ⚙️ Como rodar

### Pré-requisitos

- Node.js 18+
- npm

### Instalação
```bash
# Clone o repositório
git clone https://github.com/seu-usuario/teste-front-end.git

# Acesse a pasta
cd teste-front-end

# Instale as dependências
npm install
```

### Rodar em desenvolvimento
```bash
npm run dev
```

Acesse em: **http://localhost:5173**

### Build de produção
```bash
npm run build
```

### Preview do build
```bash
npm run preview
```

---

## 📦 Dados dos produtos

Consumidos do endpoint externo da Econverse:
```
https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json
```

---

## 🎨 Design System

| Variável | Hex | Uso |
|----------|-----|-----|
| `$roxo-escuro` | `#271C47` | Newsletter, destaques |
| `$azul` | `#3019B2` | Botões, títulos ativos |
| `$azul-links` | `#3442B5` | Links, frete grátis |
| `$amarelo` | `#F7CA11` | Logo, botões destaque |
| `$cinza-texto` | `#676767` | Textos secundários |
| `$preto` | `#222222` | Textos principais |

**Tipografia:** [Poppins](https://fonts.google.com/specimen/Poppins) — pesos 400, 500, 600, 700

---

## 👤 Autor

**Luann**  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/luannnoqueli/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/luannoq).

---

> Desenvolvido com 💙 para o processo seletivo da Econverse.
