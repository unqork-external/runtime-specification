import { Default, Description, Optional } from '@tsed/schema'

import { InternationalPhoneNumberType } from './internationalPhoneNumber.enum'

export class InternationalPhoneNumberField {
  @Default('none')
  @Description('if true, phone number data is strictly validated.')
  @Optional()
  validatePhoneNumberType: string = 'none'

  @Description('country code of the selected country')
  @Optional()
  selectedCountry?: string

  @Default(true)
  @Description("if true, user cannot select their phone number's country of origin")
  @Optional()
  hideCountry: boolean = true

  @Default(InternationalPhoneNumberType.ALL)
  @Description('value of phone line type (mobile, fixed line, or both')
  @Optional()
  phoneType: InternationalPhoneNumberType = 0
}
