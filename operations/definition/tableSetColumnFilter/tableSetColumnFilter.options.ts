import { CollectionOf, Description, Required } from '@tsed/schema'

import { ColumnFilter } from '../../../components/muiBasicTable/filters/columnFilter'

export class TableSetColumnFilterOperationOptions {
  @Required()
  @Description('Key of the Table component to set column filtering')
  targetKey: string

  @Required()
  @Description('The columns of the Table component to set filtering.')
  @CollectionOf(ColumnFilter)
  filters: ColumnFilter[]
}
