module.exports = {
  extends: [
    './prettier',
    './base',
    './import',
    './jsdoc',
    './regex',
    './react-a11y',
    './react'
  ].map(
    require.resolve,
  ),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {},
};;
