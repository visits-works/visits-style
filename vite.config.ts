/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwind from '@tailwindcss/vite';
import type { UserConfig } from 'vitest/node';
import viteTsconfigPaths from 'vite-tsconfig-paths';

const testConfig = {
  globals: true,
  environment: 'happy-dom',
  include: ['./src/**/**.test.{ts,tsx}'],
  setupFiles: ['./setupTest.ts'],
} as UserConfig;

export default defineConfig({
  plugins: [react(), tailwind(), viteTsconfigPaths()],
  test: process.env.NODE_ENV === 'test' ? testConfig : undefined,
});
