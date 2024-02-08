import { CollectionOf, Default, Description } from '@tsed/schema'

import { IconComponentDefinition } from '../icon'

export class OptionAdornments {
  @CollectionOf(IconComponentDefinition)
  @Description('Left Icon definition.')
  left: IconComponentDefinition[]

  @CollectionOf(IconComponentDefinition)
  @Description('Right Icon definition.')
  right: IconComponentDefinition[]
}
