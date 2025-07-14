import { Description, Property } from '@tsed/schema'

import { Mapv2Targets } from './mapv2Targets.enum'
import { Css } from '../../../decorators/schema/css.decorator'
import { type CssClassOrProps } from '../../styling/cssClassOrProps.type'
import { StylingModel } from '../../styling/styling.model'
import { TargetsModel } from '../../viewTargets/targets.model'

export class Mapv2StyleTargets implements TargetsModel<Mapv2Targets> {
  @Css()
  @Description('Adds styles to mapv2 root ComponentWrapper.')
  [Mapv2Targets.root]: CssClassOrProps;

  @Css()
  @Description('Adds styles to mapv2 label field.')
  [Mapv2Targets.label]: CssClassOrProps;

  @Css()
  @Description('Adds styles to mapv2 map.')
  [Mapv2Targets.map]: CssClassOrProps
}

export class Mapv2Styling extends StylingModel<Mapv2StyleTargets> {
  @Property()
  declare targets: Mapv2StyleTargets
}
