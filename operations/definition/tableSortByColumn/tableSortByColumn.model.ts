import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { TableSortByColumnOperationOptions } from './tableSortByColumn.options'
import { OpsBuilderStable, Stable } from '../../../../decorators/stability'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TABLE_SORT_BY_COLUMN)
@Description('Performs column sorting in the Table component.')
@Stable()
@OpsBuilderStable()
export class TableSortByColumnOperation extends Operation<OperationTypes.TABLE_SORT_BY_COLUMN> {
  public type = OperationTypes.TABLE_SORT_BY_COLUMN as const

  @Required()
  public options: TableSortByColumnOperationOptions = new TableSortByColumnOperationOptions()
}
