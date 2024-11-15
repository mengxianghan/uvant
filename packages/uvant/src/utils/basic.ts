import { getSystemInfoSync } from './version'

export {
    camelCase,
    debounce,
    defaultTo,
    extend,
    get,
    isEqual,
    isNumber,
    noop,
    omit,
    pick,
    uniqueId,
} from 'lodash-es'

export type Numeric = number | string

export function isObject(val: unknown): val is Record<any, any> {
    return val !== null && typeof val === 'object'
}

export function isDef<T>(val: T): val is NonNullable<T> {
    return val !== undefined && val !== null && val !== ''
}

// eslint-disable-next-line ts/no-unsafe-function-type
export function isFunction(val: unknown): val is Function {
    return typeof val === 'function'
}

export function isPromise<T = any>(val: unknown): val is Promise<T> {
    return isObject(val) && isFunction(val.then) && isFunction(val.catch)
}

export function isDate(val: unknown): val is Date {
    return (
        Object.prototype.toString.call(val) === '[object Date]'
        && !Number.isNaN((val as Date).getTime())
    )
}

export function isMobile(value: string): boolean {
    value = value.replace(/[^-|\d]/g, '')
    return (
        /^((\+86)|(86))?(1)\d{10}$/.test(value) || /^0[0-9-]{10,13}$/.test(value)
    )
}

export function isNumeric(val: Numeric): val is string {
    return typeof val === 'number' || /^\d+(\.\d+)?$/.test(val)
}

export function isSameValue(newValue: unknown, oldValue: unknown) {
    return JSON.stringify(newValue) === JSON.stringify(oldValue)
}

export function toArray<T>(item: T | T[]): T[] {
    return Array.isArray(item) ? item : [item]
}

export function flat<T>(arr: Array<T | T[]>) {
    return arr.reduce<T[]>((acc, val) => acc.concat(val), [])
}

export function isImageUrl(url: string) {
    return /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i.test(url)
}

export function isVideoUrl(url: string) {
    return /\.(mp4|mpg|mpeg|dat|asf|avi|rmvb|mov|wmv|flv|mkv)/i.test(url)
}

export function isBoolean(value: unknown): value is boolean {
    return typeof value === 'boolean'
}

export function requestAnimationFrame(cb: () => void) {
    return setTimeout(() => {
        cb()
    }, 1000 / 30)
}

export const isPC = ['mac', 'windows', 'devtools'].includes(
    getSystemInfoSync().platform,
)
