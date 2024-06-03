import { Default, Description, Integer } from '@tsed/schema'

import { InputFormat } from '../../component-composition/input/component.input'

export class TextareaFormat extends InputFormat {
  @Default(false)
  @Description('Whether mask is enabled in the textarea.')
  useInputMask: boolean = false

  @Default(false)
  @Description('Format Data with mask for the textarea.')
  formatDataWithMask: boolean = false

  @Integer()
  @Default(3)
  @Description('number of rows that are visible in the textarea.')
  rows: number = 3
}
