module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],

  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },

  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'prettier/prettier': ['error'],
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
  },
};
