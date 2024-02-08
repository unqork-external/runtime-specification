import { DiscriminatorValue, Required } from '@tsed/schema'

import { TableGoToNextPageOperationOptions } from './tableGoToNextPage.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TABLE_GO_TO_NEXT_PAGE)
export class TableGoToNextPageOperation extends Operation<OperationTypes.TABLE_GO_TO_NEXT_PAGE> {
  @Required()
  public options: TableGoToNextPageOperationOptions = new TableGoToNextPageOperationOptions()
}
