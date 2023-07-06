import { ComputedRef } from "vue";
import type { ButtonPropType } from "../src/prop";
import useClass from "../../_global/hooks/use-class";


export  function useInnerClass(props: ButtonPropType): ComputedRef<string[]> {
   return useClass("button", props)
}
