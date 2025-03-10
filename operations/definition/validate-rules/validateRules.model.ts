import { DiscriminatorValue, Required } from '@tsed/schema'

import { ValidateRulesOptions } from './validateRules.options'
import { Alpha } from '../../../../decorators'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.VALIDATE_RULES)
@Alpha()
export class ValidationRuleOperation extends Operation<OperationTypes.VALIDATE_RULES> {
  public type = OperationTypes.VALIDATE_RULES as const
  @Required()
  public options: ValidateRulesOptions = new ValidateRulesOptions()
}
