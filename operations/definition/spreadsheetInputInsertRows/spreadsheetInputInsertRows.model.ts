import { DiscriminatorValue, Required } from '@tsed/schema'

import { SpreadsheetInputInsertRowsOperationOptions } from './spreadsheetInputInsertRows.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.SPREADSHEET_INPUT_INSERT_ROWS)
export class SpreadsheetInputInsertRowsOperation extends Operation<OperationTypes.SPREADSHEET_INPUT_INSERT_ROWS> {
  @Required()
  public type = OperationTypes.SPREADSHEET_INPUT_INSERT_ROWS as const

  @Required()
  public options: SpreadsheetInputInsertRowsOperationOptions = new SpreadsheetInputInsertRowsOperationOptions()
}
