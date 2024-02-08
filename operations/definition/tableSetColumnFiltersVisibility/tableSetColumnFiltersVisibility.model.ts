import { DiscriminatorValue, Required } from '@tsed/schema'

import { TableSetColumnFiltersVisibilityOperationOptions } from './tableSetColumnFiltersVisibility.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TABLE_SET_COLUMN_FILTERS_VISIBILITY)
export class TableSetColumnFiltersVisibilityOperation extends Operation<OperationTypes.TABLE_SET_COLUMN_FILTERS_VISIBILITY> {
  @Required()
  public options: TableSetColumnFiltersVisibilityOperationOptions =
    new TableSetColumnFiltersVisibilityOperationOptions()
}
