module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'vue-global-api',
    'plugin:prettier/recommended',
    'prettier'
  ],
  rules: {
    'no-unused-vars': 'off'
    // '@typescript-eslint/no-unused-vars': ['error']
  }
}
