/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark premium theme inspired by Grid Foods logo
        dark: {
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a4a4a4',
          400: '#818181',
          500: '#666666',
          600: '#515151',
          700: '#434343',
          800: '#383838',
          900: '#1C2526',
          950: '#111111',
        },
        primary: {
          DEFAULT: '#111111',
          light: '#1C2526',
          dark: '#0A0A0A',
        },
        accent: {
          DEFAULT: '#FF6200',
          light: '#FF7D2E',
          dark: '#E05600',
          50: '#FFF4ED',
          100: '#FFE4CC',
          200: '#FFC999',
          300: '#FFAD66',
          400: '#FF8533',
          500: '#FF6200',
          600: '#E05600',
          700: '#B84700',
          800: '#8F3700',
          900: '#662800',
        },
        surface: {
          DEFAULT: '#1A1A1A',
          light: '#222222',
          lighter: '#2A2A2A',
          card: '#1E1E1E',
        },
        green: {
          fresh: '#22c55e',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('/images/hero-bg.jpg')",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(255, 98, 0, 0.2)' },
          '100%': { boxShadow: '0 0 40px rgba(255, 98, 0, 0.4)' },
        },
      },
    },
  },
  plugins: [],
};
