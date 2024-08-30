import { Description, Property, Required } from '@tsed/schema'

import { ValidationRule } from '../../../validations'

export class SetValidationRuleOptions {
  @Required()
  @Description('Key of target to apply set validation rule')
  public declare targetKey: string

  @Property(ValidationRule)
  @Description(`The rule we're adding. Only type is required`)
  rule: Pick<ValidationRule, 'type'> & Partial<ValidationRule>
}
