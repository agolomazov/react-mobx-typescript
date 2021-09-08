module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-prettier/recommended',
  ],
  plugins: ['stylelint-order', 'stylelint-scss'],
  rules: {
    // Дополнительные правила
  },
  ignoreFiles: [
    '**/*.js',
    './styles-package/**/*.*',
    './node_modules',
    './dist'
  ],
};
