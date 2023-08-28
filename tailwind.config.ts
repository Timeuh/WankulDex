import type {Config} from 'tailwindcss';

const config: Config = {
  content: ['./components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        light: '#FAFAFA',
        'light-blue': '#A4DDED',
        'light-purple': '#FAE6FA',
        'light-silver': '#989898',
        dark: '#1A1A1A',
        'dark-blue': '#191970',
        'dark-purple': '#301934',
        'dark-silver': '#ECECEC',
        bronze: '#E5A770',
        gold: '#FFD231',
        'wankil-purple': '#51337B',
        'wankil-blue': '#1C5E8E',
      },
    },
  },
  plugins: [],
};
export default config;
