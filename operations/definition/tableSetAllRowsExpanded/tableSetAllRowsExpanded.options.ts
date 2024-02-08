import { Description } from '@tsed/schema'

export class TableSetAllRowsExpandedOperationOptions {
  @Description('A key of the table we are targeting for row expansion')
  targetKey: string

  @Description('A boolean for setting if rows are expanded')
  areRowsExpanded: boolean | string

  @Description('a boolean for setting if we want all rows to stay expanded/collapsed even after refreshes')
  persist?: boolean
}
