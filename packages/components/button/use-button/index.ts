import { computed } from "vue";
import type { ButtonPropType } from "../src/prop";
import useStyle, { UseClassList } from "../../_global/hooks/use-style"

export interface useButtonReturn {
    classList: UseClassList,
}

export default function useButton(props: ButtonPropType): useButtonReturn {
    const { getSize, getType } = useStyle(props)
    const classList =computed(() => {
        return [
            'mt_button',
            `mt_button__${getType().value}`,
            `mt_button__${getSize().value}`
        ]
    })

    return {
        classList
    }
}