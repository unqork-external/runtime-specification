import { Default, Description } from '@tsed/schema'

import { trimAll } from '../../../utilities'
import { Validation } from '../../validations/validation'

export class TextFieldValidation extends Validation {
  @Default(false)
  @Description(
    trimAll(
      `When \`true\`, it disables the max length limitation for the input field and allows 
      the user type beyond that character count limit. When it happens, a validation message 
      indicating the user has more characters than the max limit is triggered. 
      To see its effects, it needs to be used along with the Max Length validation. 
      When \`false\`, it prevents the user from typing more characters than allowed by Max Length 
      thus no validation message will appear.
      Note it does not affect limitations set by an input mask 
      since input masks work as formatters and not as validations.
    `,
    ),
  )
  disableMaxLengthLimitation?: boolean = false

  @Default(false)
  @Description(
    trimAll(`
      When \`true\`, a character countdown displays below the input field 
      showing the number of characters left before reaching the maximum length. 
      Note the countdown will not display if no Max Length is set in the component's validations. 
      If Disable Max Length Limitation is \`true\`, this counter will display a negative number 
      if the user types beyond the character count limit.
      The flag is \`false\` by default.
    `),
  )
  showCountdown?: boolean = false
}
