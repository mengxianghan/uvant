import { makeNumericProp, makeStringProp, numericProp } from '../utils'

export type FixedPosition = 'top' | 'bottom'

export const fixedProps = {
    disabled: Boolean,
    placeholder: Boolean,
    position: makeStringProp<FixedPosition>('bottom'),
    offset: makeNumericProp(0),
    zIndex: numericProp,
}
