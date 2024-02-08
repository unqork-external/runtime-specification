import { Required, DiscriminatorValue, Property, Description } from '@tsed/schema'

import { OptionAdornments } from './OptionAdornments'
import { BaseComponentDefinition } from '../../baseComponentInterface/base.component.definition'
import {
  LeftAdornmentNestable,
  RightAdornmentNestable,
} from '../../componentComposition/adornments/component.adornments'
import { Display } from '../../componentComposition/display/component.display'
import { Field } from '../../componentComposition/field/component.field.label'

@DiscriminatorValue('searchSelectOption')
export class SearchSelectOptionComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'searchSelectOption' = 'searchSelectOption' as const

  @Property(OptionAdornments)
  @Description('Adornments component definitions.')
  adornments: OptionAdornments = new OptionAdornments()

  @Property(Field)
  field: Field = new Field()

  @Property(Display)
  display: Display = new Display()

  @Description('Fully qualified child keys for left icon nestables. Maintained by nestable api.')
  left: string[] = []

  @Description('Fully qualified child keys for right icon nestables. Maintained by nestable api.')
  right: string[] = []

  @Description('Nestable definitions for the component')
  nestables = {
    left: new LeftAdornmentNestable(),
    right: new RightAdornmentNestable(),
  }

  @Description('Value of the component')
  value: string
}
