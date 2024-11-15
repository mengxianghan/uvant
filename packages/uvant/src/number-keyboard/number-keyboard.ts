import type { PropType } from 'vue'
import type { KeyType, NumberKeyboardTheme } from './types'
import { createNamespace, makeNumericProp, makeStringProp, numericProp, truthProp } from '../utils'

export const { name, bem } = createNamespace('number-keyboard')

export const numberKeyboardProps = {
    title: String,
    theme: makeStringProp<NumberKeyboardTheme>('default'),
    zIndex: numericProp,
    teleport: [String, Object],
    maxlength: makeNumericProp(Infinity),
    transition: truthProp,
    blurOnClose: truthProp,
    showDeleteKey: truthProp,
    randomKeyOrder: Boolean,
    closeButtonText: String,
    deleteButtonText: String,
    closeButtonLoading: Boolean,
    hideOnClickOutside: truthProp,
    safeAreaInsetBottom: truthProp,
    extraKey: {
        type: [String, Array] as PropType<string | string[]>,
        default: '',
    },
}

export const numberKeyboardKeyProps = {
    type: String as PropType<KeyType>,
    text: numericProp,
    color: String,
    wider: Boolean,
    large: Boolean,
    loading: Boolean,
}
