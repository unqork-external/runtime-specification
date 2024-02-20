import { DiscriminatorValue, Required } from '@tsed/schema'

import { TableSetAllRowsExpandedOperationOptions } from './tableSetAllRowsExpanded.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TABLE_SET_ALL_ROWS_EXPANDED)
export class TableSetAllRowsExpandedOperation extends Operation<OperationTypes.TABLE_SET_ALL_ROWS_EXPANDED> {
  public type = OperationTypes.TABLE_SET_ALL_ROWS_EXPANDED as const

  @Required()
  public options: TableSetAllRowsExpandedOperationOptions = new TableSetAllRowsExpandedOperationOptions()
}
