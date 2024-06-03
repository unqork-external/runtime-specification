import { Default, Description, DiscriminatorValue, Optional, Property, Required } from '@tsed/schema'

import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import { Display } from '../../component-composition/display/component.display'

@DiscriminatorValue('confetti')
export class ConfettiComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'confetti' = 'confetti' as const

  @Property(Display)
  display: Display = new Display()

  @Optional()
  @Default(false)
  @Description('`hideConfetti` allows you to hide the confetti display on demand.')
  hideConfetti: boolean = false
}
