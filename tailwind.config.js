/** @type {import('tailwindcss').Config} */


/** Merge into your existing config if you already have one. */
module.exports = {
  content: ['./index.html', './js/**/*.{js,ts}'],
  theme: {
    extend: {
      colors: {
          paper: 'var(--paper)', paperalt: 'var(--paper-alt)', ink: 'var(--ink)',
          muted: 'var(--muted)', line: 'var(--line)', gold: 'var(--gold)',
          goldtext: 'var(--gold-text)', char: 'var(--char)', chardeep: 'var(--char-deep)',
          onchar: 'var(--on-char)', oncharmuted: 'var(--on-char-muted)', goldonchar: 'var(--gold-on-char)',
        },
        fontFamily: {
          serif: ['"Cormorant Garamond"', 'Iowan Old Style', 'Palatino Linotype', 'Georgia', 'serif'],
          sans: ['Manrope', '"Segoe UI"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        },
        boxShadow: {
          card: '0 1px 2px rgba(43,45,49,0.06), 0 14px 32px -14px rgba(43,45,49,0.28)',
          lift: '0 2px 4px rgba(43,45,49,0.08), 0 28px 48px -18px rgba(43,45,49,0.38)',
          dark: '0 1px 2px rgba(0,0,0,0.3), 0 20px 40px -16px rgba(0,0,0,0.55)',
          gold: '0 14px 30px -12px rgba(205,176,122,0.5)',
        },
        screens: {
      'max-52': { max: '52rem' },
      'max-40': { max: '40rem' },
    },
    },
  },
  plugins: [],
}
