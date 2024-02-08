import { Const, Default, Description, DiscriminatorValue, Property } from '@tsed/schema'

import { TimerFormat } from './timerFormat'
import { TimerOptions } from './timerOptions'
import { BaseComponentDefinition } from '../../baseComponentInterface/base.component.definition'
import { Display } from '../../componentComposition/display/component.display'
import { InputField } from '../../componentComposition/input/component.input'

@DiscriminatorValue('timer')
export class TimerComponentDefinition extends BaseComponentDefinition {
  @Const('timer')
  @Description('Type of the component.')
  type: 'timer' = 'timer' as const

  @Property(Display)
  @Description('Display settings of the timer.')
  display: Display = new Display()

  @Property(InputField)
  @Description('Field settings of the timer.')
  field: InputField = new InputField()

  @Property(TimerOptions)
  @Description('Field settings of the timer.')
  options: TimerOptions = new TimerOptions()

  @Property(TimerFormat)
  @Description('Format options of the textfield.')
  format: TimerFormat = new TimerFormat()

  @Description('Time in seconds remaining after it starts counting.')
  declare value?: number
}
