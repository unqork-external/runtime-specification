import { DiscriminatorValue, Required } from '@tsed/schema'

import { DecideOptions } from './decide.options'
import { Alpha } from '../../../../decorators'
import { AutogenDisabled } from '../../decorators/autogenDisabled.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.DECIDE)
@Alpha()
@AutogenDisabled()
export class DecideOperation extends Operation<OperationTypes.DECIDE> {
  public type = OperationTypes.DECIDE as const

  @Required()
  public options: DecideOptions = new DecideOptions()
}

export const createDecideOperation = (options: DecideOptions): DecideOperation => {
  return {
    type: OperationTypes.DECIDE,
    options,
  }
}
