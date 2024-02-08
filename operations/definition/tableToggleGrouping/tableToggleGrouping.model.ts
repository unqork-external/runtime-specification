import { DiscriminatorValue, Required } from '@tsed/schema'

import { TableToggleGroupingOperationOptions } from './tableToggleGrouping.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TABLE_TOGGLE_GROUPING)
export class TableToggleGroupingOperation extends Operation<OperationTypes.TABLE_TOGGLE_GROUPING> {
  @Required()
  public options: TableToggleGroupingOperationOptions = new TableToggleGroupingOperationOptions()
}
