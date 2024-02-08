import { Const, Description, DiscriminatorValue, Property } from '@tsed/schema'

import { DropdownOptions } from './dropdownOptions'
import { BaseComponentDefinition } from '../../baseComponentInterface/base.component.definition'
import { Display } from '../../componentComposition/display/component.display'
import { InputField } from '../../componentComposition/input/component.input'

@DiscriminatorValue('dropdown')
export class DropdownComponentDefinition extends BaseComponentDefinition {
  @Const('dropdown')
  @Description('Type of the component.')
  type: 'dropdown' = 'dropdown' as const

  @Property(Display)
  display: Display = new Display()

  @Property(DropdownOptions)
  @Description('Dropdown options.')
  options: DropdownOptions = new DropdownOptions()

  @Property(InputField)
  @Description('Field settings of the dropdown.')
  field: InputField = new InputField()

  @Description('Value of the dropdown.')
  declare value: string
}
