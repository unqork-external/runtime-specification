import { DiscriminatorValue, Required } from '@tsed/schema'

import { SetValidationRuleOptions } from './setValidationRule.options'
import { Alpha, DisplayName } from '../../../../decorators'
import { AutogenDisabled } from '../../decorators/autogenDisabled.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DisplayName('Set Validation Rule')
@DiscriminatorValue(OperationTypes.SET_VALIDATION_RULE)
@Alpha()
@AutogenDisabled()
export class SetValidationRuleOperation extends Operation<OperationTypes.SET_VALIDATION_RULE> {
  public type = OperationTypes.SET_VALIDATION_RULE as const

  @Required()
  public options: SetValidationRuleOptions = new SetValidationRuleOptions()
}
