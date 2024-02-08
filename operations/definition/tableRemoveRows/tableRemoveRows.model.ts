import { DiscriminatorValue, Required } from '@tsed/schema'

import { TableRemoveRowsOperationOptions } from './tableRemoveRows.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TABLE_REMOVE_ROWS)
export class TableRemoveRowsOperation extends Operation<OperationTypes.TABLE_REMOVE_ROWS> {
  @Required()
  public options: TableRemoveRowsOperationOptions = new TableRemoveRowsOperationOptions()
}
