import { Const, DiscriminatorValue, Optional, Required } from '@tsed/schema'

import { TimerStyling } from './styling/timer.styling'
import { TimerTargets } from './targets/timerTargets.enum'
import { TimerFormat } from './timerFormat'
import { TimerOptions } from './timerOptions'
import { Examples } from '../../../decorators/schema/examples.decorator'
import { TrimmedDescription } from '../../../decorators/schema/trimmedDescription.decorator'
import { ViewTargets } from '../../../decorators/viewTargets/viewTargets.decorator'
import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import { Display } from '../../component-composition/display/component.display'
import { InputField } from '../../component-composition/input/component.input'
import type { SignalTargets } from '../../signals'
import { targetedStylingExample } from '../../styling/targeted.styling.example'

@TrimmedDescription(`
  Timer component. Adding time-based rules and logic to user's application. 
  This component can be used to ensure an end-user spends enough time on a page.
  it also limits the amount of time an end-user can stay on a page, 
  automatically reloading a page when the timer expires and detecting if an end-user becomes inactive.
`)
@ViewTargets(TimerTargets)
@DiscriminatorValue('timer')
export class TimerComponentDefinition extends BaseComponentDefinition {
  @Const('timer')
  @Required()
  type: 'timer' = 'timer' as const

  @Optional()
  display: Display = new Display()

  @Optional()
  field: InputField = new InputField()

  @Optional()
  options: TimerOptions = new TimerOptions()

  @Optional()
  format: TimerFormat = new TimerFormat()

  @Optional()
  declare value?: number

  @Optional()
  @Examples(targetedStylingExample)
  declare styling?: TimerStyling

  @Optional()
  declare signals: SignalTargets<TimerTargets>
}
