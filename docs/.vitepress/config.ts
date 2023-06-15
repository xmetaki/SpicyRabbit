import { defineConfig } from "vitepress"
import head from './config/head'
import theme from "./config/theme"
import { PluginComponents } from "./plugins"
import MarkdownIt from "markdown-it"
export default defineConfig({
    titleTemplate: 'Butterfly :title',
    head,
    /**
     * @see https://vitepress.dev/reference/site-config#description
     */
    description: 'life is fucking movie',
    lastUpdated: true,
    cacheDir: '../../node_modules',
    themeConfig:  theme,
    markdown: {
        config: (md: MarkdownIt):void => {
            md.use(PluginComponents)
        }
    }
})