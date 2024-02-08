import { DiscriminatorValue, Property } from '@tsed/schema'

import { DecideConditionTypes } from '../decideConditionTypes.enum'
import { RootDecide } from '../rootDecide'

@DiscriminatorValue(DecideConditionTypes.CONTAINS)
export class ContainsCondition extends RootDecide {
  declare type: DecideConditionTypes.CONTAINS

  @Property()
  targetKey: string

  @Property()
  value: string
}
