import { Any, Description, Optional, Required } from '@tsed/schema'

import { TargetedOperationOptions } from '../../interface'

export class TableSetActionToolbarVisibilityOperationOptions extends TargetedOperationOptions {
  @Optional()
  @Description('Set the visibility of the top toolbar in the Table component.')
  @Any(Boolean, String)
  enableTopToolbar: boolean | string

  @Optional()
  @Description('Set the visibility of the bottom toolbar in the Table component.')
  @Any(Boolean, String)
  enableBottomToolbar: boolean | string
}
