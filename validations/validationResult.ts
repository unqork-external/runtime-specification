import { Nullable, CollectionOf, Property } from '@tsed/schema'

import { ValidationError } from './validationError.type'

export class ValidationResult {
  //TODO: Change null to undefined
  @Nullable(Boolean)
  isValid?: boolean | null = null

  @CollectionOf(ValidationError)
  errors?: ValidationError[]
}

export class ModuleValidationResult {
  @Property()
  isValid: boolean

  @CollectionOf(ValidationResult)
  results: Record<string, ValidationResult>
}
