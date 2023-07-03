/// <reference types="vitest" />
import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import type { UserConfig } from 'vitest';

import * as pkg from './package.json';

const testConfig = {
  globals: true,
  environment: 'jsdom',
  include: ['./src/**/**.test.{ts,tsx}'],
  setupFiles: ['./src/setupTest.ts'],
} as UserConfig;

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ['babel-plugin-styled-components', { pure: true }],
        ],
      },
    }),
    dts({ exclude: ['src/**/*.test.(ts|tsx)', 'src/**/*.story.tsx', 'src/setupTest.ts'] }),
  ],
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
  // これがdev環境に入った場合、babel/runtimeのエラーが発生してしまうので、test環境のみ有効にする
  // @ts-ignore
  test: process.env.NODE_ENV === 'test' ? testConfig : undefined,
});
