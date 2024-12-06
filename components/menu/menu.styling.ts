import { Property } from '@tsed/schema'

import { MenuTargets } from './menu.targets.enum'
import { Css } from '../../../decorators/schema/css.decorator'
import { type CssClassOrProps, StylingModel } from '../../styling'
import { TargetsModel } from '../../viewTargets/targets.model'

export class MenuStylingTargets implements TargetsModel<MenuTargets> {
  @Css()
  [MenuTargets.root]: CssClassOrProps
}

export class MenuStyling extends StylingModel<MenuStylingTargets> {
  @Property()
  declare targets: MenuStylingTargets
}
