module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "globals": {
        "__PATH_PREFIX__": true,
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb",
        "airbnb/hooks",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "prettier",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2021,
        project: "./tsconfig.eslint.json",
        "sourceType": "module",
        "tsconfigRootDir": __dirname,
    },
    "root": true,
    "plugins": [
        "react",
        "@typescript-eslint",
        "import",
        "jsx-a11y",
        "prettier",
        "react-hooks",
    ],
    overrides: [
        {
            'files': ['**/*.tsx'],
            'rules': {
                'react/prop-types': 'off',
            },
        },
    ],
    "rules": {
        "no-use-before-define": "off",
        'react/jsx-filename-extension': [
            'error',
            {
                extensions: ['.jsx', '.tsx'],
            },
        ],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx']
        },
        'import/resolver': {
            typescript: {}
        }
    }
};
