import { createNamespace, makeNumericProp, numericProp, truthProp } from '../utils'

export const { name, bem } = createNamespace('password-input')

export const passwordInputProps = {
    info: String,
    mask: truthProp,
    gutter: numericProp,
    length: makeNumericProp(6),
    focused: Boolean,
    errorInfo: String,
}
