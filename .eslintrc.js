module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'prettier/prettier': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    'react-native/no-unused-styles': 'error',
    'react/react-in-jsx-scope': 'off',
    'comma-dangle': 'off'
  }
};
