import { DiscriminatorValue, Required } from '@tsed/schema'

import { TableSetNavigateDownOnPressEnterOperationOptions } from './tableSetNavigateDownOnPressEnter.options'
import { TrimmedDescription } from '../../../../decorators/schema/trimmedDescription.decorator'
import { OpsBuilderStable, Stable } from '../../../../decorators/stability'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TABLE_SET_NAVIGATE_DOWN_ON_PRESS_ENTER)
@TrimmedDescription(`
  When the Table component is in edit mode, this will change the navigation 
  behavior to traverse down cells when the end-user presses 'Enter'.`)
@Stable()
@OpsBuilderStable()
// eslint-disable-next-line max-len
export class TableSetNavigateDownOnPressEnterOperation extends Operation<OperationTypes.TABLE_SET_NAVIGATE_DOWN_ON_PRESS_ENTER> {
  public type = OperationTypes.TABLE_SET_NAVIGATE_DOWN_ON_PRESS_ENTER as const

  @Required()
  public options: TableSetNavigateDownOnPressEnterOperationOptions =
    new TableSetNavigateDownOnPressEnterOperationOptions()
}
