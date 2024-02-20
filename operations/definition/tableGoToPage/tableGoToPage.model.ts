import { DiscriminatorValue, Required } from '@tsed/schema'

import { TableGoToPageOperationOptions } from './tableGoToPage.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TABLE_GO_TO_PAGE)
export class TableGoToPageOperation extends Operation<OperationTypes.TABLE_GO_TO_PAGE> {
  public type = OperationTypes.TABLE_GO_TO_PAGE as const

  @Required()
  public options: TableGoToPageOperationOptions = new TableGoToPageOperationOptions()
}
