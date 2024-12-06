import { Property } from '@tsed/schema'

import { MenuItemTargets } from './menuItem.targets.enum'
import { Css } from '../../../decorators/schema/css.decorator'
import { type CssClassOrProps, StylingModel } from '../../styling'
import { TargetsModel } from '../../viewTargets/targets.model'

export class MenuItemStylingTargets implements TargetsModel<MenuItemTargets> {
  @Css()
  [MenuItemTargets.root]: CssClassOrProps;

  @Css()
  [MenuItemTargets.base]: CssClassOrProps
}

export class MenuItemStyling extends StylingModel<MenuItemStylingTargets> {
  @Property()
  declare targets: MenuItemStylingTargets
}
