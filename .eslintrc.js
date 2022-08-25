module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react/recommended', // React rules
    'plugin:react-hooks/recommended', // React hooks rules
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'simple-import-sort'],
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
};
