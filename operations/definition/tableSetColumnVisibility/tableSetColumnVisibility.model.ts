import { DiscriminatorValue, Required } from '@tsed/schema'

import { TableSetColumnVisibilityOptions } from './tableSetColumnVisibility.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TABLE_SET_COLUMN_VISIBILITY)
export class TableSetColumnVisibilityOperation extends Operation<OperationTypes.TABLE_SET_COLUMN_VISIBILITY> {
  @Required()
  public options: TableSetColumnVisibilityOptions = new TableSetColumnVisibilityOptions()
}
