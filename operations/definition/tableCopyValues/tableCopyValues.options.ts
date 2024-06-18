import { Description, Required } from '@tsed/schema'

export class TableCopyValuesOperationOptions {
  @Description('Key of the Table component to copy the values to the clipboard.')
  @Required()
  targetKey: string
}
