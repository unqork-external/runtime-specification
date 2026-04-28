import { Description, Property } from '@tsed/schema'

import { UdEmbeddedQuillTargets } from './udEmbeddedQuillTargets.enum'
import { Css } from '../../../decorators/schema/css.decorator'
import { type CssClassOrProps } from '../../styling/cssClassOrProps.type'
import { StylingModel } from '../../styling/styling.model'
import { TargetsModel } from '../../viewTargets/targets.model'

export class UdEmbeddedQuillStyleTargets implements TargetsModel<UdEmbeddedQuillTargets> {
  @Css()
  @Description('Adds styles to udEmbeddedQuill root ComponentWrapper.')
  [UdEmbeddedQuillTargets.root]: CssClassOrProps
}

export class UdEmbeddedQuillStyling extends StylingModel<UdEmbeddedQuillStyleTargets> {
  @Property()
  declare targets: UdEmbeddedQuillStyleTargets
}
