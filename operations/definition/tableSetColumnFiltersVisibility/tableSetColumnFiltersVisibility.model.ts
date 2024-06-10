import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { TableSetColumnFiltersVisibilityOperationOptions } from './tableSetColumnFiltersVisibility.options'
import { Stable } from '../../../../decorators/stability/stable.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TABLE_SET_COLUMN_FILTERS_VISIBILITY)
@Description('Show/Hide column filters for the Table component.')
@Stable()
export class TableSetColumnFiltersVisibilityOperation extends Operation<OperationTypes.TABLE_SET_COLUMN_FILTERS_VISIBILITY> {
  public type = OperationTypes.TABLE_SET_COLUMN_FILTERS_VISIBILITY as const

  @Required()
  public options: TableSetColumnFiltersVisibilityOperationOptions =
    new TableSetColumnFiltersVisibilityOperationOptions()
}
