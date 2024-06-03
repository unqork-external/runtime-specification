import { CollectionOf } from '@tsed/schema'

import { BaseComponentDefinition } from '../../base-component-interface'

export class SingleCheckboxAdornments {
  @CollectionOf(BaseComponentDefinition)
  left: BaseComponentDefinition[] = []

  @CollectionOf(BaseComponentDefinition)
  right: BaseComponentDefinition[] = []
}
