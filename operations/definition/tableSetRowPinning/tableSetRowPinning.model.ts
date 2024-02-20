import { DiscriminatorValue, Required } from '@tsed/schema'

import { TableSetRowPinningOperationOptions } from './tableSetRowPinning.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TABLE_SET_ROW_PINNING)
export class TableSetRowPinningOperation extends Operation<OperationTypes.TABLE_SET_ROW_PINNING> {
  public type = OperationTypes.TABLE_SET_ROW_PINNING as const

  @Required()
  public options: TableSetRowPinningOperationOptions = new TableSetRowPinningOperationOptions()
}
