import { Default, Description, Example, Property } from '@tsed/schema'

import { trimAll } from '../../../utilities'
import { Field, Label } from '../field/component.field.label'

export class InputLabel extends Label {
  @Default(false)
  @Description(
    trimAll(`
      When \`true\`, it hides the label of the component.
      Note the label will still be displayed on the Module Editor.
    `),
  )
  hidden?: boolean = false
}

export class InputHelperText {
  @Description(
    trimAll(`
      Configurable text that is displayed underneath the input field.
      Unlike tooltips, a helper text stays visible under the input field and displays on a single line.
    `),
  )
  text?: string

  @Default(false)
  @Description('When `true`, it hides the helper text of the component.')
  hidden?: boolean = false
}

export class InputSubLabel {
  @Description('Sub-label text for the component')
  text?: string

  @Default(false)
  @Description('Hide sub-label text of the component')
  hidden?: boolean = false
}

export class InputFormat {
  @Description(
    trimAll(
      `The mask pattern to be applied to the input field. An input mask helps the user 
      with the input by ensuring a predefined format. This can be useful for dates, numerics, and phone numbers.
      Default masking definitions are:
      - 9 : numeric
      - a : alphabetical
      - * : alphanumeric

      Note input masks act in a layer above the regular validations, meaning, for instance, 
      a mask can limit the field length to a value shorter than max length`,
    ),
  )
  @Example([
    `(999) 999-9999 - Simple phone number (if you need a more robust component, try Phone Number)`,
    `999-99-9999 - Social Security Number`,
    `99999 - Standard US zip code`,
    `.com.aa - Internet domain with variable two letters at the end`,
  ])
  inputMask?: string

  @Default(false)
  @Description('Prevents browsers from autofilling this field with previously entered values.')
  disableAutoComplete: boolean = false
}

export class InputField extends Field {
  @Property(InputLabel)
  @Description(
    trimAll(`
      Appears above the input field to inform what information is being requested. 
      Labels also help to identify the component on the Module Editor.
    `),
  )
  label: InputLabel = new InputLabel()

  @Property(InputHelperText)
  @Description('Helper Text settings of the component')
  helperText?: InputHelperText = new InputHelperText()

  @Description(
    trimAll(`
      An example or short explanation of the requested input. This appears inside of the 
      input by default and disappears when the user enters a value.
    `),
  )
  @Example(
    'First name - Expects the user to type their first name',
    "Enter your Social Security Number - Expects user's SSN",
    'dd/MM/YYYY - To show an expected date format (if you need a more robust component, try Date Input',
  )
  placeholder?: string

  @Description(
    trimAll(`
      Adds a custom CSS class to the component. This is useful for targeting this component to apply custom styles.
    `),
  )
  customClass?: string

  @Description(
    'A symbol or text to display before the input field. Note this value will not be part of the submitted data',
  )
  @Example('$', '@')
  prefix?: string

  @Description(
    'A symbol or text to display after the input field. Note this value will not be part of the submitted data',
  )
  @Example('.com')
  suffix?: string

  @Description(
    trimAll(`
      Tooltips are floating texts that appear when the cursor is positioned over an icon.
      They can span across multiple lines and provide hints about the requested data.
      Setting this property will make a question mark icon to be displayed 
      on the right side of the component's label, and once the user hovers over it, 
      the tooltip text will appear. Moving the cursor outside the icon's area hides the tooltip.
      Hiding the component's label automatically hides the tooltip.
    `),
  )
  tooltipDescription?: string
}
