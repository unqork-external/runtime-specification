import { Default, Description, Optional } from '@tsed/schema'

import { InputField } from '../../component-composition/input/component.input'

export class SingleCheckboxField extends InputField {
  @Optional()
  @Default(false)
  @Description('When set to Toggle On Icon `true`, the checkbox is selected by default.')
  defaultChecked: boolean = false
}
