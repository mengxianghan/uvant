import type { Numeric } from '../utils'
import { createNamespace, isNumeric } from '../utils'

export const { name, bem } = createNamespace('sidebar')

export const SIDEBAR_KEY = Symbol(name)

export const sidebarEmits = {
    change: (val: Numeric) => isNumeric(val),
}
export type SidebarEmits = typeof sidebarEmits
