import { resolve } from 'node:path'
import uni from '@dcloudio/vite-plugin-uni'
import UniComponents from '@uni-helper/vite-plugin-uni-components'
import autoprefixer from 'autoprefixer'
import postcssRemToResponsivePixel from 'postcss-rem-to-responsive-pixel'
import tailwindcss from 'tailwindcss'
import { UVantResolver } from 'uvant-auto-import-resolver'
import { defineConfig } from 'vite'
import { UnifiedViteWeappTailwindcssPlugin as uvwt } from 'weapp-tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        UniComponents({
            deep: true,
            dts: 'src/components.d.ts',
            resolvers: [UVantResolver()],
        }),
        uni(),
        uvwt({
            // disabled: ['h5', 'app'].includes(process.env.UNI_PLATFORM),
        }),
    ],
    server: {
        host: '0.0.0.0',
        strictPort: false,
    },
    css: {
        postcss: {
            plugins: [
                tailwindcss(),
                autoprefixer(),
                postcssRemToResponsivePixel({
                    rootValue: 16,
                    propList: ['*'],
                    transformUnit: 'px',
                }),
            ],
        },
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
})
