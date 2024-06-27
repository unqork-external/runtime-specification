import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { TableGoToLastPageOperationOptions } from './tableGoToLastPage.options'
import { OpsBuilderStable, Stable } from '../../../../decorators/stability'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TABLE_GO_TO_LAST_PAGE)
@Description('Navigates to the last page of a paginated Table component.')
@Stable()
@OpsBuilderStable()
export class TableGoToLastPageOperation extends Operation<OperationTypes.TABLE_GO_TO_LAST_PAGE> {
  public type = OperationTypes.TABLE_GO_TO_LAST_PAGE as const

  @Required()
  public options: TableGoToLastPageOperationOptions = new TableGoToLastPageOperationOptions()
}
