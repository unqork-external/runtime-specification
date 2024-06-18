import { DiscriminatorValue, Required } from '@tsed/schema'

import { TableCopyValuesOperationOptions } from './tableCopyValues.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TABLE_COPY_VALUES)
export class TableCopyValuesOperation extends Operation<OperationTypes.TABLE_COPY_VALUES> {
  @Required()
  public type = OperationTypes.TABLE_COPY_VALUES as const

  @Required()
  public options: TableCopyValuesOperationOptions = new TableCopyValuesOperationOptions()
}
