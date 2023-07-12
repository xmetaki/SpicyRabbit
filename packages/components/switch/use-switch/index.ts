import useClass from "../../_global/hooks/use-class";
import { SwitchPropsType } from "../src/prop";

export function useInnerClass (props: SwitchPropsType) {
    return useClass('switch', props)
}