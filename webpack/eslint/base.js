module.exports = {
  rules: {
    "deprecation/deprecation": "warn",
    camelcase: [
      'error',
      {
        ignoreDestructuring: true,
        ignoreImports: true,
      },
    ],
    'max-len': [
      'error',
      {
        code: 80,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreTrailingComments: true,
      },
    ],
    'no-alert': 'error',
    'no-debugger': 'warn',
    'no-extend-native': 'error',
    'no-empty': [
      'error',
      {
        allowEmptyCatch: true,
      },
    ],
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'error',
    'no-dupe-class-members': 'error',
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'max-lines': ['error', 500],
    'max-lines-per-function': [
      'error',
      {
        max: 50,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    'max-nested-callbacks': ['error', 2],
    'max-params': ['error', 3],
    'consistent-return': 'error',
    curly: ['error', 'all'],
    'default-case': ['error'],
    'default-param-last': ['error'],
    'dot-notation': 'error',
    eqeqeq: 'error',
    'grouped-accessor-pairs': 'error',
    'guard-for-in': 'error',
    'max-classes-per-file': ['error', 2],
    'no-constructor-return': 'error',
    'no-empty-function': [
      'error',
      {
        allow: ['generatorFunctions', 'constructors'],
      },
    ],
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-multi-spaces': 'error',
    'no-param-reassign': 'error',
    'no-return-assign': 'error',
    'no-self-assign': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unused-expressions': 'error',
    'no-useless-concat': 'error',
    'no-useless-return': 'error',
    'no-warning-comments': [
      'warn',
      {
        terms: ['todo', 'fixme'],
      },
    ],
    'prefer-promise-reject-errors': 'warn',
    radix: 'error',
    'require-await': 'error',
    'vars-on-top': 'error',
    yoda: 'error',
    'init-declarations': ['error', 'always'],
    'no-shadow': 'error',
    'no-undef-init': 'error',
    'no-use-before-define': 'off',
    'array-bracket-spacing': ['error', 'never'],
    'block-spacing': ['error', 'always'],
    'brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],
    'capitalized-comments': ['error'],
    'eol-last': ['error', 'always'],
    'id-length': [
      'error',
      {
        min: 2,
        exceptions: ['_'],
      },
    ],
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
        mode: 'strict',
      },
    ],
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    'linebreak-style': ['error', 'unix'],
    'lines-between-class-members': ['error', 'always'],
    'max-depth': ['error', 2],
    'multiline-comment-style': ['error', 'starred-block'],
    'newline-per-chained-call': [
      'error',
      {
        ignoreChainWithDepth: 4,
      },
    ],
    'no-array-constructor': 'error',
    'no-bitwise': ['error'],
    'no-inline-comments': 'error',
    'no-lonely-if': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2,
      },
    ],
    'no-nested-ternary': 'error',
    'no-tabs': 'error',
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': [
      'error',
      {
        allowAfterThis: true,
        allowAfterSuper: true,
        enforceInMethodNames: true,
      },
    ],
    'no-unneeded-ternary': [
      'error',
      {
        defaultAssignment: false,
      },
    ],
    'no-whitespace-before-property': 'error',
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': 'error',
    'space-before-function-paren': ['error', 'never'],
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    'no-useless-constructor': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: true,
          object: true,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'no-console': [
      'error',
      {
        allow: ['info'],
      },
    ],
  },
  overrides: [
    {
      files: ['*.tsx', '*.jsx'],
      rules: {
        'max-lines-per-function': [
          'error',
          {
            max: 300,
            skipBlankLines: true,
            skipComments: true,
          },
        ],
        'max-statements': 'off',
        'id-length': [
          'error',
          {
            min: 1,
            exceptions: ['_'],
          },
        ],
      },
    },
    {
      files: ['selectors.ts'],
      rules: {
        'valid-jsdoc': 'off',
      },
    },
  ],
};
