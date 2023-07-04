/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import type { UserConfig } from 'vitest';
import { externalizeDeps } from 'vite-plugin-externalize-deps';

import pkg from './package.json';

const testConfig = {
  globals: true,
  environment: 'jsdom',
  include: ['./src/**/**.test.{ts,tsx}'],
  setupFiles: ['./src/setupTest.ts'],
} as UserConfig;

export default defineConfig({
  plugins: [
    react({ babel: { plugins: [['babel-plugin-styled-components', { pure: true }]] } }),
    externalizeDeps(),
    // @ts-ignore
    dts({ exclude: ['src/**/*.test.(ts|tsx)', 'src/**/*.story.tsx', 'src/setupTest.ts'] }),
  ],
  build: {
    minify: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: pkg.name,
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [
        ...Object.keys(pkg.peerDependencies),
        ...Object.keys(pkg.dependencies),
      ],
      plugins: [
        {
          name: 'postbuild-shrink-package-json',
          closeBundle: () => {
            // eslint-disable-next-line no-console
            if (!process.env.CI) return console.log('skip modify package.json');

            const publishPkg = JSON.parse(JSON.stringify(pkg));
            delete publishPkg.devDependencies;
            delete publishPkg.resolutions;
            delete publishPkg.scripts;

            writeFileSync(resolve(__dirname, './package.json'), JSON.stringify(publishPkg, null, 2));
          },
        },
      ],
    },
  },
  // これがdev環境に入った場合、babel/runtimeのエラーが発生してしまうので、test環境のみ有効にする
  // @ts-ignore
  test: process.env.NODE_ENV === 'test' ? testConfig : undefined,
});
