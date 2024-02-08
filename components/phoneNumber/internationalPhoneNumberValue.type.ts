import { Description } from '@tsed/schema'
export class IntlPhoneNumber {
  @Description('Value of the local US phone number.')
  number: string

  @Description('Value of the international phone number with country code.')
  internationalNumber: string

  @Description('Value of the country code.')
  countryCode: string
}
