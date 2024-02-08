import { Const, Description, Property, DiscriminatorValue } from '@tsed/schema'

import { BaseComponentDefinition } from '../../baseComponentInterface/base.component.definition'
import { Display } from '../../componentComposition/display/component.display'
import { InputField, InputFormat } from '../../componentComposition/input/component.input'
import { Validation } from '../../validations/validation'

@DiscriminatorValue('email')
export class EmailComponentDefinition extends BaseComponentDefinition {
  @Const('email')
  @Description('Type of the component.')
  type: 'email' = 'email' as const

  @Property(Display)
  display: Display = new Display()

  @Property(InputField)
  @Description('Field settings of the email.')
  field: InputField = new InputField()

  @Description('Value of the email.')
  declare value: string

  @Property(InputFormat)
  @Description('Format options of the email.')
  format: InputFormat = new InputFormat()

  @Property(Validation)
  @Description('Validation of the email.')
  validation: Validation = new Validation()
}
