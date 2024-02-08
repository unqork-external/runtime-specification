import { CollectionOf } from '@tsed/schema'

import { BaseComponentDefinition } from '../../../baseComponentInterface'

export class SingleCheckboxAdornments {
  @CollectionOf(BaseComponentDefinition)
  left: BaseComponentDefinition[] = []

  @CollectionOf(BaseComponentDefinition)
  right: BaseComponentDefinition[] = []
}
