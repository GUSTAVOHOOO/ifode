/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#FFFFFF',
        accent: '#FF2B2B',
        gray700: '#2E2E2E',
        gray400: '#9E9E9E',
        success: '#36D399',
        warning: '#FACC15',
        error: '#DC2626',
      },
      borderRadius: {
        xl: '16px'
      }
    },
  },
  plugins: [],
};
