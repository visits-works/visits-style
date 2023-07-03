/// <reference types="vitest" />
import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

import * as pkg from './package.json';

export default defineConfig({
  plugins: [react(), dts({ exclude: ['src/**/*.test.(ts|tsx)', 'src/**/*.story.tsx', 'src/setupTest.ts'] })],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      name: pkg.name,
      formats: ['es', 'cjs'],
      fileName: (format) => `${pkg.name}.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(pkg.peerDependencies)],
    },
    minify: false,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['./src/**/**.test.{ts,tsx}'],
    setupFiles: ['./src/setupTest.ts'],
  },
});
