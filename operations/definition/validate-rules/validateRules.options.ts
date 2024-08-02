import { CollectionOf, Description, Example, Optional, Required, Any } from '@tsed/schema'

import { ValidationRule, ValidationRuleTypes } from '../../../validations'
import { TargetedOperationOptions } from '../../interface'

export class ValidateRulesOptions extends TargetedOperationOptions {
  @Optional()
  @Any()
  @Description('Value to be validated with different types of validation handlers.')
  value?: unknown

  @Required()
  @Description('A list of validation rules.')
  @Example([{ type: ValidationRuleTypes.REQUIRED, validation: { required: true }, errorMessage: 'I am required' }])
  @CollectionOf(ValidationRule)
  rules: ValidationRule[] = []
}
