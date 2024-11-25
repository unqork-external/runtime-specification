import { Description, DiscriminatorValue, Optional, Property } from '@tsed/schema'

import { MuiColumnSizingDefinition } from './sizing/muiColumnSizing.definition'

@DiscriminatorValue('muiColumn')
export class MuiColumnDefinition {
  @Optional()
  @Description(`Column label`)
  label?: string

  @Optional()
  @Description(`Configurations to control column sizing`)
  columnSizing?: MuiColumnSizingDefinition

  @Property()
  @Description('filter type of the column')
  filterType: string
}
