import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { TableSetPageSizeOperationOptions } from './tableSetPageSize.options'
import { Stable } from '../../../../decorators/stability/stable.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@Description('Sets the number of rows displayed per page of the Table component.')
@Stable()
@DiscriminatorValue(OperationTypes.TABLE_SET_PAGE_SIZE)
export class TableSetPageSizeOperation extends Operation<OperationTypes.TABLE_SET_PAGE_SIZE> {
  public type = OperationTypes.TABLE_SET_PAGE_SIZE as const

  @Required()
  public options: TableSetPageSizeOperationOptions = new TableSetPageSizeOperationOptions()
}
