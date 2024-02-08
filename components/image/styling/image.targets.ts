import { Css } from '../../../../decorators/css.decorator'
import { type CssClassOrProps } from '../../../styling/cssClassOrProps.type'
import { ImageTargetEnum } from '../targets/imageTarget.enum'

export class ImageTargets {
  @Css()
  [ImageTargetEnum.root]: CssClassOrProps
}
