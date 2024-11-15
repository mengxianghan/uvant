import type { ExtractPropTypes } from 'vue'
import type { Numeric } from '../utils'
import type { numberKeyboardProps } from './number-keyboard.ts'

export const numberKeyboardTheme = ['default', 'custom'] as const
export type NumberKeyboardTheme = (typeof numberKeyboardTheme)[number]

export const keyType = ['', 'delete', 'extra', 'close'] as const
export type KeyType = (typeof keyType)[number]

export type NumberKeyboardProps = ExtractPropTypes<typeof numberKeyboardProps>

export interface KeyConfig {
    text?: Numeric
    type?: KeyType
    color?: string
    wider?: boolean
}
