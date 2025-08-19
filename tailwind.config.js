/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Cores personalizadas Portal Magra
        'portal': {
          50: '#faf5ff',   // roxo muito claro
          100: '#f3e8ff',  // roxo claro
          200: '#e9d5ff',  // roxo claro médio
          300: '#d946ef',  // roxo médio
          400: '#c026d3',  // roxo
          500: '#a21caf',  // roxo escuro
          600: '#86198f',  // roxo mais escuro
          700: '#701a75',  // roxo bem escuro
          800: '#581c87',  // roxo muito escuro
          900: '#3b0764',  // roxo quase preto
        },
        'magra': {
          50: '#fdf2f8',   // rosa muito claro
          100: '#fce7f3',  // rosa claro
          200: '#fbcfe8',  // rosa claro médio
          300: '#f9a8d4',  // rosa médio
          400: '#f472b6',  // rosa
          500: '#ec4899',  // rosa escuro
          600: '#db2777',  // rosa mais escuro
          700: '#be185d',  // rosa bem escuro
          800: '#9d174d',  // rosa muito escuro
          900: '#831843',  // rosa quase preto
        }
      },
      backgroundImage: {
        'portal-gradient': 'linear-gradient(135deg, #faf5ff 0%, #fdf2f8 100%)',
        'button-gradient': 'linear-gradient(135deg, #a21caf 0%, #ec4899 100%)',
        'button-gradient-hover': 'linear-gradient(135deg, #86198f 0%, #db2777 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}