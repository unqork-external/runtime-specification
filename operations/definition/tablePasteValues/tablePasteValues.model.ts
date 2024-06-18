import { DiscriminatorValue, Required } from '@tsed/schema'

import { TablePasteValuesOperationOptions } from './tablePasteValues.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TABLE_PASTE_VALUES)
export class TablePasteValuesOperation extends Operation<OperationTypes.TABLE_PASTE_VALUES> {
  @Required()
  public type = OperationTypes.TABLE_PASTE_VALUES as const

  @Required()
  public options: TablePasteValuesOperationOptions = new TablePasteValuesOperationOptions()
}
