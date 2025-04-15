import { Default, Description, Optional } from '@tsed/schema'

import { OperationOptions } from '../../interface'

export class SetSpinnerOptions extends OperationOptions {
  @Optional()
  @Default(false)
  @Description(`If set to true, then the mouse will have a small spinner enabled.`)
  showCursorSpinner?: boolean = false

  @Optional()
  @Default(false)
  @Description(`If set to true, then the page will have a small spinner enabled.`)
  showPageSpinner?: boolean = false
}
