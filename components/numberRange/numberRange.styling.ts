import { Description } from '@tsed/schema'

import { NumberRangeTargets } from './numberRangeTargets.enum'
import { Css } from '../../../decorators/schema/css.decorator'
import { StylingModel } from '../../styling'
import { type CssClassOrProps } from '../../styling/cssClassOrProps.type'
import { TargetsModel } from '../../viewTargets/targets.model'

export class NumberRangeStyleTargets implements TargetsModel<NumberRangeTargets> {
  @Description("Adds styles to Number Range's ComponentWrapper.")
  @Css()
  [NumberRangeTargets.root]: CssClassOrProps;

  @Description("Adds styles to Number Range's Read only component.")
  @Css()
  [NumberRangeTargets.readOnly]: CssClassOrProps;

  @Description("Adds styles to Number Range's label.")
  @Css()
  [NumberRangeTargets.label]: CssClassOrProps;

  @Description("Adds styles to Number Range's input field.")
  @Css()
  [NumberRangeTargets.input]: CssClassOrProps;

  @Description("Adds styles to Number Range's helper text.")
  @Css()
  [NumberRangeTargets.helperText]: CssClassOrProps;

  @Description("Adds styles to Number Range's error message.")
  @Css()
  [NumberRangeTargets.errors]: CssClassOrProps;

  @Description("Adds styles to Number Range's prefix.")
  @Css()
  [NumberRangeTargets.inputPrefix]: CssClassOrProps;

  @Description("Adds styles to Number Range's suffix.")
  @Css()
  [NumberRangeTargets.inputSuffix]: CssClassOrProps;

  @Description("Adds styles to Number Range's tooltip button.")
  @Css()
  [NumberRangeTargets.tooltipButton]: CssClassOrProps;

  @Description("Adds styles to Number Range's tooltip popover text.")
  @Css()
  [NumberRangeTargets.tooltipPopover]: CssClassOrProps;

  @Description("Adds styles to Number Range wrapper's first child")
  @Css()
  [NumberRangeTargets.innerWrapper]: CssClassOrProps;

  @Description("Adds styles to Number Range wrapper's inner wrapper first child")
  @Css()
  [NumberRangeTargets.innerWrapperChild]: CssClassOrProps;

  @Description("Adds styles to Number Range's min max wrapper")
  @Css()
  [NumberRangeTargets.minMaxRangeWrapper]: CssClassOrProps;

  @Description("Adds styles to Number Range's min range")
  @Css()
  [NumberRangeTargets.minRange]: CssClassOrProps;

  @Description("Adds styles to Number Range's max range")
  @Css()
  [NumberRangeTargets.maxRange]: CssClassOrProps;

  @Description("Adds styles to Number Range's display value wrapper")
  @Css()
  [NumberRangeTargets.displayValueWrapper]: CssClassOrProps;

  @Description("Adds styles to Number Range's display value")
  @Css()
  [NumberRangeTargets.displayValue]: CssClassOrProps
}

export class NumberRangeStyling extends StylingModel<NumberRangeStyleTargets> {
  @Description("Number Range's subComponents that can accept additional styles.")
  targets: NumberRangeStyleTargets
}
