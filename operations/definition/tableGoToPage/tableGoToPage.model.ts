import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { TableGoToPageOperationOptions } from './tableGoToPage.options'
import { Stable } from '../../../../decorators/stability/stable.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TABLE_GO_TO_PAGE)
@Description('Navigates to a specific page of a paginated Table component.')
@Stable()
export class TableGoToPageOperation extends Operation<OperationTypes.TABLE_GO_TO_PAGE> {
  public type = OperationTypes.TABLE_GO_TO_PAGE as const

  @Required()
  public options: TableGoToPageOperationOptions = new TableGoToPageOperationOptions()
}
