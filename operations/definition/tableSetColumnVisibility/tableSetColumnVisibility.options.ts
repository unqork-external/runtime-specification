import { Description, Required } from '@tsed/schema'

import { ColumnVisibility } from '../../../components/muiBasicTable/columns/visibility/columnVisibility'

export class TableSetColumnVisibilityOptions {
  @Required()
  @Description('Key of the target entity')
  targetKey: string

  @Required()
  @Description('Which column(s) are we setting visibility for?')
  column: string | string[]

  @Required()
  @Description('Should this column be visible or hidden?')
  visibility: ColumnVisibility
}
