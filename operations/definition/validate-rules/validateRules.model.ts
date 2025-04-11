import { DiscriminatorValue, Required } from '@tsed/schema'

import { ValidateRulesOptions } from './validateRules.options'
import { Alpha, DisplayName } from '../../../../decorators'
import { AutogenDisabled } from '../../decorators/autogenDisabled.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DisplayName('Validate Rules')
@DiscriminatorValue(OperationTypes.VALIDATE_RULES)
@Alpha()
@AutogenDisabled()
export class ValidationRuleOperation extends Operation<OperationTypes.VALIDATE_RULES> {
  public type = OperationTypes.VALIDATE_RULES as const
  @Required()
  public options: ValidateRulesOptions = new ValidateRulesOptions()
}
