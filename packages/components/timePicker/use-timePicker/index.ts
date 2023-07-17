import useClass from "../../_global/hooks/use-class";
import { TimePickerPropsType } from "../src/prop";

export function useInnerClass (props: TimePickerPropsType) {
    return useClass('timePicker', props)
}