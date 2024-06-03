import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { TableGoToPreviousPageOperationOptions } from './tableGoToPreviousPage.options'
import { Stable } from '../../../../decorators/stability/stable.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TABLE_GO_TO_PREVIOUS_PAGE)
@Description('Navigates to the previous page of a paginated Table component.')
@Stable()
export class TableGoToPreviousPageOperation extends Operation<OperationTypes.TABLE_GO_TO_PREVIOUS_PAGE> {
  public type = OperationTypes.TABLE_GO_TO_PREVIOUS_PAGE as const

  @Required()
  public options: TableGoToPreviousPageOperationOptions = new TableGoToPreviousPageOperationOptions()
}
