import { Description, Property } from '@tsed/schema'

import { AdvancedModeJsonDifferTargets } from './advancedModeJsonDifferTargets.enum'
import { Css } from '../../../decorators/schema/css.decorator'
import { type CssClassOrProps } from '../../styling/cssClassOrProps.type'
import { StylingModel } from '../../styling/styling.model'
import { TargetsModel } from '../../viewTargets/targets.model'

export class AdvancedModeJsonDifferStyleTargets implements TargetsModel<AdvancedModeJsonDifferTargets> {
  @Css()
  @Description('Adds styles to advancedModeJsonDiffer root ComponentWrapper.')
  [AdvancedModeJsonDifferTargets.root]: CssClassOrProps
}

export class AdvancedModeJsonDifferStyling extends StylingModel<AdvancedModeJsonDifferStyleTargets> {
  @Property()
  declare targets: AdvancedModeJsonDifferStyleTargets
}
