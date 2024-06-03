import { Description, Enum, Required, Optional } from '@tsed/schema'

import { ValidationRuleTypes } from './validation.enum'

export class ValidationError {
  @Required()
  @Enum(ValidationRuleTypes)
  @Description('Type of the error')
  type: ValidationRuleTypes

  @Optional()
  @Description('The error message')
  message?: string
}
