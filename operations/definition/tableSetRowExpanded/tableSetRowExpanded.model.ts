import { DiscriminatorValue, Required } from '@tsed/schema'

import { TableSetRowExpandedOperationOptions } from './tableSetRowExpanded.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TABLE_SET_ROW_EXPANDED)
export class TableSetRowExpandedOperation extends Operation<OperationTypes.TABLE_SET_ROW_EXPANDED> {
  @Required()
  public options: TableSetRowExpandedOperationOptions = new TableSetRowExpandedOperationOptions()
}
