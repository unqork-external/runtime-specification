import { Property } from '@tsed/schema'

import { PanelStyleTargets } from './panelStyle.targets'
import { StylingModel } from '../../../styling'

export class PanelStyling extends StylingModel<PanelStyleTargets> {
  @Property()
  targets: PanelStyleTargets
}
