import { DiscriminatorValue, Required } from '@tsed/schema'

import { TableGoToPreviousPageOperationOptions } from './tableGoToPreviousPage.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TABLE_GO_TO_PREVIOUS_PAGE)
export class TableGoToPreviousPageOperation extends Operation<OperationTypes.TABLE_GO_TO_PREVIOUS_PAGE> {
  @Required()
  public options: TableGoToPreviousPageOperationOptions = new TableGoToPreviousPageOperationOptions()
}
