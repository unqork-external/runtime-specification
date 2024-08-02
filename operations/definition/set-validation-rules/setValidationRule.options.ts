import { Description, Property } from '@tsed/schema'

import { ValidationRule } from '../../../validations'
import { TargetedOperationOptions } from '../../interface'

export class SetValidationRuleOptions extends TargetedOperationOptions {
  @Property(ValidationRule)
  @Description(`The rule we're adding. Only type is required`)
  rule: Pick<ValidationRule, 'type'> & Partial<ValidationRule>
}
