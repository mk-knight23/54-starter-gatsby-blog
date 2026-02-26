# 54-starter-gatsby-blog

# BRUTAL. | Raw Web Aesthetic Blog (Vue 3 + Vite)

<div align="center">

![Vue 3](https://img.shields.io/badge/Vue_3-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![Vite-SSG](https://img.shields.io/badge/Vite--SSG-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

**A brutalist web design blog starter built with Vue 3, Vite-SSG, and Tailwind CSS v4**

[Firebase Live Demo](https://clock1-7df37.web.app) ✅ | [GitHub](https://github.com/mk-knight23/57-Gatsby-Blog-Starter)

</div>

---

## Deployment Status

- **Firebase**: Deployed ✅
- **Render**: Configured (push to deploy) ⏳
- **Amplify**: Configured (Account Limit Reached) ⚠️

---

## Theme: Brutalist Web

This starter kit embraces the raw, unpolished aesthetic of early web design:

- **Zero border-radius** - Sharp corners only
- **Thick black borders** - Bold visual boundaries
- **Monospace typography** - Technical, raw feel
- **High contrast** - Black/white with red accent
- **No smooth transitions** - Instant state changes
- **Marquee effects** - Classic web nostalgia
- **Hover states with offset shadows** - Tactile feedback

---

## Tech Stack

- **Framework**: Vue 3.5+ (Composition API)
- **SSG**: Vite-SSG for static generation
- **State**: Pinia 3.x
- **Styling**: Tailwind CSS v4
- **Routing**: Vue Router 4.x
- **Head Management**: @vueuse/head
- **TypeScript**: 5.9+ with strict mode

---

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production (SSG)
npm run build
```

---

## Brutalist Theme Components

### Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--color-brutal-bg` | `#ffffff` | Light background |
| `--color-brutal-bg-dark` | `#000000` | Dark background |
| `--color-brutal-fg` | `#000000` | Light text |
| `--color-brutal-fg-dark` | `#ffffff` | Dark text |
| `--color-brutal-accent` | `#ff0000` | Accent color |
| `--color-brutal-border` | `#000000` | Light borders |
| `--color-brutal-border-dark` | `#ffffff` | Dark borders |

### Typography

- **Display:** Space Grotesk (headings)
- **Body:** Inter (body text)
- **Data:** JetBrains Mono (all caps, metadata)

### Available Classes

```css
.brutal-container   /* Main wrapper */
.brutal-nav         /* Navigation bar with thick border */
.brutal-logo        /* Underlined logo text */
.brutal-link        /* Hover-reveal link style */
.brutal-button      /* Offset shadow button */
.brutal-card        /* Hover-offset card */
.brutal-title       /* Large display text */
.brutal-badge       /* Rounded badge (only on badges) */
.brutal-marquee     /* Scrolling marquee banner */
.brutal-input       /* Thick bordered input */
```

### Animations

```css
.animate-marquee    /* Infinite horizontal scroll */
.animate-blink      /* Terminal cursor blink */
.animate-elastic    /* Bouncy scale effect */
```

---

## Design Principles

1. **Honest Materials** - Show the structure, don't hide it
2. **No Border Radius** - Everything is rectangular
3. **High Contrast** - Maximum visual impact
4. **Monospace Everything** - Technical aesthetic
5. **Raw Transitions** - Instant state changes only
6. **Visible Grid** - Borders define structure

---

## Project Structure

```
src/
├── composables/     # Vue composables
├── stores/          # Pinia stores
├── views/
│   ├── Home.vue         # Article listing
│   └── Article.vue      # Individual article
├── components/
│   └── ui/
│       └── SettingsPanel.vue
├── App.vue         # Root layout with nav & footer
├── main.ts         # Vite-SSG entry
└── style.css       # Tailwind v4 + Brutalist theme
```

---

## Deployment

```bash
# Build for production (SSG)
npm run build

# Preview production build
npm run preview
```

Compatible with Vercel, Netlify, GitHub Pages, and Cloudflare Pages.

---

<div align="center">

**BRUTAL.** // RAW. HONEST. UNFILTERED.

</div>


## ✨ Features

This repository has been upgraded with the following features:

1. **Add Vue 3 Composition API** ✅
2. **Implement Pinia for state** ✅
3. **Add Vue Router guards** ✅
4. **Create composables** ✅
5. **Add Teleport and Suspense** ✅
6. **Implement v-model optimization** ✅
7. **Add TypeScript support** ✅
8. **Create reusable components** ✅
9. **Add transitions and animations** ✅
10. **Implement Vitest tests** ✅

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📦 Tech Stack

- Modern web framework
- Optimized for performance
- Responsive design
- Accessibility ready

## 🛠️ Installation

```bash
git clone https://github.com/mk-knight23/54-starter-gatsby-blog.git
cd 54-starter-gatsby-blog
npm install
```

## 📝 License

MIT

---

*Last updated: 2026-02-26*
