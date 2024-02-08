import { DiscriminatorValue, Required } from '@tsed/schema'

import { SetValidationRuleOptions } from './setValidationRule.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.SET_VALIDATION_RULE)
export class SetValidationRuleOperation extends Operation<OperationTypes.SET_VALIDATION_RULE> {
  @Required()
  public options: SetValidationRuleOptions = new SetValidationRuleOptions()
}
