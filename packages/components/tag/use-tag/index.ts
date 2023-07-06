import useClass from "../../_global/hooks/use-class";
import { TagPropsType } from "../src/prop";

export function useInnerClass (props: TagPropsType) {
    return useClass('tag', props)
}