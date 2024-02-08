import { Css } from '../../../../decorators/css.decorator'
import { type CssClassOrProps } from '../../../styling/cssClassOrProps.type'
import { NumberRangeTargetsEnum } from '../targets/numberRangeTargets.enum'

export class NumberRangeStyleTargets {
  @Css()
  [NumberRangeTargetsEnum.root]: CssClassOrProps;

  @Css()
  [NumberRangeTargetsEnum.label]: CssClassOrProps;

  @Css()
  [NumberRangeTargetsEnum.input]: CssClassOrProps

  // It looks like styling targets have not been implemented for these React Core UI elements yet
  // @Css()
  // [NumberRangeTargetsEnum.tooltip]: CssClassOrProps;

  // @Css()
  // [NumberRangeTargetsEnum.helperText]: CssClassOrProps;

  // @Css()
  // [NumberRangeTargetsEnum.errors]: CssClassOrProps
}
