import { createNamespace, extend, numericProp, truthProp } from '../../utils'
import { cellSharedProps } from '../cell'

export const { name: collapseItemName, bem: collapseItemBem } = createNamespace('collapse-item')

export const collapseItemProps = extend({}, cellSharedProps, {
    name: numericProp,
    isLink: truthProp,
    disabled: Boolean,
    readonly: Boolean,
    lazyRender: truthProp,
})
