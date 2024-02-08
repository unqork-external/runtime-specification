import { Default, Description } from '@tsed/schema'

import { InputFormat } from '../../componentComposition/input/component.input'

export class TextareaFormat extends InputFormat {
  @Default(false)
  @Description('Whether mask is enabled in the textarea.')
  useInputMask: boolean = false

  @Default(false)
  @Description('Format Data with mask for the textarea.')
  formatDataWithMask: boolean = false
}
