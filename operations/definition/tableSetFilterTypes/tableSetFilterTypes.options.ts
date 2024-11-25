import { CollectionOf, Description, Required } from '@tsed/schema'

import { ColumnFilterType } from '../../../components/muiBasicTable/filters/columnFilterType'

export class TableSetFilterTypesOperationOptions {
  @Required()
  @Description('Key of the Table component to set column filtering')
  targetKey: string

  @Required()
  @Description('The columns of the Table component to set filtering.')
  @CollectionOf(ColumnFilterType)
  filters: ColumnFilterType[]
}
