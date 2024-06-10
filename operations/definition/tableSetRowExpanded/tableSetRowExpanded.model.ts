import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { TableSetRowExpandedOperationOptions } from './tableSetRowExpanded.options'
import { Stable } from '../../../../decorators/stability/stable.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@Description('Expands/Collapses a parent row group in the Table component.')
@Stable()
@DiscriminatorValue(OperationTypes.TABLE_SET_ROW_EXPANDED)
export class TableSetRowExpandedOperation extends Operation<OperationTypes.TABLE_SET_ROW_EXPANDED> {
  public type = OperationTypes.TABLE_SET_ROW_EXPANDED as const

  @Required()
  public options: TableSetRowExpandedOperationOptions = new TableSetRowExpandedOperationOptions()
}
