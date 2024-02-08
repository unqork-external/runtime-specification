import { Css } from '../../../../decorators/css.decorator'
import { type CssClassOrProps } from '../../../styling/cssClassOrProps.type'
import { TextfieldTargetsEnum } from '../targets/textfieldTargets.enum'

export class TextfieldStyleTargets {
  @Css()
  [TextfieldTargetsEnum.root]: CssClassOrProps

  @Css()
  [TextfieldTargetsEnum.readOnly]: CssClassOrProps

  @Css()
  [TextfieldTargetsEnum.label]: CssClassOrProps

  @Css()
  [TextfieldTargetsEnum.tooltip]: CssClassOrProps

  @Css()
  [TextfieldTargetsEnum.input]: CssClassOrProps

  @Css()
  [TextfieldTargetsEnum.helperText]: CssClassOrProps

  @Css()
  [TextfieldTargetsEnum.errors]: CssClassOrProps

  @Css()
  [TextfieldTargetsEnum.simpleEdit]: CssClassOrProps

  @Css()
  [TextfieldTargetsEnum.simpleReadOnly]: CssClassOrProps
}
