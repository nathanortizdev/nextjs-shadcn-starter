import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx,mdx}',
    './src/components/**/*.{ts,tsx,mdx}',
    './src/content/**/*.{ts,tsx,mdx}',
    './src/mdx-components.tsx',
  ],
  theme: {
    container: {
      center: true, // Center the container
      padding: '1rem', // Default horizontal padding (16px)
      // You can also specify breakpoints:
      // padding: {
      //   DEFAULT: '1rem',
      //   sm: '2rem',
      //   lg: '4rem',
      //   xl: '5rem',
      //   '2xl': '6rem',
      // },
    },
    extend: {},
  },
  plugins: [],
};

export default config;
