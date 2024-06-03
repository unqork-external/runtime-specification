import { CollectionOf, Description, Optional } from '@tsed/schema'

import { IconComponentDefinition } from '../icon'

export class OptionAdornments {
  @Optional()
  @CollectionOf(IconComponentDefinition)
  @Description('Left Icon definition.')
  left: IconComponentDefinition[] = []

  @Optional()
  @CollectionOf(IconComponentDefinition)
  @Description('Right Icon definition.')
  right: IconComponentDefinition[] = []
}
