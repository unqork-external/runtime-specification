import { Default, Description, Integer, Property } from '@tsed/schema'

import { InputField, InputSubLabel } from '../../componentComposition/input/component.input'

export class CheckboxesInputField extends InputField {
  @Default(1)
  @Integer()
  @Description('Number of columns to split checkboxes')
  numberOfColumns: number = 1

  @Property(InputSubLabel)
  @Description('The sub-label text of the component')
  subLabel?: InputSubLabel = new InputSubLabel()
}
