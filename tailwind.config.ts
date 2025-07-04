import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx,mdx}',
    './content/**/*.{ts,tsx,mdx}',
    './pages/**/*.{ts,tsx,mdx}',
    './mdx-components.tsx',
  ],
  theme: { extend: {} },
  plugins: [],
};

export default config;
