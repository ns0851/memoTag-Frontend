/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        float1: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-25px) translateX(20px)' },
        },
        float2: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(30px) translateX(-25px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
        'marquee': 'marquee 25s linear infinite',
        float1: 'float1 12s ease-in-out infinite',
        float2: 'float2 16s ease-in-out infinite',
        
      },
    },
  },
  plugins: [],
}
