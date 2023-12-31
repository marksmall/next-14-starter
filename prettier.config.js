module.exports = {
  singleQuote: true,
  arrowParens: 'always',
  trailingComma: 'all',
  printWidth: 100,
  tabWidth: 2,
  // plugins: [require('prettier-plugin-tailwindcss')]
  overrides: [
    // Only load `prettier-plugin-tailwindcss` when scanning the src/ dir
    {
      files: ['src/**'],
      options: {
        plugins: ['prettier-plugin-tailwindcss'],
      },
    },
  ],
};
