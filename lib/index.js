// http://eslint.org/docs/user-guide/configuring
module.exports = {
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential'
  ],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    parser: require.resolve('@typescript-eslint/parser')
  },
  rules: {
    // https://typescript-eslint.io/parser
    'no-undef': 'off',
    'no-unused-vars': 'off',
    // https://github.com/typescript-eslint/typescript-eslint/issues/46
    // '@typescript-eslint/no-unused-vars': 'error',

    // temporary fix for https://github.com/vuejs/vue-cli/issues/1922
    // very strange as somehow this rule gets different behaviors depending
    // on the presence of @typescript-eslint/parser...
    'strict': 'off'
  },
  globals: {
    App: true,
    Page: true,
    Component: true,
    getApp: true,
    getCurrentPages: true,
    requirePlugin: true,
    wx: true,
    my: true,
    swan: true,
    Megalo: true
  }
}
