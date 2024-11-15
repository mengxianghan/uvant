import type { ExtractPropTypes } from 'vue'
import { createNamespace, makeStringProp } from '../utils'

export const { name, bem } = createNamespace('icon')

export const iconProps = {
    name: makeStringProp(''),
    dot: { type: Boolean, default: false },
    badge: [Number, String],
    badgeProps: Object,
    color: String,
    size: [String, Number],
    classPrefix: makeStringProp('van-icon'),
}

export type IconProps = ExtractPropTypes<typeof iconProps>

export const iconEmits = ['click']

export type IconEmits = typeof iconEmits
