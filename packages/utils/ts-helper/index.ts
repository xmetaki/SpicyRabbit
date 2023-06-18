export type ArrayToUnion<T extends readonly string[]> = {
    [P in keyof T]: T[P]
}[number]