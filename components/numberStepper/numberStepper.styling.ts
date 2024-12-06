import { Description, Property } from '@tsed/schema'

import { NumberStepperTargets } from './numberStepperTargets.enum'
import { Css } from '../../../decorators/schema/css.decorator'
import { type CssClassOrProps } from '../../styling/cssClassOrProps.type'
import { StylingModel } from '../../styling/styling.model'
import { TargetsModel } from '../../viewTargets/targets.model'

export class NumberStepperStyleTargets implements TargetsModel<NumberStepperTargets> {
  @Description("Adds styles to Number Stepper's ComponentWrapper.")
  @Css()
  [NumberStepperTargets.root]: CssClassOrProps;

  @Description("Adds styles to Number Stepper's Read only component.")
  @Css()
  [NumberStepperTargets.readOnly]: CssClassOrProps;

  @Description("Adds styles to Number Stepper's label.")
  @Css()
  [NumberStepperTargets.label]: CssClassOrProps;

  @Description("Adds styles to Number Stepper's display value.")
  @Css()
  [NumberStepperTargets.displayValue]: CssClassOrProps;

  @Description("Adds styles to Number Stepper's helper text.")
  @Css()
  [NumberStepperTargets.helperText]: CssClassOrProps;

  @Description("Adds styles to Number Stepper's error message.")
  @Css()
  [NumberStepperTargets.errors]: CssClassOrProps;

  @Description(
    "Adds styles to Number Stepper's prefix (the prefix appears on the min value, max value, and display value).",
  )
  @Css()
  [NumberStepperTargets.prefix]: CssClassOrProps;

  @Description(
    "Adds styles to Number Stepper's suffix (the suffix appears on the min value, max value, and display value).",
  )
  @Css()
  [NumberStepperTargets.suffix]: CssClassOrProps;

  @Description("Adds styles to Number Stepper's tooltip button.")
  @Css()
  [NumberStepperTargets.tooltipButton]: CssClassOrProps;

  @Description("Adds styles to Number Stepper's tooltip popover text.")
  @Css()
  [NumberStepperTargets.tooltipPopover]: CssClassOrProps;

  @Description("Adds styles to Number Stepper's minus button.")
  @Css()
  [NumberStepperTargets.minusButton]: CssClassOrProps;

  @Description("Adds styles to Number Stepper's plus button.")
  @Css()
  [NumberStepperTargets.plusButton]: CssClassOrProps;

  @Description("Adds styles to Number Stepper's minimum value label.")
  @Css()
  [NumberStepperTargets.minLabel]: CssClassOrProps;

  @Description("Adds styles to Number Stepper's maximum value label.")
  @Css()
  [NumberStepperTargets.maxLabel]: CssClassOrProps
}

export class NumberStepperStyling extends StylingModel<NumberStepperStyleTargets> {
  @Property()
  declare targets: NumberStepperStyleTargets
}
