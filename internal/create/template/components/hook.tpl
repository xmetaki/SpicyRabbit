import useClass from "../../_global/hooks/use-class";
import { ${COM_NAME_UPPERCASE}PropsType } from "../src/prop";

export function useInnerClass (props: ${COM_NAME_UPPERCASE}PropsType) {
    return useClass(${COM_NAME}, props)
}