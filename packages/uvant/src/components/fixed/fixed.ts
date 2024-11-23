import { createNamespace, makeNumericProp, makeStringProp, numericProp } from '../../utils'

export type FixedPosition = 'top' | 'bottom'

export const { name, bem } = createNamespace('fixed')

export const fixedProps = {
    disabled: Boolean,
    placeholder: Boolean,
    position: makeStringProp<FixedPosition>('bottom'),
    offset: makeNumericProp(0),
    zIndex: numericProp,
}
