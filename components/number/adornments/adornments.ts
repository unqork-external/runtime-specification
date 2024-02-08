import { CollectionOf } from '@tsed/schema'

import { BaseComponentDefinition } from '../../../baseComponentInterface'

export class NumberAdornments {
  @CollectionOf(BaseComponentDefinition)
  left: BaseComponentDefinition[] = []

  @CollectionOf(BaseComponentDefinition)
  right: BaseComponentDefinition[] = []
}
