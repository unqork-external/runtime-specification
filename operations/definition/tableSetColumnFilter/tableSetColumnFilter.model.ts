import { DiscriminatorValue, Required } from '@tsed/schema'

import { TableSetColumnFilterOperationOptions } from './tableSetColumnFilter.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TABLE_SET_COLUMN_FILTER)
export class TableSetColumnFilterOperation extends Operation<OperationTypes.TABLE_SET_COLUMN_FILTER> {
  @Required()
  public options: TableSetColumnFilterOperationOptions = new TableSetColumnFilterOperationOptions()
}
