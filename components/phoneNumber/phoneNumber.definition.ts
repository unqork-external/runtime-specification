import { Const, DiscriminatorValue, Optional } from '@tsed/schema'

import { InternationalPhoneNumberField } from './internationalPhoneNumberField'
import { IntlPhoneNumber } from './internationalPhoneNumberValue.type'
import { PhoneNumberStyling } from './phoneNumber.styling'
import { PhoneNumberField } from './phoneNumberField'
import { PhoneNumberTargets } from './phoneNumberTargets.enum'
import { Examples } from '../../../decorators/schema/examples.decorator'
import { TrimmedDescription } from '../../../decorators/schema/trimmedDescription.decorator'
import { ViewTargets } from '../../../decorators/viewTargets/viewTargets.decorator'
import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import { InputFormat } from '../../component-composition'
import { Display } from '../../component-composition/display/component.display'
import type { SignalTargets } from '../../signals'
import { targetedStylingExample } from '../../styling/targeted.styling.example'
import { Validation } from '../../validations/validation'

export { IntlPhoneNumber } from './internationalPhoneNumberValue.type'

@DiscriminatorValue('phoneNumber')
@TrimmedDescription(`
  The PhoneNumber component is a specialized input component designed for phone
  number validation. By default, it features an input mask to ensure proper formatting,
  but also allows the users to specify custom input masks according to their requirements.
  The International Phone Number feature includes a country-specific input mask. Users can
  select a country from a dropdown menu, and the component will automatically adjust the
  input mask to match the formatting for that country.
`)
@ViewTargets(PhoneNumberTargets)
export class PhoneNumberComponentDefinition extends BaseComponentDefinition {
  @Const('phoneNumber')
  type: 'phoneNumber' = 'phoneNumber' as const

  @Optional()
  display: Display = new Display()

  @Optional()
  field: PhoneNumberField = new PhoneNumberField()

  @Optional()
  format: InputFormat = new InputFormat()

  @Optional()
  declare value?: string | IntlPhoneNumber

  @Optional()
  declare signals?: SignalTargets<PhoneNumberTargets>

  @Optional()
  intlPhoneNumberField: InternationalPhoneNumberField = new InternationalPhoneNumberField()

  @Optional()
  validation: Validation = new Validation()

  @Optional()
  @Examples(targetedStylingExample)
  declare styling?: PhoneNumberStyling
}
