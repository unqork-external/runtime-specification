import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { TableSetGlobalFilterOperationOptions } from './tableSetGlobalFilter.options'
import { OpsBuilderStable, Stable } from '../../../../decorators/stability'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@Description('Sets filters across all columns of the Table component.')
@DiscriminatorValue(OperationTypes.TABLE_SET_GLOBAL_FILTER)
@Stable()
@OpsBuilderStable()
export class TableSetGlobalFilterOperation extends Operation<OperationTypes.TABLE_SET_GLOBAL_FILTER> {
  public type = OperationTypes.TABLE_SET_GLOBAL_FILTER as const

  @Required()
  public options: TableSetGlobalFilterOperationOptions = new TableSetGlobalFilterOperationOptions()
}
