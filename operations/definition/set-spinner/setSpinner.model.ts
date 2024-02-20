import { DiscriminatorValue, Required } from '@tsed/schema'

import { SetSpinnerOptions } from './setSpinner.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.SET_SPINNER)
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
