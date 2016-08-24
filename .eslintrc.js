module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'sourceType': 'module'
  },
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ],
    'comma-spacing': [2, {'before': false, 'after': true}],
    'key-spacing': [2, {'beforeColon': false, 'afterColon': true}],
    'no-console': 0,
    //'no-debugger': 0,
  }
}
