import { Default, Description, Optional } from '@tsed/schema'

import { Display } from '../../component-composition/display/component.display'

export class PositionDisplay extends Display {
  @Optional()
  @Default(true)
  @Description('Whether positioned element is visible or hidden')
  hidden: boolean = true

  // local component state
  anchorHidden?: boolean
  anchorRendered?: boolean
}
