import { Any, CollectionOf, Const, Description, DiscriminatorValue, Optional, Property, Required } from '@tsed/schema'

import { RadioStyling } from './radio.styling'
import { RadioField } from './radioField'
import { RadioOptions } from './radioOptions'
import { RadioTargets } from './radioTargets.enum'
import { ViewTargets } from '../../../decorators'
import { Examples } from '../../../decorators/schema/examples.decorator'
import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import { Display } from '../../component-composition/display/component.display'
import type { SignalTargets } from '../../signals'
import { targetedStylingExample } from '../../styling/targeted.styling.example'

export class RadioOption {
  @Description('label of the radio option.')
  label: string

  @Any('string', 'number')
  @Description('value of the radio option.')
  value: string | number
}

@DiscriminatorValue('radio')
@ViewTargets(RadioTargets)
export class RadioComponentDefinition extends BaseComponentDefinition {
  @Const('radio')
  type: string = 'radio'

  @Property()
  display: Display = new Display()

  @Property()
  field: RadioField = new RadioField()

  @Property()
  options: RadioOptions = new RadioOptions()

  @Required()
  @Description('default value of the Radio component.')
  defaultValue: string

  @CollectionOf(RadioOption)
  @Description('The values to use for the Radio field')
  values: RadioOption[] = []

  @Optional()
  @Any('string', 'boolean')
  @Description('Value of the Radio component.')
  declare value?: string | boolean

  @Examples(targetedStylingExample)
  declare styling: RadioStyling

  @Property()
  declare signals: SignalTargets<RadioTargets>
}
