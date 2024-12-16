import { CollectionOf, Description, Example, Optional, Required, Any } from '@tsed/schema'

import { ValidationRule, ValidationRuleTypes } from '../../../validations'
import { OperationOptions } from '../../interface'

export class ValidateRulesOptions extends OperationOptions {
  @Required()
  @Example('firstNameTextField')
  @Description('targetKey refers to the intended target for an operation.')
  targetKey: string

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
