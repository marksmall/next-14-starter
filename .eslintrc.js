module.exports = {
  extends: [
    'next',
    'next/core-web-vitals',
    'prettier',
    'plugin:jsx-a11y/recommended',
    'plugin:jest-dom/recommended',
    'plugin:testing-library/react',
    'plugin:tailwindcss/recommended',
    'plugin:vitest/recommended',
  ],
  plugins: ['jsx-a11y', 'jest-dom', 'testing-library', 'tailwindcss', 'vitest'],
  rules: {
    'no-duplicate-imports': 'error',
    'import/no-unresolved': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'index'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '~/**',
            group: 'internal',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
    'sort-imports': [
      'error',
      {
        allowSeparatedGroups: true,
        ignoreDeclarationSort: true,
      },
    ],
  },
};
