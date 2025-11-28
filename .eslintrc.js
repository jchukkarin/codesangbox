module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
   extends: [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  plugins: ['vue'],

  env: {
    browser: true,
  },
  // ปิด ESLint ทั้งหมด
  rules: {
    'quotes': 'off',
    'comma-dangle': 'off',
    'arrow-parens': 'off',
    'spaced-comment': 'off',
    'no-trailing-spaces': 'off',
    'space-before-function-paren': 'off',
    'prefer-template': 'off',
    'no-alert': 'off'
  }
}
