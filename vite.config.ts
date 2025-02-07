/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
import { writeFileSync, readFileSync } from 'fs';
import { resolve } from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import type { UserConfig } from 'vitest/node';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import { externalizeDeps } from 'vite-plugin-externalize-deps';
import dts from 'vite-plugin-dts';

import pkg from './package.json';

const testConfig = {
  globals: true,
  environment: 'happy-dom',
  include: ['./src/**/**.test.{ts,tsx}'],
  setupFiles: ['./setupTest.ts'],
} as UserConfig;

export default defineConfig({
  plugins: [
    react(),
    viteTsconfigPaths(),
    externalizeDeps(),
    dts({ exclude: ['src/**/*.test.(ts|tsx)', 'src/**/*.story.tsx', 'src/setupTest.ts'] }),
  ],
  build: {
    target: 'esnext',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: pkg.name,
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      // 全ての外部ライブラリは外す
      external: (id) => !id.startsWith('.') && !id.startsWith('/'),
      plugins: [
        {
          name: 'postbuild-shrink-package-json',
          closeBundle: () => {
            const css = readFileSync(resolve(__dirname, './src/lib.css'), 'utf8');
            writeFileSync(resolve(__dirname, './dist/lib.css'), css);

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
  // @ts-expect-error
  test: process.env.NODE_ENV === 'test' ? testConfig : undefined,
});
