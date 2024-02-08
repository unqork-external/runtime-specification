import { Required, DiscriminatorValue, Description, Property } from '@tsed/schema'

import { OptionAdornments } from './OptionAdornments'
import { BaseComponentDefinition } from '../../baseComponentInterface/base.component.definition'
import {
  LeftAdornmentNestable,
  RightAdornmentNestable,
} from '../../componentComposition/adornments/component.adornments'
import { Display } from '../../componentComposition/display/component.display'
import { Field } from '../../componentComposition/field/component.field.label'

@DiscriminatorValue('simpleSelectOption')
export class SimpleSelectOptionComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'simpleSelectOption' = 'simpleSelectOption' as const

  @Property(OptionAdornments)
  @Description('Adornments component definitions.')
  adornments: OptionAdornments = new OptionAdornments()

  @Property()
  field: Field = new Field()

  @Property(Display)
  display: Display = new Display()

  @Description('Fully qualified child keys for left icon nestables. Maintained by nestable api.')
  left: string[] = []

  @Description('Fully qualified child keys for right icon nestables. Maintained by nestable api.')
  right: string[] = []

  @Description('Nestable definitions for mui menu item component')
  nestables = {
    left: new LeftAdornmentNestable(),
    right: new RightAdornmentNestable(),
  }
  @Description('Value of the component')
  value: string

  @Description('boolean used to determine if the underlying view is simple and un-styled')
  useSimpleView: boolean
}
