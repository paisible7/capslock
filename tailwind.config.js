/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        capslock: {
          navy: '#1e3a8a',
          gray: '#6B7280',
          light: '#F9FAFB',
        }
      },
      keyframes: {
        'fade-in':
          {'0%': { opacity: '0', transform: 'translateY(20px)'},
          '100%': { opacity: '1', transform: 'translateY(0)'},
        },
        'scale-in': {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        'slide-up': {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'scale-in': 'scale-in 0.6s ease-out forwards',
        'slide-up': 'slide-up 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}

