import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { TableGoToNextPageOperationOptions } from './tableGoToNextPage.options'
import { Stable } from '../../../../decorators/stability/stable.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TABLE_GO_TO_NEXT_PAGE)
@Description('Navigates to the next page of a paginated Table component.')
@Stable()
export class TableGoToNextPageOperation extends Operation<OperationTypes.TABLE_GO_TO_NEXT_PAGE> {
  public type = OperationTypes.TABLE_GO_TO_NEXT_PAGE as const

  @Required()
  public options: TableGoToNextPageOperationOptions = new TableGoToNextPageOperationOptions()
}
