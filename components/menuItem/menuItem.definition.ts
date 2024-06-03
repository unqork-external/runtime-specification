import { Const, Description, DiscriminatorValue, Property } from '@tsed/schema'

import { MenuItemStyling } from './menuItem.styling'
import { MenuItemTargets } from './menuItem.targets.enum'
import { MenuItemAdornments } from './menuItemAdornments'
import { ViewTargets } from '../../../decorators/viewTargets/viewTargets.decorator'
import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import {
  LeftAdornmentNestable,
  RightAdornmentNestable,
} from '../../component-composition/adornments/component.adornments'
import { Display } from '../../component-composition/display/component.display'
import { Field } from '../../component-composition/field/component.field.label'
import type { SignalTargets } from '../../signals'

@DiscriminatorValue('menuItem')
@ViewTargets(MenuItemTargets)
export class MenuItemComponentDefinition extends BaseComponentDefinition {
  @Const('menuItem')
  type: 'menuItem' = 'menuItem' as const

  @Description('Adornments component definitions.')
  adornments: MenuItemAdornments = new MenuItemAdornments()

  @Property()
  display: Display = new Display()

  @Property()
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

  @Property()
  declare signals: SignalTargets<MenuItemTargets>

  @Description('Styling targets that can be set via config')
  declare styling: MenuItemStyling
}
