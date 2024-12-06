import { Description, Property } from '@tsed/schema'

import { UdViewTargets } from './udViewTargets.enum'
import { Css } from '../../../decorators/schema/css.decorator'
import { type CssClassOrProps } from '../../styling/cssClassOrProps.type'
import { StylingModel } from '../../styling/styling.model'
import { TargetsModel } from '../../viewTargets/targets.model'

export class UdViewStyleTargets implements TargetsModel<UdViewTargets> {
  @Css()
  @Description('Root element styles.')
  [UdViewTargets.root]: CssClassOrProps
}

export class UdViewStyling extends StylingModel<UdViewStyleTargets> {
  @Property(UdViewStyleTargets)
  declare targets: UdViewStyleTargets
}
