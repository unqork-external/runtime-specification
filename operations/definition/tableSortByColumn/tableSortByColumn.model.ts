import { DiscriminatorValue, Required } from '@tsed/schema'

import { TableSortByColumnOperationOptions } from './tableSortByColumn.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TABLE_SORT_BY_COLUMN)
export class TableSortByColumnOperation extends Operation<OperationTypes.TABLE_SORT_BY_COLUMN> {
  @Required()
  public options: TableSortByColumnOperationOptions = new TableSortByColumnOperationOptions()
}
