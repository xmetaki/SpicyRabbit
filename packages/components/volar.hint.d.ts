import '@vue/runtime-core'
import * as components from './components'
declare module '@vue/runtime-core' {
    export interface GlobalComponents {
        MtButton: typeof components.MtButton,
        MtInput: typeof components.MtInput,
        MtTag: typeof components.MtTag
    }
}
