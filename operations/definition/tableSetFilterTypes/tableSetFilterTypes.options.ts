import { CollectionOf, Description, Required } from '@tsed/schema'

import { ColumnFilterType } from '../../../components/muiBasicTable/filters/columnFilterType'

export class TableSetFilterTypesOperationOptions {
  @Required()
  @Description('Key of the Table component to set column filter types.')
  targetKey: string

  @Required()
  @Description('The columns of the Table component to set filter types.')
  @CollectionOf(ColumnFilterType)
  filters: ColumnFilterType[]
}
