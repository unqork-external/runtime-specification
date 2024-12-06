import { Property } from '@tsed/schema'

import { IFrameStyleTargets } from './iFrame.targets'
import { StylingModel } from '../../../styling'

export class IFrameStyling extends StylingModel<IFrameStyleTargets> {
  @Property()
  declare targets: IFrameStyleTargets
}
