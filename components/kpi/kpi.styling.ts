import { Description, Property } from '@tsed/schema'

import { KpiTargets } from './kpiTargets.enum'
import { Css } from '../../../decorators/schema/css.decorator'
import { type CssClassOrProps } from '../../styling/cssClassOrProps.type'
import { StylingModel } from '../../styling/styling.model'
import { TargetsModel } from '../../viewTargets/targets.model'

export class KpiStyleTargets implements TargetsModel<KpiTargets> {
  @Css()
  @Description('Adds styles to the KPI Component Wrapper.')
  [KpiTargets.root]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the KPI icon.')
  [KpiTargets.icon]: CssClassOrProps;

  @Css()
  @Description("Adds styles to the KPI icon's wrapper.")
  [KpiTargets.iconWrapper]: CssClassOrProps;

  @Css()
  @Description("Adds styles to the KPI Component's inner content wrapper.")
  [KpiTargets.innerWrapper]: CssClassOrProps;

  @Css()
  @Description("Adds styles to the KPI Component's outer content wrapper.")
  [KpiTargets.outerWrapper]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the wrapper element around the title and value text.')
  [KpiTargets.textWrapper]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the KPI title text.')
  [KpiTargets.title]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the KPI title wrapper element.')
  [KpiTargets.titleWrapper]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the KPI value text.')
  [KpiTargets.value]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the KPI value wrapper element.')
  [KpiTargets.valueWrapper]: CssClassOrProps
}

export class KpiStyling extends StylingModel<KpiStyleTargets> {
  @Property()
  declare targets: KpiStyleTargets
}
