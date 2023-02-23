module.exports = {
  plugins: [require.resolve('prettier-plugin-astro'), "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  jsxSingleQuote: true,
  singleQuote: true
};