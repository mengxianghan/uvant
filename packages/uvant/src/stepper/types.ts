import type { ExtractPropTypes } from 'vue'
import type { stepperProps } from './stepper'

export const stepperTheme = ['default', 'round'] as const
export type StepperTheme = (typeof stepperTheme)[number]

export type StepperProps = ExtractPropTypes<typeof stepperProps>
