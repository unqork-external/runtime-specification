import { Property } from '@tsed/schema'

import { MenuStyleTargets } from './menuStyle.targets'

export class MenuStyling {
  @Property()
  targets: MenuStyleTargets
}
