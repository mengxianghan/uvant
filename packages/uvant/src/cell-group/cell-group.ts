import type { ExtractPropTypes } from 'vue'
import { createNamespace, truthProp } from '../utils'

export const { name, bem } = createNamespace('cell-group')

export const cellGroupProps = {
    title: String,
    inset: Boolean,
    border: truthProp,
}

export type CellGroupProps = ExtractPropTypes<typeof cellGroupProps>
