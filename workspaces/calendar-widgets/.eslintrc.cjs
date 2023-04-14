module.exports = {
    "env": {
        "es2021": true,
        "node": true
    },
    "overrides": [
    ],
    "ignorePatterns": [
        "node_modules",
        "dist",
        "rollup.config.js",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
      "no-console": ["error"],
      "no-unused-vars": ["error"],
      "no-undef": ["error"],
      "no-dupe-keys": ["error"],
      "no-duplicate-case": ["error"],
      "no-irregular-whitespace": ["error"],
      "no-use-before-define": ["error"],
      "eqeqeq": ["error"],
      "no-alert": ["error"],
      "no-eval": ["error"],
      "no-sparse-arrays": ["error"],
      "no-template-curly-in-string": ["error"],
      "no-unexpected-multiline": ["error"],
      "no-unreachable": ["error"],
      "no-unused-vars": ["error"],
      "no-use-before-define": ["error"],
      "use-isnan": ["error"],
      "consistent-return": ["error"],
      "curly": ["error"],
      "default-case": ["error"],
      "default-case-last": ["error"],
      "default-param-last": ["error"],
      "dot-notation": ["error"],
      "no-confusing-arrow": ["error"],
      "no-delete-var": ["error"],
      "no-else-return": ["error"],
      "no-extend-native": ["error"],
      "no-extra-boolean-cast": ["error"],
      "no-extra-semi": ["error"],
      "no-floating-decimal": ["error"],
      "no-global-assign": ["error"],
      "no-implied-eval": ["error"],
      "no-inline-comments": ["error"],
      "no-invalid-this": ["error"],
      "no-iterator": ["error"],
      "no-magic-numbers": ["error"],
      "no-param-reassign": ["error"],
      "no-plusplus": ["error"],
      "no-proto": ["error"],
      "no-script-url": ["error"],
      "no-return-await": ["error"],
      "no-shadow": ["error"],
      "no-underscore-dangle": ["error"],
      "no-unneeded-ternary": ["error"],
      "no-unused-expressions": ["error"],
      "no-useless-call": ["error"],
      "no-useless-catch": ["error"],
      "no-var": ["error"],
      "no-warning-comments": ["error"],
      "no-with": ["error"],
      "prefer-const": ["error"],
      "prefer-destructuring": ["error"],
      "spaced-comment": ["error"],
      "array-bracket-newline": ["error", "never"],
      "array-bracket-spacing": ["error", "never"],
      "arrow-parens": ["error", "always"],
      "arrow-spacing": ["error", { "before": true, "after": true }],
      "brace-style": ["error", "1tbs"],
      "comma-dangle": ["error", "never"],
      "comma-spacing": ["error", { "before": false, "after": true }],
      "eol-last": ["error", "always"],
      "indent": ["error", 2],
      "max-len": ["error", { "code": 340 }],
      "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 1 }],
      "no-trailing-spaces": ["error"],
      "object-curly-spacing": ["error", "always"],
      "no-extra-parens": ["error"],
      "no-mixed-spaces-and-tabs": ["error"],
      "no-tabs": ["error"],
      "quotes": ["error", "single"],
      "semi": ["error", "always"],
      "semi-spacing": ["error", { "before": false, "after": false }],
      "space-in-parens": ["error", "never"]
    }
}
