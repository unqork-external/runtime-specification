import { TypographyTypeMap } from '@mui/material/Typography/Typography'
import { DiscriminatorValue, Optional, Property, Required } from '@tsed/schema'

import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import { Display } from '../../component-composition/display/component.display'
import { Field } from '../../component-composition/field/component.field.label'

type TypographyProps = TypographyTypeMap['props']

@DiscriminatorValue('muiTypography')
export class MuiTypographyComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'muiTypography' = 'muiTypography' as const

  @Property(Display)
  display: Display = new Display()

  @Property(Field)
  field?: Field

  @Optional()
  typographyProps: TypographyProps
}
