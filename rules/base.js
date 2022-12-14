module.exports = {
    env: {
        es6: true,
        browser: true,
        jest: true,
    },
    parserOptions: {
        ecmaVersion: 2022,
        ecmaFeatures: {
            impliedStrict: true,
            jsx: true,
        },
        sourceType: "module",
    },
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    rules: {
        // Indent the code with tabs instead of spaces
        indent: ["error", 4],
        // Require semicolons at the end of a line
        semi: ["error", "always"],
        // Uses double quotes for strings
        quotes: ["error", "double"],
        // Require trailing commas
        "comma-dangle": ["error", "always-multiline"],
        // Enforce consistent spacing inside braces
        "object-curly-spacing": ["error", "always"],
    },
};
