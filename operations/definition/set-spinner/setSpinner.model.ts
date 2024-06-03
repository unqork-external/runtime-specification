import { DiscriminatorValue, Required } from '@tsed/schema'

import { SetSpinnerOptions } from './setSpinner.options'
import { TrimmedDescription } from '../../../../decorators/schema/trimmedDescription.decorator'
import { Stable } from '../../../../decorators/stability/stable.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.SET_SPINNER)
@TrimmedDescription(`
    R1 Compatibility Operation for the spinner output.
    The SET_SPINNER operation will set a spinner depending on the arguments passed in.
    If "showCursorSpinner" is set to true, then the mouse will have a small spinner enabled.
    If "showPageSpinner" is set to true, then the page will have a small spinner enabled.
`)
@Stable()
export class SetSpinnerOperation extends Operation<OperationTypes.SET_SPINNER> {
  public type = OperationTypes.SET_SPINNER as const

  @Required()
  public options: SetSpinnerOptions = new SetSpinnerOptions()
}

export const createSetSpinnerOperation = (options: SetSpinnerOptions): SetSpinnerOperation => {
  return {
    type: OperationTypes.SET_SPINNER,
    options,
  }
}
