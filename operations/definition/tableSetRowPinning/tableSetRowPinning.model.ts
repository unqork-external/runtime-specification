import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { TableSetRowPinningOperationOptions } from './tableSetRowPinning.options'
import { OpsBuilderStable, Stable } from '../../../../decorators/stability'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TABLE_SET_ROW_PINNING)
@Description('Pins rows to the top or bottom of the Table component.')
@Stable()
@OpsBuilderStable()
export class TableSetRowPinningOperation extends Operation<OperationTypes.TABLE_SET_ROW_PINNING> {
  public type = OperationTypes.TABLE_SET_ROW_PINNING as const

  @Required()
  public options: TableSetRowPinningOperationOptions = new TableSetRowPinningOperationOptions()
}
