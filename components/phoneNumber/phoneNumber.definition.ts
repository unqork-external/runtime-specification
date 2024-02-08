import { Const, Description, Property, DiscriminatorValue } from '@tsed/schema'

import { InternationalPhoneNumberField } from './internationallPhoneNumberField'
import { IntlPhoneNumber } from './internationalPhoneNumberValue.type'
import { PhoneNumberField } from './phoneNumberField'
import { PhoneNumberFormat } from './phoneNumberFormat'
import { BaseComponentDefinition } from '../../baseComponentInterface/base.component.definition'
import { Display } from '../../componentComposition/display/component.display'
import { Validation } from '../../validations/validation'

export { IntlPhoneNumber } from './internationalPhoneNumberValue.type'

@DiscriminatorValue('phoneNumber')
export class PhoneNumberComponentDefinition extends BaseComponentDefinition {
  @Const('phoneNumber')
  @Description('Type of the component.')
  type: 'phoneNumber' = 'phoneNumber' as const

  @Property(Display)
  @Description('Display settings of the phone number.')
  display: Display = new Display()

  @Property(PhoneNumberField)
  @Description('Field settings of the phone number.')
  field: PhoneNumberField = new PhoneNumberField()

  @Property(PhoneNumberFormat)
  @Description('Format options of the phone number.')
  format: PhoneNumberFormat = new PhoneNumberFormat()

  @Description('Value of the phone number.')
  declare value: string | IntlPhoneNumber

  @Property(InternationalPhoneNumberField)
  @Description('Field settings of the international phone number')
  intlPhoneNumberField: InternationalPhoneNumberField = new InternationalPhoneNumberField()

  @Property(Validation)
  @Description('Validation of the phone number.')
  validation: Validation = new Validation()
}
