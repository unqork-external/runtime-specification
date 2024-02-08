import { CollectionOf, Const, Default, Description, DiscriminatorValue, Example, Property } from '@tsed/schema'

import { TextfieldSimpleViewModel } from './simpleView/textfieldSimpleView.model'
import { TextfieldStyling } from './styling/textfield.styling'
import type { TextfieldEvents } from './textfield.events'
import { TextFieldFormat } from './textfieldFormat'
import { TextFieldValidation } from './textfieldValidation'
import { trimAll } from '../../../utilities'
import { BaseComponentDefinition } from '../../baseComponentInterface/base.component.definition'
import {
  LeftAdornmentNestable,
  RightAdornmentNestable,
} from '../../componentComposition/adornments/component.adornments'
import { Display } from '../../componentComposition/display/component.display'
import { InputField } from '../../componentComposition/input/component.input'
import { targetedStylingExample } from '../../examples/styling/targeted.styling.example'

class TextfieldAdornments {
  @CollectionOf(BaseComponentDefinition)
  left: BaseComponentDefinition[] = []

  @CollectionOf(BaseComponentDefinition)
  right: BaseComponentDefinition[] = []
}

@DiscriminatorValue('textfield')
@Description(
  trimAll(`
    The Textfield component is part of the core range of input components.
    Next to Buttons, text input components like Text Field and Text Area, are some of the most-frequently used inputs.
    Textfield components display alphanumeric values that can fit on a single line.
    Use a Textfield component for short-form information, like allowing end-user's to enter their name.
    You can also use a Textfield component to display values another component passes to it.
  `),
)
export class TextFieldComponentDefinition extends BaseComponentDefinition {
  @Const('textfield')
  @Description('Type of the component.')
  type: 'textfield' = 'textfield' as const

  @Property()
  @Default(false)
  useSimpleView: boolean = false

  @Property()
  simpleView: TextfieldSimpleViewModel

  @Property(Display)
  @Description('Display settings for the textfield component.')
  display: Display = new Display()

  @Property(InputField)
  @Description('Field settings for the textfield component.')
  field: InputField = new InputField()

  @Property(TextFieldFormat)
  @Description('Formatting settings for the textfield component.')
  format: TextFieldFormat = new TextFieldFormat()

  @Description(
    trimAll(`
      Value of the textfield. A textfield always stores its data as a string.
    `),
  )
  declare value: string

  @Property(TextFieldValidation)
  @Description(
    trimAll(`
      It holds information about the existing validations including validation types, 
      rules, error messages, and results when they run
    `),
  )
  validation: TextFieldValidation = new TextFieldValidation()

  @Description(
    trimAll(`
      An object that maps a Runtime Event to a list of operations. Besides the default supported events, 
      this object can also hold custom event handlers, for example, when a Watcher is attached to the field.
    `),
  )
  @Example(
    `
      The snippet below defines a handler for the textfield's blur event
      and will set an element identified by 'another-element' to hidden when that happens
      {
        eventHandlers: {
          BLUR: {
            operations: [ 
              type: SET_PROPERTY,
              options: {
                value: false,
                targetKey: 'another-element',
                property: 'display.hidden',
              },  
            ]
          }
        }
      }
    `.trim(),
  )
  @Property()
  declare eventHandlers: TextfieldEvents | undefined

  @Property(TextfieldAdornments)
  adornments? = new TextfieldAdornments()

  @Description(
    trimAll(`
      Fully qualified child keys for adornments in the left slot.
      Maintained by nestable api.
    `),
  )
  left?: string[] = []

  @Description(
    trimAll(`
      Fully qualified child keys for adornments in the right slot.
      Maintained by nestable api.
    `),
  )
  right?: string[] = []

  @Description(
    trimAll(`
      Nestable definitions for adorned textfield component.
      NOTE: This are currently only rendered within grid, even
      though they're designed to be uniform across all textfields
      and will be implemented there at a later date
    `),
  )
  nestables = {
    left: new LeftAdornmentNestable(),
    right: new RightAdornmentNestable(),
  }

  @Property()
  @Description('Object that maps customized CSS styling to specific targets on the Textfield.')
  @Example(targetedStylingExample)
  declare styling: TextfieldStyling
}
