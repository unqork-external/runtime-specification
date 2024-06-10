import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { TableSortByColumnOperationOptions } from './tableSortByColumn.options'
import { Stable } from '../../../../decorators/stability/stable.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TABLE_SORT_BY_COLUMN)
@Description('Peforms column sorting in the Table component.')
@Stable()
export class TableSortByColumnOperation extends Operation<OperationTypes.TABLE_SORT_BY_COLUMN> {
  public type = OperationTypes.TABLE_SORT_BY_COLUMN as const

  @Required()
  public options: TableSortByColumnOperationOptions = new TableSortByColumnOperationOptions()
}
