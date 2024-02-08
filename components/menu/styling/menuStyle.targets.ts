import { Css } from '../../../../decorators/css.decorator'
import { type CssClassOrProps } from '../../../styling/cssClassOrProps.type'
import { MenuTargetsEnum } from '../targets/menuTargets.enum'

export class MenuStyleTargets {
  @Css()
  [MenuTargetsEnum.root]: CssClassOrProps
}
