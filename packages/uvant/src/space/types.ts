import type { ExtractPropTypes } from 'vue'
import type { spaceProps } from './space.ts'

export const spaceDirection = ['horizontal', 'vertical']
export type SpaceDirection = (typeof spaceDirection)[number]

export const spaceAlign = ['start', 'end', 'center', 'baseline']
export type SpaceAlign = (typeof spaceAlign)[number]

export type SpaceProps = ExtractPropTypes<typeof spaceProps>
