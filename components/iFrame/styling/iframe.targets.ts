import { Description } from '@tsed/schema'

import { Css } from '../../../../decorators/css.decorator'
import { type CssClassOrProps } from '../../../styling/cssClassOrProps.type'
import { InlineFrameTargetsEnum } from '../targets/InlineFrameTargetsEnum'

export class IFrameTargets {
  @Description('Styling target for the iframe HTML element')
  @Css()
  [InlineFrameTargetsEnum.root]: CssClassOrProps
}
