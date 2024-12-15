import antfu from '@antfu/eslint-config'

export default antfu({
    ignores: [
        '**/*.d.mts',
        '**/*.d.ts',
        '**/*.md',
        'docs/.vitepress/cache',
        'example/src/uni_modules',
        '**/*.tsconfig.json',
        '**/*.yaml',
        'packages/uvant/tags.json',
        'packages/uvant/web-type.json',
    ],
    formatters: {
        css: true,
    },
    stylistic: {
        indent: 4,
    },
    rules: {
        'vue/no-reserved-component-names': 'off',
        'regexp/no-unused-capturing-group': 'off',
        'jsdoc/check-alignment': 'off',
        'jsdoc/check-types': 'off',
        'jsdoc/require-returns-description': 'off',
        'node/prefer-global/process': 'off',
        'vue/max-attributes-per-line': ['error', {
            singleline: {
                max: 1,
            },
            multiline: {
                max: 1,
            },
        }],
    },
})
