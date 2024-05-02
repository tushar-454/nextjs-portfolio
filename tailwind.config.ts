import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'picton-blue': {
          '50': '#effaff',
          '100': '#def4ff',
          '200': '#b6ecff',
          '300': '#75e0ff',
          '400': '#2cd1ff',
          '500': '#00c0fd',
          '600': '#0097d4',
          '700': '#0078ab',
          '800': '#00658d',
          '900': '#065474',
          '950': '#04354d',
        },
        'picton-pink': {
          '50': '#fef1fc',
          '100': '#fee5fa',
          '200': '#ffcaf7',
          '300': '#ff9fef',
          '400': '#ff63e2',
          '500': '#ff35d0',
          '600': '#e70faa',
          '700': '#d10592',
          '800': '#ac0877',
          '900': '#8f0c65',
          '950': '#58003a',
        },
      },
    },
  },
  plugins: [],
};
export default config;
