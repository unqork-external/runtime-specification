import { DiscriminatorValue, Required } from '@tsed/schema'

import { TableSetPageSizeOperationOptions } from './tableSetPageSize.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TABLE_SET_PAGE_SIZE)
export class TableSetPageSizeOperation extends Operation<OperationTypes.TABLE_SET_PAGE_SIZE> {
  @Required()
  public options: TableSetPageSizeOperationOptions = new TableSetPageSizeOperationOptions()
}
