import { Const, Description, DiscriminatorValue, Property } from '@tsed/schema'

import { TextAreaStyling } from './textArea.styling'
import { TextareaFormat } from './textareaFormat'
import { TextAreaTargets } from './textAreaTargets.enum'
import { TextareaValidation } from './textareaValidation'
import { ViewTargets } from '../../../decorators/viewTargets/viewTargets.decorator'
import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import { Display } from '../../component-composition/display/component.display'
import { InputField } from '../../component-composition/input/component.input'
import { type SignalTargets } from '../../signals'

@DiscriminatorValue('textarea')
@ViewTargets(TextAreaTargets)
export class TextareaComponentDefinition extends BaseComponentDefinition {
  @Const('textarea')
  type: 'textarea' = 'textarea' as const

  @Property()
  display: Display = new Display()

  @Property()
  field: InputField = new InputField()

  @Property()
  format: TextareaFormat = new TextareaFormat()

  @Description('Value of the textarea. A textarea always stores its data as a string.')
  declare value: string

  @Property()
  validation: TextareaValidation = new TextareaValidation()

  @Property()
  declare signals: SignalTargets<TextAreaTargets>

  @Property()
  declare styling: TextAreaStyling
}
