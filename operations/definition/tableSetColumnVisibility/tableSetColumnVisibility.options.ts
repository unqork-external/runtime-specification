import { Description, Enum, Required } from '@tsed/schema'

import { OneOrMany } from '../../../../decorators/schema/oneOrMany.decorator'
import { ColumnVisibility } from '../../../components/muiBasicTable/columns/visibility/columnVisibility'
import { TargetedOperationOptions } from '../../interface'

export class TableSetColumnVisibilityOptions extends TargetedOperationOptions {
  @Required()
  @Description('The column(s) to set visibility for')
  @OneOrMany('string')
  column: string | string[]

  @Required()
  @Description('Indicates the type of visibility for the column(s). Available types are Visible, Hidden or Toggle.')
  @Enum(ColumnVisibility)
  visibility: ColumnVisibility
}
