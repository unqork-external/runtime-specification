import { DiscriminatorValue, Required } from '@tsed/schema'

import { DecideOptions } from './decide.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.DECIDE)
export class DecideOperation extends Operation<OperationTypes.DECIDE> {
  @Required()
  public options: DecideOptions = new DecideOptions()
}

export const createDecideOperation = (options: DecideOptions): DecideOperation => {
  return {
    type: OperationTypes.DECIDE,
    options,
  }
}
