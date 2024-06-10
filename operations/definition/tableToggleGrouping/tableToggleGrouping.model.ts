import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { TableToggleGroupingOperationOptions } from './tableToggleGrouping.options'
import { Stable } from '../../../../decorators/stability/stable.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@Description('Toggle the enableGrouping feature.')
@Stable()
@DiscriminatorValue(OperationTypes.TABLE_TOGGLE_GROUPING)
export class TableToggleGroupingOperation extends Operation<OperationTypes.TABLE_TOGGLE_GROUPING> {
  public type = OperationTypes.TABLE_TOGGLE_GROUPING as const

  @Required()
  public options: TableToggleGroupingOperationOptions = new TableToggleGroupingOperationOptions()
}
