import type { SearchShape } from './types'
import { createNamespace, makeNumericProp, makeStringProp, truthProp, unknownProp } from '../utils'

export const { name, bem } = createNamespace('search')

export const searchProps = {
    label: String,
    name: String,
    shape: makeStringProp<SearchShape>('square'),
    id: String,
    background: String,
    maxlength: makeNumericProp(-1),
    placeholder: String,
    clearable: truthProp,
    clearIcon: makeStringProp('clear'),
    clearTrigger: makeStringProp('focus'),
    autofocus: Boolean,
    showAction: Boolean,
    actionText: makeStringProp('取消'),
    disabled: Boolean,
    inputAlign: String,
    leftIcon: makeStringProp('search'),
    rightIcon: String,
    formatter: { type: Function, default: val => val },
    formatTrigger: makeStringProp('onChange'),
    customStyle: unknownProp,
    customClass: unknownProp,
}
