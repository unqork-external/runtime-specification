import { Css } from '../../../../decorators/css.decorator'
import { type CssClassOrProps } from '../../../styling/cssClassOrProps.type'
import { TypographyTargetsEnum } from '../targets/typographyTargets.enum'

export class TypographyStyleTargets {
  @Css()
  [TypographyTargetsEnum.root]: CssClassOrProps
}
