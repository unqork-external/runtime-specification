import { Description } from '@tsed/schema'

export class TableSetRowExpandedOperationOptions {
  @Description('A key of the table we are targeting for row expansion')
  targetKey: string

  @Description('The key of the row that we want to expand')
  targetGroupRow: string

  @Description('A boolean for setting if the row is expanded')
  isRowExpanded: boolean
}
