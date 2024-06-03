import { Description, Example, Property } from '@tsed/schema'

import { ValidationResult } from './validationResult'
import type { ValidationRules } from './validationRule.type'
import { TrimmedDescription } from '../../decorators/schema/trimmedDescription.decorator'
import { trimAll } from '../../utilities'

@Description(`Holds the validation rules and the most current validation results for the component`)
export class Validation {
  @Property(ValidationResult)
  @Description(`Describes the current state of validation for this component`)
  result?: ValidationResult

  @Description('Whether or not field has had user interaction. It will be set to true on user interaction.')
  isDirty?: boolean

  @Property()
  @TrimmedDescription(`
    The set of rules to restrict or define the accepted data for the current component.
    These are the rules to run for validation of the data input.
  `)
  @Example(
    trimAll(`
      You can use it to define the max length of characters in an input field with a custom error message.
      rules: {
        required: {
          type: ValidationRuleTypes.MAX_LENGTH,
          validation: {
            maxLength: 5,
          },
          errorMessage: 'Max length is 5',
        },
      },
    `),
  )
  rules?: ValidationRules
}
