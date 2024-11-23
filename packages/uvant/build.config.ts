import { execSync } from 'node:child_process'
import { consola } from 'consola'
import fse from 'fs-extra'
import { defineBuildConfig } from 'unbuild'

const { remove, copy, ensureDir } = fse

export default defineBuildConfig({
    entries: [
        './src/index.ts',
        {
            builder: 'copy',
            input: './src/',
            outDir: './dist',
            pattern: ['**/*', '!index.ts'],
        },
    ],
    declaration: true,
    clean: true,
    rollup: {
        emitCJS: true,
        // inlineDependencies: false,
        // preserveDynamicImports: true,
        // output: {
        // preserveModules: true,
        // format: 'esm',
        // entryFileNames: '[name].js', // 设置生成的文件后缀为 .js
        // chunkFileNames: '[name].js', // 设置生成的分块文件后缀为 .js
        // assetFileNames: '[name].[ext]', // 设置生成的资源文件名称
        // },
    },
    externals: ['vue', 'lodash-es', '@uni-helper/uni-app-types'],
    failOnWarn: false,
    hooks: {
        'build:before': () => {
            consola.start('开始构建')
        },
        'build:done': async () => {
            execSync('esno ./scripts/web-types.ts')
            await remove('../../example/src/uni_modules/uvant')
            await ensureDir('../../example/src/uni_modules/uvant')
            await copy('./dist', '../../example/src/uni_modules/uvant')
            await copy('./scripts/package.json', '../../example/src/uni_modules/uvant/package.json')
            await copy('./attributes.json', '../../example/src/uni_modules/uvant/attributes.json')
            await copy('./tags.json', '../../example/src/uni_modules/uvant/tags.json')
            await copy('./web-types.json', '../../example/src/uni_modules/uvant/web-types.json')
            consola.success('构建完成')
        },
    },
})
