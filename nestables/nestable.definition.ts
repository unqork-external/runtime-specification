import { AdditionalProperties } from '@tsed/schema'

import { Nestable } from './nestable.types'

export type INestables = Record<string, Nestable>

@AdditionalProperties(true)
export class NestableDef implements INestables {
  [x: string]: Nestable
}
