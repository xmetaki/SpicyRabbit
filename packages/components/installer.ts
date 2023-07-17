import * as components from './components'
import * as directives from './directives'
import { version } from './package.json'
import { App } from 'vue'
const install = (app: App): App => {
    // 注册全局组件
    Object.entries(components).forEach(([key, value]) => {
        app.component(key, value)
    })
    //注册全局指令
    Object.entries(directives).forEach(([, value]) => {
        app.directive(value.dName, value.logic)
    }) 
    return app
}

export default {
    install,
    version
}