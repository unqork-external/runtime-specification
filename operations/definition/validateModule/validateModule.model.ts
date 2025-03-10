import { DiscriminatorValue, Required } from '@tsed/schema'

import { ValidateModuleOperationOptions } from './validateModule.options'
import { Alpha } from '../../../../decorators'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.VALIDATE_MODULE)
@Alpha()
export class ValidateModuleOperation extends Operation<OperationTypes.VALIDATE_MODULE> {
  public type = OperationTypes.VALIDATE_MODULE as const

  @Required()
  public options: ValidateModuleOperationOptions = new ValidateModuleOperationOptions()
}
