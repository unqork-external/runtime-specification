import { Description, Property } from '@tsed/schema'

import { UdLogicComposerCanvasTargets } from './udLogicComposerCanvasTargets.enum'
import { Css } from '../../../decorators/schema/css.decorator'
import { type CssClassOrProps } from '../../styling/cssClassOrProps.type'
import { StylingModel } from '../../styling/styling.model'
import { TargetsModel } from '../../viewTargets/targets.model'

export class UdLogicComposerCanvasStyleTargets implements TargetsModel<UdLogicComposerCanvasTargets> {
  @Css()
  @Description('Adds styles to udLogicComposerCanvas root ComponentWrapper.')
  [UdLogicComposerCanvasTargets.root]: CssClassOrProps
}

export class UdLogicComposerCanvasStyling extends StylingModel<UdLogicComposerCanvasStyleTargets> {
  @Property()
  declare targets: UdLogicComposerCanvasStyleTargets
}
