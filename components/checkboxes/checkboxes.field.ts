import { Default, Description, Integer, Optional } from '@tsed/schema'

import { InputField, InputSubLabel } from '../../component-composition/input/component.input'

export class CheckboxesField extends InputField {
  @Optional()
  @Default(1)
  @Integer()
  @Description('Number of columns to split checkboxes')
  numberOfColumns: number = 1

  @Optional()
  subLabel: InputSubLabel = new InputSubLabel()
}
