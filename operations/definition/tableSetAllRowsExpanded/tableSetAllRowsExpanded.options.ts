import { Any, Description, Optional, Required } from '@tsed/schema'

import { TrimmedDescription } from '../../../../decorators/schema/trimmedDescription.decorator'

export class TableSetAllRowsExpandedOperationOptions {
  @Required()
  @Description('A key of the table we are targeting for row expansion')
  targetKey: string

  @Required()
  @Any('boolean', 'string')
  @TrimmedDescription(`
  Sets rows to be expanded.
  This field can receive a true/false value, or a string input for interpolation.
  `)
  areRowsExpanded: boolean | string

  @Optional()
  @Description(
    'A boolean for setting if all rows will stay expanded/collapsed after a value change or a change to grouping',
  )
  persist?: boolean
}
