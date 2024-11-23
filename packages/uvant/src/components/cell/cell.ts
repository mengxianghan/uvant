import type { ExtractPropTypes, PropType } from 'vue'
import type { CellArrowDirection, CellSize } from './types'
import { createNamespace, numericProp, truthProp } from '../../utils'

export const { name: cellName, bem: cellBem } = createNamespace('cell')

export const cellProps = {
    icon: String,
    size: String as PropType<CellSize>,
    title: numericProp,
    value: numericProp,
    label: numericProp,
    center: Boolean,
    isLink: Boolean,
    border: truthProp,
    iconPrefix: String,
    arrowDirection: String as PropType<CellArrowDirection>,
    required: {
        type: [Boolean, String] as PropType<boolean | 'auto'>,
        default: null,
    },
    clickable: {
        type: Boolean as PropType<boolean | null>,
        default: null,
    },
}

export type CellProps = ExtractPropTypes<typeof cellProps>

export const cellEmits = ['click']

export type CellEmits = typeof cellEmits
