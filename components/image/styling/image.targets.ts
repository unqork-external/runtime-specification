import { Description } from '@tsed/schema'

import { Css } from '../../../../decorators/schema/css.decorator'
import { type CssClassOrProps } from '../../../styling/cssClassOrProps.type'
import { TargetsModel } from '../../../viewTargets/targets.model'
import { ImageTargets } from '../imageTargets.enum'

@Description('An object containing styling for the component.')
export class ImageStyleTargets implements TargetsModel<ImageTargets> {
  @Css()
  @Description('Adds styles to the image element.')
  [ImageTargets.root]: CssClassOrProps
}
