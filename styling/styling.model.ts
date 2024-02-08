import { Property } from '@tsed/schema'

import type { CssClassOrProps } from './cssClassOrProps.type'

export class StylingModel<T extends Record<keyof T, CssClassOrProps>> {
  @Property()
  targets: T
}

type CssClassName = string

export type RuntimeStylingTarget<T> = Partial<Record<keyof T, CssClassName>>
