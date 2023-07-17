import '@vue/runtime-core'
import * as components from './components'
import * as directives from './directives'
declare module '@vue/runtime-core' {
    export interface GlobalComponents {
        MtButton: typeof components.MtButton,
        MtInput: typeof components.MtInput,
        MtTag: typeof components.MtTag,
        MtAvatar: typeof components.MtAvatar,
        MtSwitch: typeof components.MtSwitch,
        MtTimePicker: typeof components.MtTimePicker,
    }

    export interface GlobalDirectives {
        animationRipple: typeof directives.ripple.logic
    }
}
