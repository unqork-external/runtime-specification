import { DiscriminatorValue, Required } from '@tsed/schema'

import { SpreadsheetInputRemoveRowOperationOptions } from './spreadsheetInputRemoveRow.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.SPREADSHEET_INPUT_REMOVE_ROW)
export class SpreadsheetInputRemoveRowOperation extends Operation<OperationTypes.SPREADSHEET_INPUT_REMOVE_ROW> {
  @Required()
  public type = OperationTypes.SPREADSHEET_INPUT_REMOVE_ROW as const

  @Required()
  public options: SpreadsheetInputRemoveRowOperationOptions = new SpreadsheetInputRemoveRowOperationOptions()
}
