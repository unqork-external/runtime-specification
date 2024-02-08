import { DiscriminatorValue, Required } from '@tsed/schema'

import { ValidateOptions } from './validate.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.VALIDATE)
export class ValidateOperation extends Operation<OperationTypes.VALIDATE> {
  @Required()
  public options: ValidateOptions = new ValidateOptions()
}
