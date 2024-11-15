import {defineBuildConfig} from "unbuild";

export default defineBuildConfig({
    entries: ['./src/index.ts'],
    externals: ["@uni-helper/vite-plugin-uni-components"],
    rollup: {
        emitCJS: true,
    },
    declaration: true,
    clean: true,
})