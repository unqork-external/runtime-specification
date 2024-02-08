import { DiscriminatorValue, Required } from '@tsed/schema'

import { TableSetActionToolbarVisibilityOperationOptions } from './tableSetActionToolbarVisibility.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TABLE_SET_ACTION_TOOLBAR_VISIBILITY)
export class TableSetActionToolbarVisibilityOperation extends Operation<OperationTypes.TABLE_SET_ACTION_TOOLBAR_VISIBILITY> {
  @Required()
  public options: TableSetActionToolbarVisibilityOperationOptions =
    new TableSetActionToolbarVisibilityOperationOptions()
}
