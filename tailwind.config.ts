import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        accent: 'var(--color-accent)',
        'accent-2': 'var(--color-accent-2)',
        secondary: 'var(--color-secondary)',
      },
      fontFamily: {
        mono: ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;