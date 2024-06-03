import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { TableSetActionToolbarVisibilityOperationOptions } from './tableSetActionToolbarVisibility.options'
import { Stable } from '../../../../decorators/stability/stable.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TABLE_SET_ACTION_TOOLBAR_VISIBILITY)
@Description('Show/Hide top or bottom toolbars for the Table component.')
@Stable()
export class TableSetActionToolbarVisibilityOperation extends Operation<OperationTypes.TABLE_SET_ACTION_TOOLBAR_VISIBILITY> {
  public type = OperationTypes.TABLE_SET_ACTION_TOOLBAR_VISIBILITY as const

  @Required()
  public options: TableSetActionToolbarVisibilityOperationOptions =
    new TableSetActionToolbarVisibilityOperationOptions()
}
