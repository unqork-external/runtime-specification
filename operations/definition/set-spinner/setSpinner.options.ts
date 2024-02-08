import { Optional, Default, Description } from '@tsed/schema'

import { BaseOperationOptions } from '../../interface/operations.interface'

export class SetSpinnerOptions extends BaseOperationOptions {
  @Optional()
  @Default(false)
  @Description(`'showCursorSpinner' converts the user's cursor to a spinner when enabled.`)
  showCursorSpinner?: boolean = false

  @Optional()
  @Default(false)
  @Description(`'showPageSpinner' uses the R1 Page Spinner animation when enabled.`)
  showPageSpinner?: boolean = false
}
