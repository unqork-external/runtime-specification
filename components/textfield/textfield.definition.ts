import { Const, Default, Description, DiscriminatorValue, Property } from '@tsed/schema'

import { TextfieldSimpleViewModel } from './simpleView/textfieldSimpleView.model'
import { TextfieldStyling } from './textfield.styling'
import { TextFieldFormat } from './textfieldFormat'
import { TextfieldTargets } from './textfieldTargets.enum'
import { TextFieldValidation } from './textfieldValidation'
import { Examples } from '../../../decorators/schema/examples.decorator'
import { TrimmedDescription } from '../../../decorators/schema/trimmedDescription.decorator'
import { ViewTargets } from '../../../decorators/viewTargets/viewTargets.decorator'
import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import {
  LeftAdornmentNestable,
  RightAdornmentNestable,
  StandardAdornmentsProperties,
} from '../../component-composition/adornments/component.adornments'
import { InputDisplay } from '../../component-composition/display/component.display'
import { InputField } from '../../component-composition/input/component.input'
import type { SignalTargets } from '../../signals'
import { targetedStylingExample } from '../../styling/targeted.styling.example'

@DiscriminatorValue('textfield')
@TrimmedDescription(`
  The Textfield component is part of the core range of input components.
  Next to Buttons, text input components like Text Field and Text Area, are some of the most-frequently used inputs.
  Textfield components display alphanumeric values that can fit on a single line.
  Use a Textfield component for short-form information, like allowing end-user's to enter their name.
  You can also use a Textfield component to display values another component passes to it.
`)
@ViewTargets(TextfieldTargets)
export class TextFieldComponentDefinition extends BaseComponentDefinition {
  @Const('textfield')
  type: 'textfield' = 'textfield' as const

  @Default(false)
  @Description('Boolean used to determine if the underlying view is simple and un-styled')
  useSimpleView: boolean = false

  @Property()
  simpleView: TextfieldSimpleViewModel

  @Property()
  display: InputDisplay = new InputDisplay()

  @Property()
  field: InputField = new InputField()

  @Property()
  format: TextFieldFormat = new TextFieldFormat()

  @Description('Value of the textfield. A textfield always stores its data as a string.')
  declare value: string

  @Property()
  validation: TextFieldValidation = new TextFieldValidation()

  @Property()
  declare signals: SignalTargets<TextfieldTargets>

  @Property(StandardAdornmentsProperties)
  @Description('Optional icons that can be added to the left or right side of the input field.')
  adornments? = new StandardAdornmentsProperties()

  @TrimmedDescription(`
    Fully qualified child keys for adornments in the left slot.
    Maintained by nestable api.
  `)
  left?: string[] = []

  @TrimmedDescription(`
    Fully qualified child keys for adornments in the right slot.
    Maintained by nestable api.
  `)
  right?: string[] = []

  @TrimmedDescription(`
    Nestable definitions for adorned textfield component.
    NOTE: This are currently only rendered within grid, even
    though they're designed to be uniform across all textfields
    and will be implemented there at a later date
  `)
  nestables = {
    left: new LeftAdornmentNestable(),
    right: new RightAdornmentNestable(),
  }

  @Examples(targetedStylingExample)
  declare styling: TextfieldStyling
}
