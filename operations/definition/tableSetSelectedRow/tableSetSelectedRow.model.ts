import { DiscriminatorValue, Required } from '@tsed/schema'

import { TableSetSelectedRowOperationOptions } from './tableSetSelectedRow.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TABLE_SET_SELECTED_ROW)
export class TableSetSelectedRowOperation extends Operation<OperationTypes.TABLE_SET_SELECTED_ROW> {
  @Required()
  public options: TableSetSelectedRowOperationOptions = new TableSetSelectedRowOperationOptions()
}
