/// <reference types="vitest" />
import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [react(), dts({ exclude: ['src/**/*.test.(ts|tsx)', 'src/**/*.story.tsx', 'src/setupTest.ts'] })],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'visits-style',
      formats: ['es', 'cjs'],
      fileName: 'visits-style',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'styled-components'],
      // output: {
      //   preserveModules: true,
      // },
    },
    target: 'esnext',
    minify: false,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['./src/**/**.test.{ts,tsx}'],
    setupFiles: ['./src/setupTest.ts'],
  },
});
