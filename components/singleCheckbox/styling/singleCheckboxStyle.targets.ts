import { Css } from '../../../../decorators/css.decorator'
import { type CssClassOrProps } from '../../../styling/cssClassOrProps.type'
import { SingleCheckboxTargetsEnum } from '../targets/singleCheckboxTargets.enum'

export class SingleCheckboxStyleTargets {
  @Css()
  [SingleCheckboxTargetsEnum.root]: CssClassOrProps

  @Css()
  [SingleCheckboxTargetsEnum.readOnly]: CssClassOrProps

  @Css()
  [SingleCheckboxTargetsEnum.label]: CssClassOrProps

  @Css()
  [SingleCheckboxTargetsEnum.input]: CssClassOrProps

  @Css()
  [SingleCheckboxTargetsEnum.adornmentLeft]: CssClassOrProps

  @Css()
  [SingleCheckboxTargetsEnum.adornmentRight]: CssClassOrProps
}
