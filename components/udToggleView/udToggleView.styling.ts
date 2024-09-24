import { Description, Property } from '@tsed/schema'

import { UdToggleViewTargets } from './udToggleViewTargets.enum'
import { Css } from '../../../decorators/schema/css.decorator'
import { type CssClassOrProps } from '../../styling/cssClassOrProps.type'
import { StylingModel } from '../../styling/styling.model'
import { TargetsModel } from '../../viewTargets/targets.model'

export class UdToggleViewStyleTargets implements TargetsModel<UdToggleViewTargets> {
  @Css()
  @Description('Content element styles.')
  [UdToggleViewTargets.content]: CssClassOrProps;

  @Css()
  @Description('Header element styles.')
  [UdToggleViewTargets.header]: CssClassOrProps;

  @Css()
  @Description('Root element styles.')
  [UdToggleViewTargets.root]: CssClassOrProps
}

export class UdToggleViewStyling extends StylingModel<UdToggleViewStyleTargets> {
  @Property(UdToggleViewStyleTargets)
  targets: UdToggleViewStyleTargets
}
