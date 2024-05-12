import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        xsss: '320px',
        xss: '375px',
        xs: '425px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
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
        'east-bay': {
          '50': '#f4f6fa',
          '100': '#e6e9f3',
          '200': '#d2d8eb',
          '300': '#b3bedd',
          '400': '#8f9dcb',
          '500': '#7480bd',
          '600': '#626aaf',
          '700': '#56599f',
          '800': '#4a4c83',
          '900': '#42446e',
          '950': '#2a2a41',
        },
      },
    },
  },
  plugins: [],
};
export default config;
