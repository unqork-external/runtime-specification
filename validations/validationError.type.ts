import { ValidationRuleTypes } from './validation.enum'

export class ValidationError {
  type: ValidationRuleTypes
  message?: string
}
