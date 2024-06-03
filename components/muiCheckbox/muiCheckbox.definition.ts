import { CheckboxProps } from '@mui/material/Checkbox/Checkbox'
import { DiscriminatorValue, Property, Required } from '@tsed/schema'

import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import { Display } from '../../component-composition/display/component.display'

@DiscriminatorValue('muiCheckbox')
export class MuiCheckboxComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'muiCheckbox' = 'muiCheckbox' as const

  @Property()
  checkboxProps: CheckboxProps | undefined

  @Property(Display)
  display: Display = new Display()
}
