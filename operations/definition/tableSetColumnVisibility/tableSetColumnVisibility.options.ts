import { Description, Enum, Required } from '@tsed/schema'

import { OneOrMany } from '../../../../decorators/schema/oneOrMany.decorator'
import { ColumnVisibility } from '../../../components/muiBasicTable/columns/visibility/columnVisibility'

export class TableSetColumnVisibilityOptions {
  @Required()
  @Description('Key of the target entity')
  targetKey: string

  @Required()
  @Description('Which column(s) are we setting visibility for?')
  @OneOrMany('string')
  column: string | string[]

  @Required()
  @Description('Should this column be visible or hidden?')
  @Enum(ColumnVisibility)
  visibility: ColumnVisibility
}
