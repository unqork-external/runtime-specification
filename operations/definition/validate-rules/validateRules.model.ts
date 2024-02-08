import { DiscriminatorValue, Required } from '@tsed/schema'

import { ValidateRulesOptions } from './validateRules.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.VALIDATE_RULES)
export class ValidationRuleOperation extends Operation<OperationTypes.VALIDATE_RULES> {
  public declare type: OperationTypes.VALIDATE_RULES
  @Required()
  public options: ValidateRulesOptions = new ValidateRulesOptions()
}
