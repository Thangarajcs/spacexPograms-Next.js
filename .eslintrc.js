module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "plugin:react/recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "no-caller": "error",
        "complexity": ["error", 20],
        "quotes": ["error", "single"],
        "indent": ["error", 4],
        "semi": ["error", "always"],
        "no-console": [
            "error",
            {"allow": ["error"]}
        ],
        "max-lines": ["error", {"max": 400}],
        "max-statements": ["error"],
        "react/no-deprecated" : 0
    },
};
