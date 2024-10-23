import { DiscriminatorValue, Required } from '@tsed/schema'

import { TableSetColumnOrderingOperationOptions } from './tableSetColumnOrdering.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TABLE_SET_COLUMN_ORDERING)
export class TableSetColumnOrderingOperation extends Operation<OperationTypes.TABLE_SET_COLUMN_ORDERING> {
  @Required()
  public type = OperationTypes.TABLE_SET_COLUMN_ORDERING as const

  @Required()
  public options: TableSetColumnOrderingOperationOptions = new TableSetColumnOrderingOperationOptions()
}
