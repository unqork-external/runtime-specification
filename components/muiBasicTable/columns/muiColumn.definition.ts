import { Description, DiscriminatorValue, Optional, Property } from '@tsed/schema'

import { MuiColumnSizingDefinition } from './sizing/muiColumnSizing.definition'

@DiscriminatorValue('muiColumn')
export class MuiColumnDefinition {
  @Property()
  @Description(`Flag for reordering the column on the table`)
  allowReorder: boolean = true

  @Property()
  @Description(`Flag for filtering rows based on this column`)
  allowFilter: boolean = true

  @Property()
  @Description(`Flag for sorting rows based on this column`)
  allowSort: boolean = true

  @Optional()
  @Description(`Column label`)
  label?: string

  @Optional()
  @Description(`Configurations to control column sizing`)
  columnSizing?: MuiColumnSizingDefinition
}
