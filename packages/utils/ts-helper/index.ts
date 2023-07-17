export type ArrayToUnion<T extends readonly string[]> = {
    [P in keyof T]: T[P]
}[number]

export interface ChangeHandler {
    (val: boolean):void
}

export interface InputHandler {
    (val?: string):void
}

// 获取一个对象类型的属性的类型
export type GetPropType<T extends Record<string ,any>, P extends keyof T> = T[P]

// 判断一个类型是否为 Record<string, unknown>类型
export function isRecordUnknown(obj: unknown): obj is Record<string, unknown> {
    if (typeof obj === 'object' && obj !== null) {
        for(const key in obj) {
            if (typeof key !== 'string') {
                return false
            }
        }
        return true
    }
    return false
}

export function isRecordUnknownList(obj: unknown): obj is Record<string, unknown>[] {
    if (!Array.isArray(obj)) return false
    for(let i = 0; i < obj.length; i++) {
        if (!isRecordUnknown(obj[i])) return false
    }
    return true
}