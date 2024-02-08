import { Property } from '@tsed/schema'

import { TypographyStyleTargets } from './typography.targets'

export class TypographyStyling {
  @Property()
  targets: TypographyStyleTargets
}
