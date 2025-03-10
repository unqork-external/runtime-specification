import { DiscriminatorValue, Required } from '@tsed/schema'

import { ValidateOptions } from './validate.options'
import { Alpha } from '../../../../decorators'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

export const validateOperation = 'validateOperation'

@DiscriminatorValue(OperationTypes.VALIDATE)
@Alpha()
export class ValidateOperation extends Operation<OperationTypes.VALIDATE> {
  public type = OperationTypes.VALIDATE as const

  @Required()
  public options: ValidateOptions = new ValidateOptions()
}
