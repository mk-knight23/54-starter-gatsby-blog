# Architectural - Modern SSG Blog

<div align="center">

![Vue 3](https://img.shields.io/badge/Vue_3-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite-SSG](https://img.shields.io/badge/Vite--SSG-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

**A high-performance architectural blog theme built with Vue 3 and Vite-SSG**

[Live Demo](https://architectural.vercel.app) | [GitHub](https://github.com/mk-knight23/57-Gatsby-Blog-Starter)

</div>

---

## Overview

Architectural is a production-grade blog theme featuring a distinctive editorial design with neo-brutalist aesthetics. Built for technical writers who value typography and white space.

### Problem Statement

Modern blog themes often prioritize engagement metrics over reading experience, cluttering content with popups, sticky headers, and distracting elements.

### Solution

Architectural provides:
- **Distraction-Free Reading**: Minimal UI, maximum content focus
- **Theme System**: Dark/Light mode with persistence
- **SSG Performance**: Pre-rendered pages with Vite-SSG
- **Zero External Icons**: Inline SVGs eliminate runtime dependencies

---

## Features Comparison

| Feature | Generic Blogs | Architectural |
| :--- | :--- | :--- |
| **Design** | Generic/Corporate | **Neo-Editorial** |
| **Theme** | Fixed | **Dark + Light with persistence** |
| **Architecture** | SPA | **Vite-SSG Static Generation** |
| **Icons** | External library | **Zero-dependency inline SVGs** |
| **Typography** | System fonts | **Space Grotesk + Serif** |
| **Performance** | Hydration heavy | **Zero-JS initial load** |

---

## Tech Stack

- **Framework**: Vue 3.5+ (Script Setup)
- **SSG**: Vite-SSG for static generation
- **Styling**: Tailwind CSS 3.4
- **Head Management**: @vueuse/head
- **TypeScript**: 5.9+ strict mode

---

## Architecture

```
src/
├── App.vue              # Root with theme logic
├── main.ts              # Vite-SSG entry
├── router.ts            # Vue Router config
└── views/
    ├── Home.vue         # Blog listing
    └── Article.vue      # Single post
```

---

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm 10.x or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/mk-knight23/57-Gatsby-Blog-Starter.git
cd 57-Gatsby-Blog-Starter

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production (SSG)
npm run build
```

---

## Theme System

Architectural includes a fully-featured dark/light mode with:

- **System Detection**: Auto-detects OS preference
- **Manual Toggle**: Brutalist toggle button in navbar
- **Persistence**: Preference saved in localStorage
- **Smooth Transitions**: 500ms CSS transitions

---

## Accessibility

The theme includes comprehensive accessibility features:

- **ARIA Labels**: All interactive elements labeled
- **Keyboard Navigation**: Full keyboard support
- **Focus States**: Visible focus indicators
- **Color Contrast**: WCAG AA compliant
- **Semantic HTML**: Proper heading hierarchy

---

## Deployment

Compatible with any static hosting:

- **Vercel**: `npx vercel --prod`
- **Netlify**: Connect repository
- **GitHub Pages**: Deploy `dist/` folder

```bash
# Deploy to Vercel
npx vercel --prod --name architectural

# Preview production build
npm run preview
```

---

## License

MIT License - See [LICENSE](LICENSE) for details.

---

<div align="center">

**Built with Vue 3 + Vite-SSG + Tailwind CSS**

</div>
