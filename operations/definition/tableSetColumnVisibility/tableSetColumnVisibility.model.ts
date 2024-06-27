import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { TableSetColumnVisibilityOptions } from './tableSetColumnVisibility.options'
import { OpsBuilderStable, Stable } from '../../../../decorators/stability'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TABLE_SET_COLUMN_VISIBILITY)
@Description('Sets the column(s) visibility for the Table component')
@Stable()
@OpsBuilderStable()
export class TableSetColumnVisibilityOperation extends Operation<OperationTypes.TABLE_SET_COLUMN_VISIBILITY> {
  public type = OperationTypes.TABLE_SET_COLUMN_VISIBILITY as const

  @Required()
  public options: TableSetColumnVisibilityOptions = new TableSetColumnVisibilityOptions()
}
