import { DiscriminatorValue, Required } from '@tsed/schema'

import { TableSetColumnWidthOperationOptions } from './tableSetColumnWidth.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TABLE_SET_COLUMN_WIDTH)
export class TableSetColumnWidthOperation extends Operation<OperationTypes.TABLE_SET_COLUMN_WIDTH> {
  @Required()
  public type = OperationTypes.TABLE_SET_COLUMN_WIDTH as const

  @Required()
  public options: TableSetColumnWidthOperationOptions = new TableSetColumnWidthOperationOptions()
}
