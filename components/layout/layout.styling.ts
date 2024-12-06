import { Description, Property } from '@tsed/schema'

import { LayoutTargets } from './layoutTargets.enum'
import { Css } from '../../../decorators/schema/css.decorator'
import { type CssClassOrProps, StylingModel } from '../../styling'
import { TargetsModel } from '../../viewTargets/targets.model'

class LayoutStyleTargets implements TargetsModel<LayoutTargets> {
  @Css()
  @Description('Adds styles to individual items in Layout.')
  [LayoutTargets.item]: CssClassOrProps;

  @Css()
  @Description('Adds styles to Layout root component.')
  [LayoutTargets.root]: CssClassOrProps
}

export class LayoutStyling extends StylingModel<LayoutStyleTargets> {
  @Property()
  declare targets: LayoutStyleTargets
}
