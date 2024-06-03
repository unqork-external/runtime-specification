import { Default, Description, Example } from '@tsed/schema'

import { TrimmedDescription } from '../../../decorators/schema/trimmedDescription.decorator'
import { trimAll } from '../../../utilities'
import { InputFormat } from '../../component-composition/input/component.input'

export class TextFieldFormat extends InputFormat {
  @Default(false)
  @Description('Whether mask is enabled in the textfield. It does nothing if `true` but with no Input Mask defined.')
  useInputMask: boolean = false

  @Default(false)
  @TrimmedDescription(`
    When \`true\`, the textfield value will always include the masking characters in submission data.
    Note this flag affects how Max/Min length validations work because it changes the number of 
    characters present in the evaluated data, but at the same time it affects validations,
    this setting by itself is not considered a validation
  `)
  @Example(
    trimAll(`
      If the flag is \`true\` and the mask is "(999) 999-9999", when a user types "1", 
      the underlying value will be "(1__) ___-____" while with the flag turned off 
      the value will be "1"
    `),
  )
  formatDataWithMask: boolean = false
}
