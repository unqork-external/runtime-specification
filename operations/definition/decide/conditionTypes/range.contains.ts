import { DiscriminatorValue, Property } from '@tsed/schema'

import { DecideConditionTypes } from '../decideConditionTypes.enum'
import { RootDecide } from '../rootDecide'

@DiscriminatorValue(DecideConditionTypes.RANGE)
export class RangeContains extends RootDecide {
  declare type: DecideConditionTypes.RANGE

  @Property()
  declare targetKey: string

  @Property()
  minimum: number

  @Property()
  maximum: number
}
