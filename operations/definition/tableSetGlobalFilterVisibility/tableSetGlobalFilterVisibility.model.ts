import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { TableSetGlobalFilterVisibilityOperationOptions } from './tableSetGlobalFilterVisibility.options'
import { Stable } from '../../../../decorators/stability/stable.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@Description('Toggles global filter visibility of the Table component.')
@Stable()
@DiscriminatorValue(OperationTypes.TABLE_SET_GLOBAL_FILTER_VISIBILITY)
export class TableSetGlobalFilterVisibilityOperation extends Operation<OperationTypes.TABLE_SET_GLOBAL_FILTER_VISIBILITY> {
  public type = OperationTypes.TABLE_SET_GLOBAL_FILTER_VISIBILITY as const

  @Required()
  public options: TableSetGlobalFilterVisibilityOperationOptions = new TableSetGlobalFilterVisibilityOperationOptions()
}
