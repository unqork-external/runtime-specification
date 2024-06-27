import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { TableToggleGroupingOperationOptions } from './tableToggleGrouping.options'
import { OpsBuilderStable, Stable } from '../../../../decorators/stability'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@Description('Toggle the enableGrouping feature.')
@DiscriminatorValue(OperationTypes.TABLE_TOGGLE_GROUPING)
@Stable()
@OpsBuilderStable()
export class TableToggleGroupingOperation extends Operation<OperationTypes.TABLE_TOGGLE_GROUPING> {
  public type = OperationTypes.TABLE_TOGGLE_GROUPING as const

  @Required()
  public options: TableToggleGroupingOperationOptions = new TableToggleGroupingOperationOptions()
}
