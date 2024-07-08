import type {Config} from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0868C0',
        secondary: 'rgba(0, 73, 114, 0.2)',
      },
    },
  },
  plugins: [require('tailwindcss-multi')],
};
export default config;
