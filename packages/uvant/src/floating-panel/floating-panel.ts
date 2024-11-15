import type { ExtractPropTypes } from 'vue'
import { DURATION } from '../constants'
import { createNamespace, makeArrayProp, makeNumericProp, truthProp } from '../utils'

export const { name, bem } = createNamespace('floating-panel')

export const floatingPanelProps = {
    anchors: makeArrayProp<number>(),
    duration: makeNumericProp(DURATION),
    contentDraggable: truthProp,
    safeAreaInsetBottom: truthProp,
}
export type FloatingPanelProps = ExtractPropTypes<typeof floatingPanelProps>
