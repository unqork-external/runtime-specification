import { Property } from '@tsed/schema'

import { CanvasTargets } from './canvas.targets'
import { StylingModel } from '../../../styling/styling.model'

export class CanvasStyling extends StylingModel<CanvasTargets> {
  @Property()
  declare targets: CanvasTargets
}
