import { CheckboxProps } from '@mui/material/Checkbox/Checkbox'
import { DiscriminatorValue, Property, Required } from '@tsed/schema'

import { BaseComponentDefinition } from '../../baseComponentInterface/base.component.definition'
import { Display } from '../../componentComposition/display/component.display'

@DiscriminatorValue('muiCheckbox')
export class MuiCheckboxComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'muiCheckbox' = 'muiCheckbox' as const

  @Property()
  checkboxProps: CheckboxProps | undefined

  @Property(Display)
  display: Display = new Display()
}
