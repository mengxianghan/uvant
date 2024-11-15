import { defineBuildConfig } from 'unbuild'

const OUT_DIR = './dist'

export default defineBuildConfig({
    entries: [
        './src/index.ts',
        // {
        //     input: './src/composables/',
        //     outDir: `./${OUT_DIR}/composables`,
        // },
        // {
        //     input: './src/utils/',
        //     outDir: `./${OUT_DIR}/utils`,
        // },
        // {
        //     input: './src/locale/',
        //     outDir: `./${OUT_DIR}/locale`,
        // },
        // {
        //     builder: 'copy',
        //     input: './src/',
        //     pattern: ['./', '!composables', '!locale', '!utils', '!index.ts'],
        //     outDir: OUT_DIR,
        // },
    ],
    outDir: OUT_DIR,
    declaration: true,
    clean: true,
    rollup: {
        emitCJS: true,
    },
    externals: ['vue', 'lodash-es'],
    failOnWarn: false,
})
