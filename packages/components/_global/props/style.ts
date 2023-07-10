import { CssType } from "../hooks/use-class";

type CssPropType = Extract<keyof CssType, string>

export default function getStyleProps (prop: CssPropType[])  {
   return null
}