import { Const, Description, DiscriminatorValue, Property } from '@tsed/schema'

import { DropdownOptions } from './dropdown.options'
import { DropdownStyling } from './dropdown.styling'
import { DropdownTargets } from './dropdownTargets.enum'
import { Examples } from '../../../decorators/schema/examples.decorator'
import { TrimmedDescription } from '../../../decorators/schema/trimmedDescription.decorator'
import { ViewTargets } from '../../../decorators/viewTargets/viewTargets.decorator'
import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import { Display } from '../../component-composition/display/component.display'
import { InputField } from '../../component-composition/input/component.input'
import { type SignalTargets } from '../../signals'
import { targetedStylingExample } from '../../styling/targeted.styling.example'

@DiscriminatorValue('dropdown')
@TrimmedDescription(`
  The Dropdown component enables user to select a predefined value from a list of options. 
  It is used primarily in situations where there are more options than is practical for Radio Buttons or 
  Checkboxes components.
`)
@ViewTargets(DropdownTargets)
export class DropdownComponentDefinition extends BaseComponentDefinition {
  @Const('dropdown')
  type: 'dropdown' = 'dropdown' as const

  @Property()
  display: Display = new Display()

  @Property()
  field: InputField = new InputField()

  @Property()
  options: DropdownOptions = new DropdownOptions()

  @Description('Value of the dropdown.')
  declare value: string

  @Property()
  declare signals: SignalTargets<DropdownTargets>

  @Examples(targetedStylingExample)
  declare styling: DropdownStyling
}
