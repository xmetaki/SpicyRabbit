import path from "path"

function r(p: string) {
    return path.resolve(__dirname, p)
}
export const alias: Record<string, string> = {
    "@spicyrabbit/utils": r('./packages/utils'),
    "@spicyrabbit/ui": r('./packages/ui'),
    "@spicyrabbit/components": r('./packages/components'),
    "@spicyrabbit/theme": r('./packages/theme')
}