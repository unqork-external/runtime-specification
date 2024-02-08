import { DiscriminatorValue, Required } from '@tsed/schema'

import { TableGoToLastPageOperationOptions } from './tableGoToLastPage.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TABLE_GO_TO_LAST_PAGE)
export class TableGoToLastPageOperation extends Operation<OperationTypes.TABLE_GO_TO_LAST_PAGE> {
  @Required()
  public options: TableGoToLastPageOperationOptions = new TableGoToLastPageOperationOptions()
}
