import type { SpreadsheetInputColumnDefinition } from '../../../components'

export class SpreadsheetInputInsertColumnsOperationOptions {
  targetKey: string
  columns: SpreadsheetInputColumnDefinition[]
  index?: number
}
