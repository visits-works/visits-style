import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import reactLint from 'eslint-plugin-react';
import testingLint from 'eslint-plugin-testing-library';
import importPlugin from 'eslint-plugin-import';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default defineConfig(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  reactLint.configs.flat.recommended,
  reactLint.configs.flat['jsx-runtime'],
  jsxA11y.flatConfigs.recommended,
  { files: ['**/*.test.{ts,tsx}'], ...testingLint.configs['flat/react'] },
  {
    files: ['**/*.story.{ts,tsx}'],
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
      'import/no-extraneous-dependencies': 'off',
      'react-hooks/rules-of-hooks': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    }
  },
  {
    files: ['src/**/*.{ts,tsx}'],
    ignores: ['**/*.story.{ts,tsx}', '**/*.test.{ts,tsx}'],
    extends: [importPlugin.flatConfigs.recommended, importPlugin.flatConfigs.typescript],
    plugins: { 'react-hooks': reactHooks },
    settings: {
      react: { version: 'detect' },
      'import/resolver': {
        node: {
          paths: ['src'],
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
      'max-len': ['error', {
        code: 110, tabWidth: 2, ignoreComments: true, ignoreStrings: true, ignoreTemplateLiterals: true,
      }],
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'off',
      'no-param-reassign': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'import/export': 'off',
    },
  },
);