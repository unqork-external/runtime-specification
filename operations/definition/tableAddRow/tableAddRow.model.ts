import { DiscriminatorValue, Required } from '@tsed/schema'

import { TableAddRowOperationOptions } from './tableAddRow.options'
import { TrimmedDescription } from '../../../../decorators/schema/trimmedDescription.decorator'
import { OpsBuilderStable, Stable } from '../../../../decorators/stability'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TABLE_ADD_ROW)
@TrimmedDescription(`
  Adds a row to the bottom of Table or at a specified position. 
  May or may not include data to populate the new row with.
`)
@Stable()
@OpsBuilderStable()
export class TableAddRowOperation extends Operation<OperationTypes.TABLE_ADD_ROW> {
  public type = OperationTypes.TABLE_ADD_ROW as const

  @Required()
  public options: TableAddRowOperationOptions = new TableAddRowOperationOptions()
}
