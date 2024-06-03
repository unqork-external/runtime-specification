import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { TableRemoveRowsOperationOptions } from './tableRemoveRows.options'
import { Stable } from '../../../../decorators/stability/stable.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TABLE_REMOVE_ROWS)
@Description('Removes row(s) from the Table component at specified index(es).')
@Stable()
export class TableRemoveRowsOperation extends Operation<OperationTypes.TABLE_REMOVE_ROWS> {
  public type = OperationTypes.TABLE_REMOVE_ROWS as const

  @Required()
  public options: TableRemoveRowsOperationOptions = new TableRemoveRowsOperationOptions()
}
