import { Description } from '@tsed/schema'

import { InputField } from '../../componentComposition/input/component.input'

export class PhoneNumberField extends InputField {
  @Description('input type for the phone number field')
  inputType?: string
}
