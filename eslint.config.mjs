import antfu from '@antfu/eslint-config'

export default antfu({
    stylistic: {
        indent: 4,
    },
    rules: {
        'vue/no-reserved-component-names': 'off',
        'jsdoc/check-alignment': 'off',
        'regexp/no-unused-capturing-group': 'off',
        'jsdoc/check-types': 'off',
        'jsdoc/require-returns-description': 'off',
    },
})
