import { Property } from '@tsed/schema'

import { CanvasTargets } from './canvas.targets'
import type { StylingModel } from '../../../styling/styling.model'

export class CanvasStyling implements StylingModel<CanvasTargets> {
  @Property()
  targets: CanvasTargets
}
