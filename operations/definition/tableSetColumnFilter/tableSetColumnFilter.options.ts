import { CollectionOf, Description, Required } from '@tsed/schema'

import { ColumnFilter } from '../../../components/muiBasicTable/filters/columnFilter'
import { TargetedOperationOptions } from '../../interface'

export class TableSetColumnFilterOperationOptions extends TargetedOperationOptions {
  @Required()
  @Description('The columns of the Table component to set filtering.')
  @CollectionOf(ColumnFilter)
  filters: ColumnFilter[]
}
