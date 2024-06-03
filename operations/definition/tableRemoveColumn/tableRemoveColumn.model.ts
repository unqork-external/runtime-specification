import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { TableRemoveColumnOperationOptions } from './tableRemoveColumn.options'
import { Stable } from '../../../../decorators/stability/stable.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TABLE_REMOVE_COLUMN)
@Description('Removes columns from the Table based on provided column IDs.')
@Stable()
export class TableRemoveColumnOperation extends Operation<OperationTypes.TABLE_REMOVE_COLUMN> {
  public type = OperationTypes.TABLE_REMOVE_COLUMN as const

  @Required()
  public options: TableRemoveColumnOperationOptions = new TableRemoveColumnOperationOptions()
}
