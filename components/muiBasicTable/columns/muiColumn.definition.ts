import { Description, DiscriminatorValue, Property } from '@tsed/schema'

import { BaseComponentDefinition } from '../../../base-component-interface'

@DiscriminatorValue('muiColumn')
export class MuiColumnDefinition extends BaseComponentDefinition {
  @Property()
  @Description(`Flag for resizing column width`)
  allowResize: boolean = true

  @Property()
  @Description(`Flag for reordering the column on the table`)
  allowReorder: boolean = true

  @Property()
  @Description(`Flag for filtering rows based on this column`)
  allowFilter: boolean = true

  @Property()
  @Description(`Flag for sorting rows based on this column`)
  allowSort: boolean = true

  @Property()
  component?: BaseComponentDefinition
}
