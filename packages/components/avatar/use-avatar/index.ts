import { CSSProperties, computed } from "vue";
import useClass from "../../_global/hooks/use-class";
import { AvatarPropType } from "../src/prop";

export default function useInnerClass(props: AvatarPropType) {
    return useClass('avatar', props)
}

export function useInnerStyle(props: AvatarPropType) {
    
    const cssProperties: CSSProperties = {}
    const { bgColor } = props
    if (bgColor) cssProperties['--']
}

export function useTextName(props:AvatarPropType) {
    return computed(() => {
        if (!props.text) return ""
        const namePrefx = props.text.charAt(0)
        return namePrefx
    })
}