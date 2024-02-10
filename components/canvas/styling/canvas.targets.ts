import { Css } from '../../../../decorators/css.decorator'
import { type CssClassOrProps } from '../../../styling/cssClassOrProps.type'
import { CanvasTargetsEnum } from '../targets/canvasTargets.enum'

export class CanvasTargets {
  @Css()
  [CanvasTargetsEnum.root]: CssClassOrProps

  @Css()
  [CanvasTargetsEnum.canvas]: CssClassOrProps

  @Css()
  [CanvasTargetsEnum.canvasEmpty]: CssClassOrProps

  @Css()
  [CanvasTargetsEnum.dropzone]: CssClassOrProps

  @Css()
  [CanvasTargetsEnum.dragPreview]: CssClassOrProps

  @Css()
  [CanvasTargetsEnum.canvasItemHeader]: CssClassOrProps

  @Css()
  [CanvasTargetsEnum.canvasButtonsWrapper]: CssClassOrProps

  @Css()
  [CanvasTargetsEnum.representationButtonsWrapper]: CssClassOrProps
}
