import { DiscriminatorValue, Required } from '@tsed/schema'

import { TableSetGlobalFilterVisibilityOperationOptions } from './tableSetGlobalFilterVisibility.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TABLE_SET_GLOBAL_FILTER_VISIBILITY)
export class TableSetGlobalFilterVisibilityOperation extends Operation<OperationTypes.TABLE_SET_GLOBAL_FILTER_VISIBILITY> {
  @Required()
  public options: TableSetGlobalFilterVisibilityOperationOptions = new TableSetGlobalFilterVisibilityOperationOptions()
}
