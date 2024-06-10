import { Description, Required } from '@tsed/schema'

import { TrimmedDescription } from '../../../../decorators/schema/trimmedDescription.decorator'

export class TableSetNavigateDownOnPressEnterOperationOptions {
  @Required()
  @Description('The key of the Table component to set navigation options.')
  targetKey: string

  @Required()
  @TrimmedDescription(`
    When enabled, pressing Enter on a cell in edit mode sets the focus to the cell immediately below.
    The new selected cell changes to edit mode.
    If there's no cell below the current cell, nothing happens.
  `)
  enabled: boolean
}
