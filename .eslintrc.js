// {
//   "extends": "eslint-config-umi"
// }
'use strict';

module.exports = {
  extends: ['airbnb', 'prettier', 'plugin:eslint-comments/recommended', 'prettier/react'],
  plugins: ['eslint-comments', 'unicorn', 'react-hooks'],
  parser: 'babel-eslint',
  env: {
    browser: true,
  },
  rules: {
    'react/jsx-wrap-multilines': 0,
    'react/prop-types': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/require-default-props': 0,
    'no-void': 0,
    'generator-star-spacing': 0,
    'function-paren-newline': 0,
    'import/no-unresolved': [2, { ignore: ['^@/', '^umi/'] }],
    'import/order': 'warn',
    'no-restricted-globals': 0,
    // "import/no-extraneous-dependencies": [
    //   2,
    //   {
    //     optionalDependencies: true,
    //     devDependencies: [
    //       "**/tests/**..{ts,js,jsx,tsx}",
    //       "**/_test_/**.{ts,js,jsx,tsx}",
    //       "/mock/**/**.{ts,js,jsx,tsx}",
    //       "**/**.test.{ts,js,jsx,tsx}",
    //       "**/_mock.{ts,js,jsx,tsx}"
    //     ]
    //   }
    // ],
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'linebreak-style': 0,
    // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': 'off',
    'import/prefer-default-export': 'off',
    'import/no-default-export': [0, 'camel-case'],
    // Too restrictive: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
    'react/destructuring-assignment': 'off',
    'react/jsx-filename-extension': 'off',
    // Use function hoisting to improve code readability
    'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
    // Makes no sense to allow type inferrence for expression parameters, but require typing the response
    // Common abbreviations are known and readable
    'unicorn/prevent-abbreviations': 'off',
    'import/no-cycle': 0,
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks

    // issue https://github.com/facebook/react/issues/15204
    'react-hooks/exhaustive-deps': 'off', // Checks effect dependencies

    // Conflict with prettier
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': 1,
    'object-curly-newline': 0,
    'implicit-arrow-linebreak': 0,
    'operator-linebreak': 0,
    'eslint-comments/no-unlimited-disable': 0,
    'no-param-reassign': 1,
    'no-unexpected-multiline': 'error',
    'import/no-extraneous-dependencies': 0,
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'react/sort-comp': 0,
    'no-nested-ternary': 0,
    'prefer-destructuring': 0,
    'no-unused-expressions': 0,
    'no-inner-declarations': 0,
    'no-console': 0,
    'func-names': 0,
    'react/no-string-refs': 1,
    'no-shadow': 1,
    'no-else-return': 1,
    'import/order': 0,
    'lines-between-class-members': 0,
    'object-shorthand': 0,
    'arrow-body-style': 0,
    'arrow-parens': 0,
    'spaced-comment': 0,
    'react/jsx-boolean-value': 0,
    'dot-notation': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/label-has-for': 0,
    'no-underscore-dangle': ['error', { allow: ['__DEV__', '__TEST__', '__PROD__'] }],
    'camelcase': 0,
    'no-underscore-dangle': 0,
  },
  settings: {
    // support import modules from TypeScript files in JavaScript files
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
          ['@utils', './src/base/utils'],
          ['@assets', './src/base/assets'],
          ['@components', './src/base/components'],
          ['@constants', './src/constants'],
          ['@helpers', './src/helpers'],
          ['@config', './src/config'],
          ['@services', './src/base/services'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    },
    polyfills: ['fetch', 'Promise', 'URL', 'object-assign'],
  },
};
