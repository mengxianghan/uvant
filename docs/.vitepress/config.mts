import {defineConfig} from 'vitepress'
import {version} from '../../package.json'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "uvant",
    description: "vant 风格的轻量级移动端 uniapp 组件库",
    head: [
        ['link', {rel: 'icon', href: '/logo.svg', type: 'image/svg'}]
    ],
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/logo.svg',

        nav: [
            {text: '指南', items: []},
            {text: '组件', items: []},
            {text: '示例', link: 'https://xuanyunet.com'},
            {text: '其他', items: []},
            {
                text: `v${version}`, items: [
                    {
                        text: '更新日志',
                        link: 'https://xuanyunet.com',
                    },
                ]
            }
        ],

        sidebar: {
            '/guide/': [
                {
                    text: '指南',
                    items: [],
                },
            ],
            '/components/': [
                {
                    text: '组件',
                    items: [],
                },
            ],
        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ]
    },
})
