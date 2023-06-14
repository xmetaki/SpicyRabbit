import { App, Component, Plugin } from 'vue'
export type WithInstall<T> = T & Plugin

/**
 * 注册组件函数
 * @param {Object} com 组件实例 
 * @returns {Object} 已经注册的组件实例
 */
export const install = <T extends Component>(com: T): WithInstall<T> => {
    ;(com as WithInstall<T>).install = (app: App) => {
        const { name } = com
        name && app.component(name, com)
    }
    return com as WithInstall<T>
}