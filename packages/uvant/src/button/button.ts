import type { ExtractPropTypes } from 'vue'
import type { ButtonIconPosition, ButtonSize, ButtonType } from './types'
import { createNamespace, makeStringProp, numericProp, unknownProp } from '../utils'

export const { name, bem } = createNamespace('button')

export const buttonProps = {
    text: String,
    icon: String,
    type: makeStringProp<ButtonType>('default'),
    size: makeStringProp<ButtonSize>('normal'),
    color: String,
    block: Boolean,
    plain: Boolean,
    round: Boolean,
    square: Boolean,
    loading: Boolean,
    hairline: Boolean,
    disabled: Boolean,
    iconPrefix: String,
    loadingSize: numericProp,
    loadingText: String,
    loadingType: String,
    iconPosition: makeStringProp<ButtonIconPosition>('left'),
    customClass: unknownProp,
    customStyle: [String, Object],
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>

export const buttonEmits = ['click']

export type ButtonEmits = typeof buttonEmits
