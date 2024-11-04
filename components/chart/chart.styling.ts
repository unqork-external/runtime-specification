import { Description, Property } from '@tsed/schema'

import { ChartTargets } from './chart.targets.enum'
import { Css } from '../../../decorators/schema/css.decorator'
import { type CssClassOrProps } from '../../styling/cssClassOrProps.type'
import { StylingModel } from '../../styling/styling.model'
import { TargetsModel } from '../../viewTargets/targets.model'

export class ChartStyleTargets implements TargetsModel<ChartTargets> {
  @Css()
  @Description('Styles for the chart root wrapper.')
  [ChartTargets.root]: CssClassOrProps
}

export class ChartStyling extends StylingModel<ChartStyleTargets> {
  @Property()
  targets: ChartStyleTargets
}
