import { DiscriminatorValue, Required } from '@tsed/schema'

import { SetSpinnerOptions } from './setSpinner.options'
import { DisplayName } from '../../../../decorators'
import { TrimmedDescription } from '../../../../decorators/schema/trimmedDescription.decorator'
import { Stable } from '../../../../decorators/stability'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DisplayName('Set Spinner')
@DiscriminatorValue(OperationTypes.SET_SPINNER)
@TrimmedDescription(`
  Legacy Support Operation. R1 Compatibility Operation for the spinner output.
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
