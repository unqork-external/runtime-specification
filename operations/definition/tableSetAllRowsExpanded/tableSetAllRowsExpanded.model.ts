import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { TableSetAllRowsExpandedOperationOptions } from './tableSetAllRowsExpanded.options'
import { Stable } from '../../../../decorators/stability/stable.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TABLE_SET_ALL_ROWS_EXPANDED)
@Description('Sets all rows of the Table component to either expanded or collapsed.')
@Stable()
export class TableSetAllRowsExpandedOperation extends Operation<OperationTypes.TABLE_SET_ALL_ROWS_EXPANDED> {
  public type = OperationTypes.TABLE_SET_ALL_ROWS_EXPANDED as const

  @Required()
  public options: TableSetAllRowsExpandedOperationOptions = new TableSetAllRowsExpandedOperationOptions()
}
