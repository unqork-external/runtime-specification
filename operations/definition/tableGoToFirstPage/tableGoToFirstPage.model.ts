import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { TableGoToFirstPageOperationOptions } from './tableGoToFirstPage.options'
import { Stable } from '../../../../decorators/stability/stable.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TABLE_GO_TO_FIRST_PAGE)
@Description('Navigates to the first page of a paginated Table component.')
@Stable()
export class TableGoToFirstPageOperation extends Operation<OperationTypes.TABLE_GO_TO_FIRST_PAGE> {
  public type = OperationTypes.TABLE_GO_TO_FIRST_PAGE as const

  @Required()
  public options: TableGoToFirstPageOperationOptions = new TableGoToFirstPageOperationOptions()
}
