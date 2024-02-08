import { Property } from '@tsed/schema'

import { IFrameTargets } from './iframe.targets'

export class IFrameStyling {
  @Property()
  targets: IFrameTargets
}
