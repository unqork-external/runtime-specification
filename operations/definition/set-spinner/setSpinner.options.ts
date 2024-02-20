import { Default, Description, Optional } from '@tsed/schema'

export class SetSpinnerOptions {
  @Optional()
  @Default(false)
  @Description(`'showCursorSpinner' converts the user's cursor to a spinner when enabled.`)
  showCursorSpinner?: boolean = false

  @Optional()
  @Default(false)
  @Description(`'showPageSpinner' uses the R1 Page Spinner animation when enabled.`)
  showPageSpinner?: boolean = false
}
