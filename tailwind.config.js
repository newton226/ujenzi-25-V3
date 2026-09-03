/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1F2A44',
        orange: '#D97706',
        olive: '#B8A552',
        cream: '#FAFAF8',
        charcoal: '#1A1A1A',
        softText: '#595959',
        success: '#1E7A4C'
      },
      boxShadow: {
        soft: '0 14px 40px rgba(31, 42, 68, 0.08)',
        card: '0 18px 40px rgba(31,42,68,0.12)'
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem'
      }
    }
  },
  plugins: []
};
