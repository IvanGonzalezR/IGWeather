/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'cloudy': './public/alex-machado-80sv993lUKI-unsplash.jpg'
      },
      backgroundColor: {
        'primary-blue': '#053152',
        'secondary-blue': '#366B93',
      },
      textColor: {
        'blue-light': '#90B0C8'
      },
      borderColor: {
        'blue-light': '#90B0C8'
      }
    },
  },
  plugins: [
  ],
}
