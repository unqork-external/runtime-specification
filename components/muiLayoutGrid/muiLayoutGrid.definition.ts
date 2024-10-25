import type { GridTypeMap } from '@mui/material/Grid/Grid'
import { CollectionOf, Description, DiscriminatorValue, Optional, Property, Required } from '@tsed/schema'

import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import { Display } from '../../component-composition/display/component.display'
import { StandardArrayNestable } from '../../nestables'

@DiscriminatorValue('muiLayoutGrid')
export class MuiLayoutGridComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'muiLayoutGrid' = 'muiLayoutGrid' as const

  @CollectionOf(BaseComponentDefinition)
  components?: BaseComponentDefinition[]

  @Property(Display)
  display: Display = new Display()

  @Optional()
  gridProps: GridTypeMap['props']

  @Property()
  nestables = { childIds: new StandardArrayNestable() }
}

export class MuiLayoutGridComponentState extends MuiLayoutGridComponentDefinition {
  @Required()
  @Description('Child ids for all nestable references within the component.')
  childIds: string[] = []
}
