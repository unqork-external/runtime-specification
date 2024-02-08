import { Const, Description, DiscriminatorValue, Property } from '@tsed/schema'

import { CheckboxesInputField } from './checkboxesInputField'
import { CheckboxesOptions } from './checkboxesOptions'
import { BaseComponentDefinition } from '../../baseComponentInterface/base.component.definition'
import { Display } from '../../componentComposition/display/component.display'

@DiscriminatorValue('checkboxes')
export class CheckboxesComponentDefinition extends BaseComponentDefinition {
  @Const('checkboxes')
  @Description('Type of the component.')
  type: 'checkboxes' = 'checkboxes' as const

  @Property(Display)
  display: Display = new Display()

  @Property(CheckboxesInputField)
  @Description('Field settings of the checkboxes component.')
  field: CheckboxesInputField = new CheckboxesInputField()

  @Property(CheckboxesOptions)
  @Description('Options which are taken from the data source')
  options: CheckboxesOptions = new CheckboxesOptions()

  @Property()
  defaultValue: string

  @Description('Store values for selected checkboxes')
  value: string[] = []
}
