module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    // process `*.js` files with `babel-jest`
    ".*\\.(js)$": "babel-jest"
  },
  testMatch: [
    '**/tests/**/*.spec.[jt]s?(x)',
    '**/__tests__/*.[jt]s?(x)'
  ]
};
