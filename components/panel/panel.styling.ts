import { Property } from '@tsed/schema'

import { Css } from '../../../decorators/css.decorator'
import type { CssClassOrProps } from '../../styling'

export enum PanelTargetsEnum {
  root = 'root',
}

export class PanelStyleTargets {
  @Css()
  [PanelTargetsEnum.root]: CssClassOrProps
}

export class PanelStyling {
  @Property()
  targets: PanelStyleTargets
}
