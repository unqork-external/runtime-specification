import { Description, DiscriminatorValue, Property, Required } from '@tsed/schema'

import { MenuItemAdornments } from './menuItemAdornments'
import { BaseComponentDefinition } from '../../baseComponentInterface/base.component.definition'
import { Field } from '../../componentComposition'
import {
  LeftAdornmentNestable,
  RightAdornmentNestable,
} from '../../componentComposition/adornments/component.adornments'
import { Display } from '../../componentComposition/display/component.display'

@DiscriminatorValue('menuItem')
export class MenuItemComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'menuItem' = 'menuItem' as const

  @Property(MenuItemAdornments)
  @Description('Adornments component definitions.')
  adornments: MenuItemAdornments = new MenuItemAdornments()

  @Property(Display)
  display: Display = new Display()

  @Property(Field)
  field: Field = new Field()

  @Description('Fully qualified child keys for left icon nestables. Maintained by nestable api.')
  left: string[] = []

  @Description('Fully qualified child keys for right icon nestables. Maintained by nestable api.')
  right: string[] = []

  @Description('Nestable definitions for mui menu item component')
  nestables = {
    left: new LeftAdornmentNestable(),
    right: new RightAdornmentNestable(),
  }
}
