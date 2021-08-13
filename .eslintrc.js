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
    plugins: ['@typescript-eslint', 'eslint-plugin-import-helpers'],
    settings: {
        'import/resolver': {
          typescript: {},
          'babel-plugin-root-import': {
            rootPathPrefix: '~',
            rootPathSuffix: 'src',
          },
        },
        react: {
          version: 'detect',
        },
      },
    rules: {
      'prettier/prettier': ['error'],
      "camelcase": "off",
      "no-undef": "off",
      "no-use-before-define": "error",
      'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
    },
  };