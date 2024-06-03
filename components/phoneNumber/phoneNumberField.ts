import { Description, Optional } from '@tsed/schema'

import { InputField } from '../../component-composition/input/component.input'

export class PhoneNumberField extends InputField {
  @Description('input type for the phone number field')
  @Optional()
  inputType?: string
}
