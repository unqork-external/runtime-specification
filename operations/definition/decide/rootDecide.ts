import { DiscriminatorKey, Enum, Property } from '@tsed/schema'

import { DecideConditionTypes } from './decideConditionTypes.enum'

export class RootDecide {
  @DiscriminatorKey()
  @Enum(DecideConditionTypes)
  declare type: DecideConditionTypes

  @Property()
  targetKey: string

  @Property()
  propertyPath?: string
}
