import { defineConfig } from "vitepress"
import head from './config/head'
import theme from "./config/theme"
import { PluginComponents, PluginTable } from "./plugins"
import MarkdownIt from "markdown-it"
export default defineConfig({
    titleTemplate: 'Rabbit :title',
    head,
    /**
     * @see https://vitepress.dev/reference/site-config#description
     */
    description: 'life is fucking movie',
    vue: {
        script: {
            defineModel: true
        }
    },
    lastUpdated: true,
    cacheDir: '../../node_modules',
    themeConfig:  theme,
    markdown: {
        config: (md: MarkdownIt):void => {
            md.use(PluginComponents)
            md.use(PluginTable)
        }
    }
})