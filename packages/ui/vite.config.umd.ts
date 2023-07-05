import { UserConfigExport } from "vite";
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
const __dirname = resolve()
export default ():UserConfigExport => {
    return {
        define: {
            __DEV__: process.env.NODE_ENV !== 'production'
        },
        plugins: [
            vue()
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