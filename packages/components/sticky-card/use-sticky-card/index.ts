import { ComputedRef, computed, Ref } from "vue";
import { StickyCardPropType } from "../src/prop";

export interface UseStickyCardReturn {
    getLabelText: (isShow: Ref<boolean>) => ComputedRef<string>,
    getSourceClass: (isShow: Ref<boolean>) => ComputedRef<string[]>
}

export default function useStickyCard(props: StickyCardPropType): UseStickyCardReturn {
    const getLabelText = (isShow : Ref<boolean>): ComputedRef<string> => {
       return computed(() => {
        return isShow.value ? props.collapseText : props.expandText
       }) 
    }

    const getSourceClass = (isShow: Ref<boolean>): ComputedRef<string[]> => {
        return computed(() => {
            return isShow.value ? ['mt_sticky-card__expand'] : ['mt_sticky-card__collapse']
        })
    }

    return {
        getLabelText,
        getSourceClass
    }
}