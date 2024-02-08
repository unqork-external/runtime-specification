import { Default, Description } from '@tsed/schema'

import { InputField } from '../../componentComposition/input/component.input'

export class SingleCheckboxField extends InputField {
  @Default(false)
  @Description('When set to Toggle On Icon `true`, the checkbox is selected by default.')
  defaultChecked: boolean = false
}
