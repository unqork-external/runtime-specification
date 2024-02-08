import { DiscriminatorValue, Required } from '@tsed/schema'

import { TableAddRowOperationOptions } from './tableAddRow.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TABLE_ADD_ROW)
export class TableAddRowOperation extends Operation<OperationTypes.TABLE_ADD_ROW> {
  @Required()
  public options: TableAddRowOperationOptions = new TableAddRowOperationOptions()
}
