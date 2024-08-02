import { Description, Required } from '@tsed/schema'

import { TrimmedDescription } from '../../../../decorators/schema/trimmedDescription.decorator'
import { TargetedOperationOptions } from '../../interface'

export class TableSetNavigateDownOnPressEnterOperationOptions extends TargetedOperationOptions {
  @Required()
  @TrimmedDescription(`
    When enabled, pressing Enter on a cell in edit mode sets the focus to the cell immediately below.
    The new selected cell changes to edit mode.
    If there's no cell below the current cell, nothing happens.
  `)
  enabled: boolean
}
