import { DiscriminatorValue, Required } from '@tsed/schema'

import { TableSetGlobalFilterOperationOptions } from './tableSetGlobalFilter.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TABLE_SET_GLOBAL_FILTER)
export class TableSetGlobalFilterOperation extends Operation<OperationTypes.TABLE_SET_GLOBAL_FILTER> {
  @Required()
  public options: TableSetGlobalFilterOperationOptions = new TableSetGlobalFilterOperationOptions()
}
