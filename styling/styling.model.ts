import { Description, Property } from '@tsed/schema'

import type { CssClassOrProps } from './cssClassOrProps.type'

@Description('Holds information for targeted styling of the component.')
export class StylingModel<T extends Record<keyof T, CssClassOrProps>> {
  @Property()
  targets: T
}

type CssClassName = string

export type RuntimeStylingTargets<T> = Record<keyof T, CssClassName>
export type RuntimeStylingTarget<T> = Partial<RuntimeStylingTargets<T>>
