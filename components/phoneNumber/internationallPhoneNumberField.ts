import { Default, Description } from '@tsed/schema'

export class InternationalPhoneNumberField {
  @Default('none')
  @Description('if true, phone number data is strictly validated.')
  validatePhoneNumberType: string = 'none'

  @Description('country code of the selected country')
  selectedCountry?: string

  @Description("if true, user cannot select their phone number's country of origin")
  hideCountry?: boolean

  @Description('value of phone line type (mobile, fixed line, or both')
  phoneType?: number
}
