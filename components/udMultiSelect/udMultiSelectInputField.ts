import { Default, Description, Required } from '@tsed/schema'

import { InputField } from '../../componentComposition/input/component.input'

export class UdMultiSelectInputField extends InputField {
  @Description('Allows user to create new option based on text input filter value')
  @Default(false)
  creatable: boolean = false

  @Default(false)
  @Description('Controls the visiblity of the chevron (carat at end of input field).')
  hideChevron?: boolean

  @Description('Gives a maximum height in px the dropdown can be before it scrolls.')
  maxMenuHeight?: number

  @Default(false)
  @Description('Allows multiple values to be entered for this field.')
  multiple?: boolean = false

  @Default(false)
  @Description('Custom clear button will remove the currently selected value.')
  showClearButton?: boolean = false

  @Default(false)
  @Description('React-select has a native clear button to clear the currently selected value.')
  showClearInDropdown?: boolean = false

  @Required()
  @Description('The HTML template for the result data items.')
  @Default('<span>{{ item.label }}</span>')
  template: string = '<span>{{ item.label }}</span>'
}
