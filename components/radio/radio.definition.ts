import { Any, Const, Description, DiscriminatorValue, Property } from '@tsed/schema'

import { RadioField } from './radioField'
import { RadioOptions } from './radioOptions'
import { BaseComponentDefinition } from '../../baseComponentInterface/base.component.definition'
import { Display } from '../../componentComposition/display/component.display'

export class RadioOption {
  @Property()
  label: string

  @Property()
  @Any()
  value: string | number
}

@DiscriminatorValue('radio')
export class RadioComponentDefinition extends BaseComponentDefinition {
  @Const('radio')
  type: string = 'radio'

  @Property(Display)
  display: Display = new Display()

  @Property(RadioField)
  field: RadioField = new RadioField()

  @Property(RadioOptions)
  options: RadioOptions = new RadioOptions()

  @Property()
  defaultValue: string

  @Description('The values to use for the Radio field')
  values: RadioOption[]

  @Description('Value of the radio.')
  declare value?: string
}
