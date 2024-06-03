import { Description } from '@tsed/schema'

import { Css } from '../../../../decorators/schema/css.decorator'
import { type CssClassOrProps } from '../../../styling/cssClassOrProps.type'
import { TimerTargets } from '../targets/timerTargets.enum'

export class TimerStyleTargets {
  @Description("Adds styles to Timer's ComponentWrapper.")
  @Css()
  [TimerTargets.ROOT]: CssClassOrProps;

  @Description("Adds styles to Timer's helper text.")
  @Css()
  [TimerTargets.HELPER_TEXT]: CssClassOrProps;

  @Description("Adds styles to Timer's display field.")
  @Css()
  [TimerTargets.TIMER_DISPLAY]: CssClassOrProps;

  @Description("Adds styles to Timer's label.")
  @Css()
  [TimerTargets.LABEL]: CssClassOrProps;

  @Description("Adds styles to Timer's tooltip button.")
  @Css()
  [TimerTargets.TOOLTIP_BUTTON]: CssClassOrProps;

  @Description("Adds styles to Timer's tooltip popover text.")
  @Css()
  [TimerTargets.TOOLTIP_POPOVER]: CssClassOrProps
}
