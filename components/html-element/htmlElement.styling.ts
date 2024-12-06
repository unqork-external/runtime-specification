import { Description, Property } from '@tsed/schema'

import { HtmlElementTargets } from './htmlElement.targets.enum'
import { Css } from '../../../decorators/schema/css.decorator'
import { StylingModel } from '../../styling'
import { type CssClassOrProps } from '../../styling/cssClassOrProps.type'

export class HtmlElementStyleTargets {
  @Css()
  @Description('Adds styles to Html Element root ComponentWrapper.')
  [HtmlElementTargets.root]: CssClassOrProps
}

export class HtmlElementStyling extends StylingModel<HtmlElementStyleTargets> {
  @Property()
  declare targets: HtmlElementStyleTargets
}
