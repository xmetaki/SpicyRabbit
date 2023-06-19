export type ArrayToUnion<T extends readonly string[]> = {
    [P in keyof T]: T[P]
}[number]

export interface ChangeHandler {
    (val: boolean):void
}

export interface InputHandler {
    (val?: string):void
}