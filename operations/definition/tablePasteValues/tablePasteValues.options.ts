import { Description, Required } from '@tsed/schema'

import { TablePasteMode } from './tablePasteMode.enum'
import { TrimmedDescription } from '../../../../decorators/schema/trimmedDescription.decorator'

export class TablePasteValuesOperationOptions {
  @Description('Key of the Table component to paste the values from the clipboard.')
  @Required()
  targetKey: string

  @TrimmedDescription(`
    Specifies how we should treat the values already present in the Table.
    Append: Will append the data in the clipboard to Tables' current values.
    Replace: Will replace Tables' current values with the clipboard data.
  `)
  pasteMode: TablePasteMode = TablePasteMode.Replace
}
