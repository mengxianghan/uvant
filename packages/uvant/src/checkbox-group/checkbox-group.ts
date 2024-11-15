import type { ExtractPropTypes, PropType } from 'vue'
import type { CheckboxDirection, CheckboxShape } from '../checkbox'
import { createNamespace, makeStringProp, type Numeric, numericProp } from '../utils'

export const { name, bem } = createNamespace('checkbox-group')

export const CHECKBOX_KEY = Symbol(name)

export const checkboxGroupProps = {
    max: numericProp,
    shape: makeStringProp<CheckboxShape>('round'),
    disabled: Boolean,
    iconSize: numericProp,
    direction: String as PropType<CheckboxDirection>,
    checkedColor: String,
}
export type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>

export const checkboxGroupEmits = {
    change: (val: Array<Numeric>) => Array.isArray(val),
}
export type CheckboxGroupEmits = typeof checkboxGroupEmits
