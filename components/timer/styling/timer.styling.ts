import { Description } from '@tsed/schema'

import { TimerStyleTargets } from './timerStyle.targets'
import { StylingModel } from '../../../styling'

export class TimerStyling extends StylingModel<TimerStyleTargets> {
  @Description("Timer's subcomponents that can accept additional styles.")
  targets: TimerStyleTargets
}
