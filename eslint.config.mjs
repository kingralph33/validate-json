import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.strictTypeChecked,
  eslintConfigPrettier,
  {
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        tsconfigRootDir: import.meta.dirname,
        project: true,
      },
    },
  },
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '*.config.*',
      '**/tests-examples/**',
    ],
  },
];
