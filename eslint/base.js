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
};
