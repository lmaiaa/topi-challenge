module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "google",
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      modules: true,
    },
  },
  ignorePatterns: [
    "/lib/**/*",
  ],
  plugins: [
    "@typescript-eslint",
    "import",
    "sort-imports-es6-autofix",
  ],
  rules: {
    "quotes": ["error", "double"],
    "max-len": [
      "error",
      {
        code: 120,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreComments: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
        ignorePattern: "trans\\(|transChoice\\(",
      },
    ],
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: ["const", "let", "var", "import", "export", "default", "directive"],
        next: "*",
      },
      {
        blankLine: "always",
        prev: "*",
        next: ["return", "var", "let", "const", "block", "block-like", "throw"],
      },
      { blankLine: "never", prev: ["const", "let", "var"], next: ["const", "let", "var"] },
      { blankLine: "never", prev: "import", next: "import" },
      { blankLine: "any", prev: "export", next: "export" },
    ],
    "prefer-destructuring": 0,
    "sort-imports-es6-autofix/sort-imports-es6": 2,
  },
  overrides: [{
    files: ["*"],
    rules: {
      "object-curly-spacing": "off",
      "require-jsdoc": "off",
      "import/no-unresolved": "off",
      // "no-unused-vars": "off",
      "new-cap": ["error", { capIsNew: false }],
    },
  }],
};
