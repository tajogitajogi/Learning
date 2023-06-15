module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript'
    ],

    parserOptions: {
        parser: '@typescript-eslint-parser',
        project: './tsconfig.json',
        plugins: ['@typescript-eslint'],
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: '2020',
        sourceType: 'module',
        tsconfigRootDir: __dirname
    },
    plugins: [
        'react',
        '@typescript-eslint'
    ],
    rules: {
        'no-empty-pattern': 'off',
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        'react/jsx-filename-extension': [2, { extensions: ['js', 'jsx', 'ts', 'tsx'] }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'no-trailing-spaces': 'off',
        'react-require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'no-undef': 'warn',
        'import/extensions': 'off',
        'object-curly-spacing': ['warn', 'always'],
        'react/jsx-curly-brace-presence': 'off',
        'react/jsx-tag-spacing': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/consistent-type-imports': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/semi': 'off',
        '@typescript-eslint/member-delimiter-style': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'n/handle-callback-err': 'off'
    },
    overrides: [
        {
            files: ['global.d.ts', '**/src/**/*.test.{ts,tsx}'],
            rules: {
                'no-undef': 'off'
            }
        }
    ],

    settings: {
        react: {
            version: 'detect'

        }
    },
    globals: {
        IS_DEV__: true
    }
}
