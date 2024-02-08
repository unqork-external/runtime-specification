import { Property } from '@tsed/schema'

import { DateInputStyleTargets } from './dateInputStyle.targets'
import type { StylingModel } from '../../../styling/styling.model'

export class DateInputStyling implements StylingModel<DateInputStyleTargets> {
  @Property()
  targets: DateInputStyleTargets
}
