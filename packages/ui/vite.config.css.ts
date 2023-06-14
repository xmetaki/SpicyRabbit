import { resolve } from "path";
import { readdirSync } from "node:fs";
import type { UserConfigExport } from 'vite'
import postcssPresetEnv from 'postcss-preset-env'
import autoprefixer from 'autoprefixer'

const __dirname = resolve()
const components:string = resolve(__dirname, '../theme/components')
const themeBundle:string = resolve(__dirname, '../theme/index.scss')
const input:string[] = [themeBundle]
readdirSync(components).map(name => {
    input.push(`${components}/${name}`)
})
export default ():UserConfigExport => {
    return {
        "css": {
            postcss: {
                plugins: [
                    postcssPresetEnv(),
                    autoprefixer()
                ]
            }

        },
        "build": {
            assetsDir: 'theme',
            rollupOptions: {
                input,
                output: {
                    assetFileNames: 'theme/[name].[ext]'
                }
            },
        }
    }
}