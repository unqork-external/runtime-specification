import { Default, Description, Optional } from '@tsed/schema'

import { Validation } from '../../validations/validation'

export class TextareaValidation extends Validation {
  @Default(false)
  @Optional()
  @Description('Disable max length limitation for the textarea.')
  disableMaxLengthLimitation?: boolean = false
  @Default(false)
  @Optional()
  @Description('Show countdown for the textarea.')
  showCountdown?: boolean = false
}
