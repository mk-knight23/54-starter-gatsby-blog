# Architecture | BRUTAL. Vue Blog

## Overview

BRUTAL. is a Vue 3 + Vite-SSG static site generator blog starter with a brutalist web aesthetic. It provides a production-ready foundation for minimalist, raw-design blogs and publications.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Vue 3.5+ (Composition API) |
| SSG | Vite-SSG |
| Language | TypeScript 5.9 |
| Styling | Tailwind CSS v4 |
| State | Pinia 3.x |
| Routing | Vue Router 4.x |
| Head | @vueuse/head |

## Directory Structure

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
├── App.vue         # Root layout
├── main.ts         # Vite-SSG entry
├── router.ts       # Router configuration
└── style.css       # Tailwind v4 + Brutalist theme
```

## State Management

### Theme Store

Manual dark/light mode toggle with localStorage persistence:

```typescript
const isDarkMode = ref(true)

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  applyTheme()
  localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light')
}
```

## Tailwind v4 Configuration

No `tailwind.config.js` needed. Theme defined in CSS:

```css
@theme {
  --color-brutal-bg: #ffffff;
  --color-brutal-fg: #000000;
  --color-brutal-accent: #ff0000;
  --font-mono: 'JetBrains Mono', monospace;
  --font-display: 'Space Grotesk', sans-serif;
}
```

## Build Output

```
dist/
├── index.html           # Pre-rendered HTML
├── article/
│   ├── manifesto/index.html
│   └── raw-html/index.html
└── assets/
    ├── index-[hash].js
    └── index-[hash].css
```

## Development

```bash
# Start dev server
npm run dev

# Type checking
npm run type-check

# Build for production
npm run build

# Preview production build
npm run preview
```

## Performance

- **Vite-SSG:** Pre-rendered HTML for instant loads
- **Tailwind v4:** Zero-runtime CSS
- **No external fonts:** Uses system Inter fallback
- **Minimal JS:** Vue hydration only

## Deployment

Pre-configured for:
- Vercel (zero config)
- Netlify (zero config)
- GitHub Pages
- Cloudflare Pages

```bash
npm run build
# Deploy dist/ folder
```

## Design Philosophy

This starter deliberately avoids:
- Border-radius (all sharp corners)
- Smooth transitions (instant state changes)
- Gradient backgrounds (solid colors only)
- Shadows (except offset block shadows)
- Rounded images (all rectangular)

The result is a raw, honest aesthetic that prioritizes content over decoration.
