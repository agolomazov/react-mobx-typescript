module.exports = {
  rules: {
    'require-jsdoc': [
      'error',
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: true,
          ArrowFunctionExpression: true,
          FunctionExpression: true,
        },
      },
    ],
    'valid-jsdoc': [
      'error',
      {
        prefer: {
          arg: 'param',
          argument: 'param',
          class: 'constructor',
          return: 'returns',
          virtual: 'abstract',
        },
        requireParamDescription: true,
        requireReturnDescription: false,
        requireParamType: true,
        requireReturnType: true,
        requireReturn: true,
      },
    ],
  },
};
