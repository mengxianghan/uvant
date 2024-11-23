export const buttonType = ['default', 'primary', 'success', 'warning', 'danger'] as const
export type ButtonType = (typeof buttonType)[number]

export const buttonSize = ['large', 'normal', 'small', 'mini'] as const
export type ButtonSize = (typeof buttonSize)[number]

export const buttonIconPosition = ['left', 'right'] as const
export type ButtonIconPosition = (typeof buttonIconPosition)[number]
