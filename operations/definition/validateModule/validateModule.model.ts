import { DiscriminatorValue, Required } from '@tsed/schema'

import { ValidateModuleOperationOptions } from './validateModule.options'
import { Alpha, DisplayName } from '../../../../decorators'
import { AutogenDisabled } from '../../decorators/autogenDisabled.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DisplayName('Validate Module')
@DiscriminatorValue(OperationTypes.VALIDATE_MODULE)
@Alpha()
@AutogenDisabled()
export class ValidateModuleOperation extends Operation<OperationTypes.VALIDATE_MODULE> {
  public type = OperationTypes.VALIDATE_MODULE as const

  @Required()
  public options: ValidateModuleOperationOptions = new ValidateModuleOperationOptions()
}
