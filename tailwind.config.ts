import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        // 东方美学配色：暖白、浅米色、墨绿
        warm: {
          50: '#fefdfb',
          100: '#faf8f3',
          200: '#f5f1e8',
          300: '#ede5d4',
          400: '#e0d4bc',
          500: '#d4c4a8',
        },
        ink: {
          50: '#f0f4f0',
          100: '#d9e5d9',
          200: '#b8d0b8',
          300: '#8fb38f',
          400: '#5d8a5d',
          500: '#2d5a2d',
          600: '#1e3d1e',
          700: '#152915',
          800: '#0f1f0f',
          900: '#0a150a',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'var(--font-noto-sans-jp)', 'var(--font-noto-sans-sc)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-noto-serif-jp)', 'var(--font-noto-serif-sc)', 'Georgia', 'serif'],
        display: ['var(--font-noto-serif-jp)', 'var(--font-noto-serif-sc)', 'Georgia', 'serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 1s ease-in',
        'fade-in-delay': 'fadeIn 1.5s ease-in 0.3s both',
        'slide-up': 'slideUp 1s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;

