import { Description } from '@tsed/schema'

import { TrimmedDescription } from '../../../../decorators/schema/trimmedDescription.decorator'

export class TableSetNavigateDownOnPressEnterOperationOptions {
  @Description('The key for the table we want to set the navigation option')
  targetKey: string

  @TrimmedDescription(`
    When enabled, pressing Enter on a cell in edit mode will set the focus to the cell immediately below.
    The new selected cell will also be in edit mode.
    If there's no cell below the current cell, nothing happens.
  `)
  enabled: boolean
}
