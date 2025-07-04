import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const withMDX = createMDX();

const nextConfig: NextConfig = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
});

export default nextConfig;
