module.exports = {
  root: true,
  plugins: ['prettier', 'import', 'react-hooks'],
  extends: ['plugin:react/recommended', 'prettier/react'],
  globals: {
    cy: true,
    Cypress: true,
    React: true
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect' // React version. "detect" automatically picks the version you have installed.
    }
  },
  rules: {
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'comma-dangle': ['error', 'never'],
    curly: 'error',
    'eol-last': 'error',
    'func-names': 'off',
    'id-length': [
      'error',
      {
        min: 2,
        max: 50,
        properties: 'never',
        exceptions: ['e', 'i', 'n', 't', 'x', 'y', 'z', '_', '$']
      }
    ],
    'no-alert': 'error',
    'no-console': 'error',
    'no-const-assign': 'error',
    'no-else-return': 'error',
    'no-empty': 'off',
    'no-shadow': 'error',
    'no-undef': 'error',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_.*' }],
    'no-use-before-define': 'error',
    'no-useless-constructor': 'error',
    'object-curly-newline': 'off',
    'object-shorthand': 'off',
    'prefer-const': 'error',
    'prefer-destructuring': ['error', { object: true, array: false }],
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
        avoidEscape: true
      }
    ],
    semi: ['error', 'never'],
    'spaced-comment': 'error',
    strict: ['error', 'never'],
    'prettier/prettier': 'warn',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'warn',
    'react-hooks/exhaustive-deps': 'warn'
  }
}
