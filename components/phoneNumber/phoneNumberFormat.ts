import { Default, Description } from '@tsed/schema'

import { InputFormat } from '../../componentComposition/input/component.input'

export class PhoneNumberFormat extends InputFormat {
  @Default(false)
  @Description('Disable Autocomplete for the phone number.')
  disableAutoComplete: boolean = false
}
