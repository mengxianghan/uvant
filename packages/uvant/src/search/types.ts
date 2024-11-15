import type { ExtractPropTypes } from 'vue'
import type { searchProps } from './search.ts'

export const searchShape = ['square', 'round'] as const
export type SearchShape = (typeof searchShape)[number]

export type SearchProps = ExtractPropTypes<typeof searchProps>
