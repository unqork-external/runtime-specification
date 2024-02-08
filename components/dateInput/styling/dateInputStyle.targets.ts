import { Css } from '../../../../decorators/css.decorator'
import { type CssClassOrProps } from '../../../styling/cssClassOrProps.type'
import { DateInputTargetEnum } from '../targets/dateInputTarget.enum'

export class DateInputStyleTargets {
  // TODO: Prettier adds semi colons, and eslint removes it.
  @Css()
  [DateInputTargetEnum.root]: CssClassOrProps

  @Css()
  [DateInputTargetEnum.simpleEdit]: CssClassOrProps

  @Css()
  [DateInputTargetEnum.simpleReadOnly]: CssClassOrProps
}
