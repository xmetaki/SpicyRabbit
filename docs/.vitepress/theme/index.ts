import { h } from 'vue'
import Theme from 'vitepress/theme'

import Rabbit from '@spicyrabbit/components'
import "@spicyrabbit/theme"
import theme from 'vitepress/theme'

export default {
    ...theme,
    Layout() {
        return h(Theme.Layout, null, {
            // TODO: 插槽替换 
        })
    },
    enhanceApp({ app }) {
        app.use(Rabbit)
    }
}