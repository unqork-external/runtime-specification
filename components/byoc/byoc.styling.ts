import { Description, Property } from '@tsed/schema'

import { ByocTargets } from './byocTargets.enum'
import { Css } from '../../../decorators/schema/css.decorator'
import { type CssClassOrProps } from '../../styling/cssClassOrProps.type'
import { StylingModel } from '../../styling/styling.model'
import { TargetsModel } from '../../viewTargets/targets.model'

export class ByocStyleTargets implements TargetsModel<ByocTargets> {
  @Css()
  @Description('Adds styles to byoc root ComponentWrapper.')
  [ByocTargets.root]: CssClassOrProps
}

export class ByocStyling extends StylingModel<ByocStyleTargets> {
  @Property()
  declare targets: ByocStyleTargets
}
