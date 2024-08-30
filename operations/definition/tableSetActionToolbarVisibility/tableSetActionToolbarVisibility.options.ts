import { Any, Description, Optional, Required } from '@tsed/schema'

export class TableSetActionToolbarVisibilityOperationOptions {
  @Required()
  @Description('Key of the table component to set action toolbar visibility')
  targetKey: string

  @Optional()
  @Description('Set the visibility of the top toolbar in the Table component.')
  @Any(Boolean, String)
  enableTopToolbar: boolean | string

  @Optional()
  @Description('Set the visibility of the bottom toolbar in the Table component.')
  @Any(Boolean, String)
  enableBottomToolbar: boolean | string
}
