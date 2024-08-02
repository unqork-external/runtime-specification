import { TablePasteMode } from './tablePasteMode.enum'
import { TrimmedDescription } from '../../../../decorators/schema/trimmedDescription.decorator'
import { TargetedOperationOptions } from '../../interface'

export class TablePasteValuesOperationOptions extends TargetedOperationOptions {
  @TrimmedDescription(`
    Specifies how we should treat the values already present in the Table.
    Append: Will append the data in the clipboard to Tables' current values.
    Replace: Will replace Tables' current values with the clipboard data.
  `)
  pasteMode: TablePasteMode = TablePasteMode.Replace
}
