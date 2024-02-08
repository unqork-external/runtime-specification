import { Default, Description, Enum, Property } from '@tsed/schema'

import { ValidationRuleTypes } from './validation.enum'

export class ValidationRule {
  @Enum(ValidationRuleTypes)
  @Description('What type of validation rule is this')
  type: ValidationRuleTypes

  @Description('What message to show when this rule is not met')
  errorMessage?: string

  @Property()
  @Description('Nested validation record')
  validation?: Record<string, any>
}

export type FullValidationRules = Record<ValidationRuleTypes, ValidationRule>

export type ValidationRules = Partial<FullValidationRules>
