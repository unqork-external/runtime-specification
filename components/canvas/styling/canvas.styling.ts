import { Property } from '@tsed/schema'

import { CanvasStylingTargets } from './canvasStylingTargets'
import { StylingModel } from '../../../styling/styling.model'

export class CanvasStyling extends StylingModel<CanvasStylingTargets> {
  @Property()
  declare targets: CanvasStylingTargets
}
