import { UserConfigExport } from "vite";
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'
const __dirname = resolve()
const comPath = resolve(__dirname, "../components/")
console.log(comPath)
export default ():UserConfigExport => {
    return {
        resolve: {
            alias: {
                '@spicyrabbit/utils': resolve(comPath, '../utils')
            }
        },
        define: {
            __DEV__: process.env.NODE_ENV !== 'production'
        },
        plugins: [
            vue(),
            dts({
                "skipDiagnostics": true,
                /**import('xxx').yyy转 import { yyy } from 'xxx' */  
                "staticImport": true,
                "outputDir": ["packages/ui/dist/types"],
                "copyDtsFiles": true,
                "root": "../..",
                /**指导输出路径 */
                "entryRoot": "packages/",
                "cleanVueFileName": true /** 是否将 '.vue.d.ts' 文件名转换为 '.d.ts' */,
                "include": ["packages/components/", "packages/utils"],
                "exclude": [
                    "node_modules",
                    "dist",
                    "**/dist",
                    "**/node_modules"
                ]
            })
        ],
        css: {},
        build: {
            /**通用配置 */
            minify: true,
            chunkSizeWarningLimit: 3, //组件超过3kb就警告
            reportCompressedSize: true, //gzip压缩报告
            emptyOutDir: true, // 要和css共用文件夹,
            outDir: resolve(__dirname, './dist'),

            /**开启库模式打包 */
            lib: {
                name: 'SpicyRabbit', /**UMD或AMD模式下生效 */
                entry: "../components/index.ts"
            },

            /**配置rollup */
            rollupOptions: {
                external: ['vue'],
                output: [
                    /**esmodule规范包 */
                    {
                        format: 'es',
                        exports: 'named',
                        dir: 'dist/es',
                        //不要用hash
                        entryFileNames: '[name].js',
                        // chunkFileNames: '[name].js',
                        assetFileNames: '[name].[ext]',
                        /** Instead of creating as few chunks as possible */
                        preserveModules: true
                    },
                    /**cjs规范包 */
                    {
                        format: 'cjs',
                        exports: 'named',
                        dir: 'dist/lib',
                        entryFileNames: '[name].js',
                        chunkFileNames: '[name].js',
                        assetFileNames: '[name].[ext]',
                        preserveModules: true
                    },
                    /**umd规范包 适用于浏览器+node环境 */
                    {
                        format: 'umd',
                        name: 'SpicyRabbit',
                        exports: 'named',
                        dir: 'dist/umd',
                        entryFileNames: 'index.js',
                        chunkFileNames: '[name].js',
                        assetFileNames: '[name].[ext]',
                        /**依赖环境中的变量 */
                        globals: {
                            vue: 'Vue'
                        }
                    }
                ]
            }
        }
    }
}