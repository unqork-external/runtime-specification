import { DiscriminatorValue, Required } from '@tsed/schema'

import { SpreadsheetInputInsertColumnsOperationOptions } from './spreadsheetInputInsertColumns.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.SPREADSHEET_INPUT_INSERT_COLUMNS)
export class SpreadsheetInputInsertColumnsOperation extends Operation<OperationTypes.SPREADSHEET_INPUT_INSERT_COLUMNS> {
  @Required()
  public type = OperationTypes.SPREADSHEET_INPUT_INSERT_COLUMNS as const

  @Required()
  public options: SpreadsheetInputInsertColumnsOperationOptions = new SpreadsheetInputInsertColumnsOperationOptions()
}
