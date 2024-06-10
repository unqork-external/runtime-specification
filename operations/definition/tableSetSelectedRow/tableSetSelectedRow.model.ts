import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { TableSetSelectedRowOperationOptions } from './tableSetSelectedRow.options'
import { Stable } from '../../../../decorators/stability/stable.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TABLE_SET_SELECTED_ROW)
@Description('Highlights the selected row(s) in the Table component.')
@Stable()
export class TableSetSelectedRowOperation extends Operation<OperationTypes.TABLE_SET_SELECTED_ROW> {
  public type = OperationTypes.TABLE_SET_SELECTED_ROW as const

  @Required()
  public options: TableSetSelectedRowOperationOptions = new TableSetSelectedRowOperationOptions()
}
