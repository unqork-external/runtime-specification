import { DiscriminatorValue, Required } from '@tsed/schema'

import { ValidateOptions } from './validate.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

export const validateOperation = 'validateOperation'

@DiscriminatorValue(OperationTypes.VALIDATE)
export class ValidateOperation extends Operation<OperationTypes.VALIDATE> {
  public type = OperationTypes.VALIDATE as const

  @Required()
  public options: ValidateOptions = new ValidateOptions()
}
