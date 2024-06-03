import { Property } from '@tsed/schema'

import { OptionNestable } from './optionNestable'
import { SelectedOptionsNestable } from './selectedOptionsNestable'
import { LeftAdornmentNestable, RightAdornmentNestable } from '../../component-composition'

export class SimpleSelectNestables {
  @Property()
  optionKeys = new OptionNestable()

  @Property()
  selected = new SelectedOptionsNestable()

  @Property()
  left = new LeftAdornmentNestable()

  @Property()
  right = new RightAdornmentNestable()
}
