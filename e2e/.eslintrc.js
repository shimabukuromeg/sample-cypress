module.exports = {
  plugins: [
    'cypress',
  ],
  env: {
    'cypress/globals': true,
  },
  extends: [
    'plugin:cypress/recommended',
    'airbnb-base',
  ],
  rules: {
    'jest/expect-expect': 'off',
    'jest/valid-expect-in-promise': 'off',
  },
};
