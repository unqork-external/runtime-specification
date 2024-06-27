import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { TableSetPageSizeOperationOptions } from './tableSetPageSize.options'
import { OpsBuilderStable, Stable } from '../../../../decorators/stability'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@Description('Sets the number of rows displayed per page of the Table component.')
@DiscriminatorValue(OperationTypes.TABLE_SET_PAGE_SIZE)
@Stable()
@OpsBuilderStable()
export class TableSetPageSizeOperation extends Operation<OperationTypes.TABLE_SET_PAGE_SIZE> {
  public type = OperationTypes.TABLE_SET_PAGE_SIZE as const

  @Required()
  public options: TableSetPageSizeOperationOptions = new TableSetPageSizeOperationOptions()
}
