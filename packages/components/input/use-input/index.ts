import { InputPropsType } from "../src/prop";
import useClass from "../../_global/hooks/use-class";

export function useInnerClass(prop: InputPropsType) {
    return useClass('input', prop, [
        `mt_input__${prop.type}`,
    ])
}