import { DiscriminatorKey, Enum } from '@tsed/schema'

import { DecideConditionTypes } from './decideConditionTypes.enum'

export class RootDecide {
  @DiscriminatorKey()
  @Enum(DecideConditionTypes)
  declare type: DecideConditionTypes
}
