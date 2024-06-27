import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { TableSetActionToolbarVisibilityOperationOptions } from './tableSetActionToolbarVisibility.options'
import { OpsBuilderStable, Stable } from '../../../../decorators/stability'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TABLE_SET_ACTION_TOOLBAR_VISIBILITY)
@Description('Show/Hide top or bottom toolbars for the Table component.')
@Stable()
@OpsBuilderStable()
export class TableSetActionToolbarVisibilityOperation extends Operation<OperationTypes.TABLE_SET_ACTION_TOOLBAR_VISIBILITY> {
  public type = OperationTypes.TABLE_SET_ACTION_TOOLBAR_VISIBILITY as const

  @Required()
  public options: TableSetActionToolbarVisibilityOperationOptions =
    new TableSetActionToolbarVisibilityOperationOptions()
}
