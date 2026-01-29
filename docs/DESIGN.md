# Design System | BRUTAL. Theme

## Theme Identity

**Theme Name:** Brutalist Web
**Primary Color:** Black (`#000000`)
**Accent Color:** Red (`#ff0000`)

## Design Principles

1. **Honest Materials** - Show the structure, don't hide it
2. **No Border Radius** - Everything is rectangular
3. **High Contrast** - Maximum visual impact
4. **Monospace Everything** - Technical aesthetic
5. **Raw Transitions** - Instant state changes only
6. **Visible Grid** - Borders define structure

## Color System

### Primary Palette

```css
--color-brutal-bg: #ffffff;
--color-brutal-bg-dark: #000000;
--color-brutal-fg: #000000;
--color-brutal-fg-dark: #ffffff;
--color-brutal-accent: #ff0000;
```

### Borders

```css
--color-brutal-border: #000000;
--color-brutal-border-dark: #ffffff;
```

## Typography

- **Space Grotesk** - Headlines, display text
- **Inter** - Body copy
- **JetBrains Mono** - All caps, metadata, badges

## Component Patterns

### Brutalist Button

```html
<button class="brutal-button">
  ACTION <ArrowRight :size="16" />
</button>
```

**CSS:**
- 2px solid border
- No border-radius
- Offset shadow on hover
- Instant color inversion

### Brutalist Card

```html
<div class="brutal-card">
  <span class="brutal-badge">CATEGORY</span>
  <h3 class="brutal-title">Title</h3>
</div>
```

**CSS:**
- 4px solid border
- No border-radius
- 8px offset shadow on hover

### Brutalist Badge

```html
<span class="brutal-badge bg-brutal-accent">TAG</span>
```

**CSS:**
- Only element allowed to have border-radius
- High contrast background

### Brutalist Marquee

```html
<div class="brutal-marquee">
  <div class="brutal-marquee-content">
    RAW AESTHETIC /// NO BORDER RADIUS ///
  </div>
</div>
```

**CSS:**
- Infinite horizontal scroll animation
- Thick borders top and bottom

## Animations

| Animation | Duration | Usage |
|-----------|----------|-------|
| marquee | 20s linear infinite | Banner text |
| blink | 1s step-end | Cursor indicator |
| elastic | 0.5s ease-out | Button hover |

## Dark Mode

Dark mode inverts the color scheme:
- Background: Black
- Text: White
- Borders: White
- Accent: Red (unchanged)

## Accessibility

- High contrast ratios (AAA)
- Visible focus states
- Keyboard navigable
- Semantic HTML structure
