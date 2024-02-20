import { DiscriminatorValue, Required } from '@tsed/schema'

import { TableToGoFirstPageOperationOptions } from './tableToGoFirstPage.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TABLE_GO_TO_FIRST_PAGE)
export class TableToGoFirstPageOperation extends Operation<OperationTypes.TABLE_GO_TO_FIRST_PAGE> {
  public type = OperationTypes.TABLE_GO_TO_FIRST_PAGE as const

  @Required()
  public options: TableToGoFirstPageOperationOptions = new TableToGoFirstPageOperationOptions()
}
