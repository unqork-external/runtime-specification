import { DiscriminatorValue, Property } from '@tsed/schema'

import { DecideConditionTypes } from '../decideConditionTypes.enum'
import { RootDecide } from '../rootDecide'

@DiscriminatorValue(DecideConditionTypes.EXACT)
export class ExactCondition extends RootDecide {
  declare type: DecideConditionTypes.EXACT

  @Property()
  value: string
}
