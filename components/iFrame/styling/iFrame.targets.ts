import { Description } from '@tsed/schema'

import { Css } from '../../../../decorators/schema/css.decorator'
import { type CssClassOrProps } from '../../../styling/cssClassOrProps.type'
import { IFrameTargets } from '../targets/IFrameTargets.enum'

export class IFrameStyleTargets {
  @Description('Styling target for the iframe HTML element')
  @Css()
  [IFrameTargets.root]: CssClassOrProps
}
