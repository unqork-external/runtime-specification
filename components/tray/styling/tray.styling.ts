import { Property } from '@tsed/schema'

import { TrayTargets } from './tray.targets'
import type { StylingModel } from '../../../styling/styling.model'

export class TrayStyling implements StylingModel<TrayTargets> {
  @Property()
  targets: TrayTargets
}
