/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        arch: {
          bg: '#ffffff',
          dark: '#0a0a0a',
          primary: '#111111',
          accent: '#2563eb',
          muted: '#888888',
          border: '#e5e7eb'
        }
      },
      fontFamily: {
        'display': ['"Space Grotesk"', 'sans-serif'],
        'serif': ['"Playfair Display"', 'serif'],
        'mono': ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
