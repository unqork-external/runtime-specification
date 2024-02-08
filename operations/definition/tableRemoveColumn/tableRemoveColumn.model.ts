import { DiscriminatorValue, Required } from '@tsed/schema'

import { TableRemoveColumnOperationOptions } from './tableRemoveColumn.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TABLE_REMOVE_COLUMN)
export class TableRemoveColumnOperation extends Operation<OperationTypes.TABLE_REMOVE_COLUMN> {
  @Required()
  public options: TableRemoveColumnOperationOptions = new TableRemoveColumnOperationOptions()
}
