import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { TableAddColumnOperationOptions } from './tableAddColumn.options'
import { OpsBuilderStable, Stable } from '../../../../decorators/stability'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TABLE_ADD_COLUMN)
@Description('Adds columns to the Table component based on provided component definition(s).')
@Stable()
@OpsBuilderStable()
export class TableAddColumnOperation extends Operation<OperationTypes.TABLE_ADD_COLUMN> {
  public type = OperationTypes.TABLE_ADD_COLUMN as const

  @Required()
  public options: TableAddColumnOperationOptions = new TableAddColumnOperationOptions()
}
