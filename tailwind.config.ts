import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "xl": "1100px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'electos-black': {
          '50': '#f5f6f5',
          '100': '#e6e7e6',
          '200': '#d0d1d0',
          '300': '#b0b1af',
          '400': '#868a86',
          '500': '#6b6f6b',
          '600': '#5d5e5c',
          '700': '#4f504e',
          '800': '#444644',
          '900': '#3c3d3c',
          '950': '#2a2b2a',
        },
        'electos-white': '#fdfffc',
        'electos-green': {
          '50': '#f2fde8',
          '100': '#e2f9ce',
          '200': '#c7f3a3',
          '300': '#a3e96d',
          '400': '#80db40',
          '500': '#6bd425',
          '600': '#489917',
          '700': '#397516',
          '800': '#305d17',
          '900': '#2b4f18',
          '950': '#132b08',
        },      
        'electos-olive': {
          '50': '#f8f7ed',
          '100': '#f0efd7',
          '200': '#e2e2b4',
          '300': '#cdce88',
          '400': '#b7b962',
          '500': '#9a9e44',
          '600': '#6f732f',
          '700': '#5c602b',
          '800': '#4a4e26',
          '900': '#404324',
          '950': '#21240f',
        },
      },
    },
  },
  plugins: [],
};
export default config;
