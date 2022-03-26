const { resolve } = require('path');

module.exports = {
  // https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy
  // This option interrupts the configuration hierarchy at this file
  // Remove this if you have an higher level ESLint config file (it usually happens into a monorepos)
  root: true,

  parser: "",

  env: {
    browser: true
  },

  // Rules order is important, please avoid shuffling them
  extends: [
    // Base ESLint recommended rules
    'eslint:recommended',
    'plugin:vue/vue3-recommended'
  ],

  globals: {
    ga: 'readonly', // Google Analytics
    cordova: 'readonly',
    __statics: 'readonly',
    process: 'readonly',
    Capacitor: 'readonly',
    chrome: 'readonly',
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly"
  },

  parserOptions: {
    project: resolve(__dirname, './tsconfig.json'),
    tsconfigRootDir: __dirname,
    extraFileExtensions: ['.vue']
    // createDefaultProgram: true
  },

  overrides: [
    {
      files: ['*.js'],
      env: {
        node: true,
        es6: true
      }
    },
    {
      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.tsx', '*.vue'],
      env: {
        browser: true,
        node: true
      },
      rules: {
        'no-console':0,
        'no-undef': 0,
        // eslint will check, typescript-eslint may cause error because no-undef
        '@typescript-eslint/no-unnecessary-type-assertion': 0,
        'import/no-unresolved': 'off',
        'import/named': 'off',
        'import/order': ['error', {'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object']}]
        // 'import/order': ['error', {'groups': ['index', 'sibling', 'parent', 'internal', 'external', 'builtin', 'object', 'type']}]
      }
    }
  ]
}
