import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { TableClearOperationOptions } from './tableClear.options'
import { OpsBuilderStable, Stable } from '../../../../decorators/stability'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TABLE_CLEAR)
@Description('Clears data for the Table component.')
@Stable()
@OpsBuilderStable()
export class TableClearOperation extends Operation<OperationTypes.TABLE_CLEAR> {
  public type = OperationTypes.TABLE_CLEAR as const

  @Required()
  public options: TableClearOperationOptions = new TableClearOperationOptions()
}
