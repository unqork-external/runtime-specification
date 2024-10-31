import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { TableSetColumnFilterOperationOptions } from './tableSetColumnFilter.options'
import { OpsBuilderStable, Stable } from '../../../../decorators/stability'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TABLE_SET_COLUMN_FILTER)
@Description('Add filter types and/or values to apply to the Table component.')
@Stable()
@OpsBuilderStable()
export class TableSetColumnFilterOperation extends Operation<OperationTypes.TABLE_SET_COLUMN_FILTER> {
  public type = OperationTypes.TABLE_SET_COLUMN_FILTER as const

  @Required()
  public options: TableSetColumnFilterOperationOptions = new TableSetColumnFilterOperationOptions()
}
