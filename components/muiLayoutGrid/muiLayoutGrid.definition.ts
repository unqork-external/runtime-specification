import type { GridTypeMap } from '@mui/material/Grid/Grid'
import { CollectionOf, DiscriminatorValue, Optional, Property, Required } from '@tsed/schema'

import { BaseComponentDefinition } from '../../baseComponentInterface/base.component.definition'
import { Display } from '../../componentComposition/display/component.display'
import { StandardArrayNestable } from '../../nestables'

@DiscriminatorValue('muiLayoutGrid')
export class MuiLayoutGridComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'muiLayoutGrid' = 'muiLayoutGrid' as const

  @Property()
  childIds: string[] = []

  @CollectionOf(BaseComponentDefinition)
  components?: BaseComponentDefinition[]

  @Property(Display)
  display: Display = new Display()

  @Optional()
  gridProps: GridTypeMap['props']

  @Property()
  nestables = { childIds: new StandardArrayNestable() }
}
