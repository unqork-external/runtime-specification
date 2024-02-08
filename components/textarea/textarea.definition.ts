import { Const, Property, Default, Description, DiscriminatorValue, Integer } from '@tsed/schema'

import { TextareaFormat } from './textareaFormat'
import { TextareaValidation } from './textareaValidation'
import { BaseComponentDefinition } from '../../baseComponentInterface/base.component.definition'
import { Display } from '../../componentComposition/display/component.display'
import { InputField } from '../../componentComposition/input/component.input'

@DiscriminatorValue('textarea')
export class TextareaComponentDefinition extends BaseComponentDefinition {
  @Const('textarea')
  @Description('Type of the component.')
  type: 'textarea' = 'textarea' as const

  @Property(Display)
  @Description('Display settings of the textarea.')
  display: Display = new Display()

  @Property(InputField)
  @Description('Field settings of the textarea.')
  field: InputField = new InputField()

  @Integer()
  @Default(3)
  @Description('number of rows that are visible in the textarea.')
  rows: number = 3

  @Property(TextareaFormat)
  @Description('Format options of the textarea.')
  format: TextareaFormat = new TextareaFormat()

  @Description('Value of the textarea.')
  declare value: string

  @Property(TextareaValidation)
  @Description('Validation of the textarea.')
  validation: TextareaValidation = new TextareaValidation()
}
