import { DiscriminatorValue, Required } from '@tsed/schema'

import { SpreadsheetInputRemoveColumnOperationOptions } from './spreadsheetInputRemoveColumn.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.SPREADSHEET_INPUT_REMOVE_COLUMN)
export class SpreadsheetInputRemoveColumnOperation extends Operation<OperationTypes.SPREADSHEET_INPUT_REMOVE_COLUMN> {
  @Required()
  public type = OperationTypes.SPREADSHEET_INPUT_REMOVE_COLUMN as const

  @Required()
  public options: SpreadsheetInputRemoveColumnOperationOptions = new SpreadsheetInputRemoveColumnOperationOptions()
}
