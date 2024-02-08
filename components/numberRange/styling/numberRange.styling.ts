import { Property } from '@tsed/schema'

import { NumberRangeStyleTargets } from './numberRangeStyle.targets'

export class NumberRangeStyling {
  @Property()
  targets: NumberRangeStyleTargets
}
