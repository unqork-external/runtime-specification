import { CollectionOf, Default, Description, Optional } from '@tsed/schema'

import { IconComponentDefinition } from '../icon'

export class OptionAdornments {
  @CollectionOf(IconComponentDefinition)
  @Description('Left Icon definition.')
  @Optional()
  @Default([])
  left: IconComponentDefinition[] = []

  @CollectionOf(IconComponentDefinition)
  @Description('Right Icon definition.')
  @Optional()
  @Default([])
  right: IconComponentDefinition[] = []
}
