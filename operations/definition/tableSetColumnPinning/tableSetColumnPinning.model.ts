import { DiscriminatorValue, Required } from '@tsed/schema'

import { TableSetColumnPinningOperationOptions } from './tableSetColumnPinning.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TABLE_SET_COLUMN_PINNING)
export class TableSetColumnPinningOperation extends Operation<OperationTypes.TABLE_SET_COLUMN_PINNING> {
  public type = OperationTypes.TABLE_SET_COLUMN_PINNING as const

  @Required()
  public options: TableSetColumnPinningOperationOptions = new TableSetColumnPinningOperationOptions()
}
