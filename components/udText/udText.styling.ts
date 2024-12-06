import { Description, Property } from '@tsed/schema'

import { UdTextTargets } from './udTextTargets.enum'
import { Css } from '../../../decorators/schema/css.decorator'
import { type CssClassOrProps } from '../../styling/cssClassOrProps.type'
import { StylingModel } from '../../styling/styling.model'
import { TargetsModel } from '../../viewTargets/targets.model'

export class UdTextStyleTargets implements TargetsModel<UdTextTargets> {
  @Css()
  @Description('Root element styles.')
  [UdTextTargets.root]: CssClassOrProps
}

export class UdTextStyling extends StylingModel<UdTextStyleTargets> {
  @Property(UdTextStyleTargets)
  declare targets: UdTextStyleTargets
}
