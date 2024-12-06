import { Description, Property } from '@tsed/schema'

import { NumberFieldTargets } from './numberFieldTargets.enum'
import { Css } from '../../../decorators/schema/css.decorator'
import { StylingModel } from '../../styling'
import { type CssClassOrProps } from '../../styling/cssClassOrProps.type'
import { TargetsModel } from '../../viewTargets/targets.model'

export class NumberFieldStyleTargets implements TargetsModel<NumberFieldTargets> {
  @Description("Adds styles to Number Field's ComponentWrapper.")
  @Css()
  [NumberFieldTargets.root]: CssClassOrProps;

  @Description("Adds styles to Number Field's Read only component.")
  @Css()
  [NumberFieldTargets.readOnly]: CssClassOrProps;

  @Description("Adds styles to Number Field's label.")
  @Css()
  [NumberFieldTargets.label]: CssClassOrProps;

  @Description("Adds styles to Number Field's input field.")
  @Css()
  [NumberFieldTargets.input]: CssClassOrProps;

  @Description("Adds styles to Number Field's helper text.")
  @Css()
  [NumberFieldTargets.helperText]: CssClassOrProps;

  @Description("Adds styles to Number Field's error message.")
  @Css()
  [NumberFieldTargets.errors]: CssClassOrProps;

  @Description("Adds styles to Number Field's prefix.")
  @Css()
  [NumberFieldTargets.inputPrefix]: CssClassOrProps;

  @Description("Adds styles to Number Field's suffix.")
  @Css()
  [NumberFieldTargets.inputSuffix]: CssClassOrProps;

  @Description("Adds styles to Number Field's tooltip button.")
  @Css()
  [NumberFieldTargets.tooltipButton]: CssClassOrProps;

  @Description("Adds styles to Number Field's tooltip popover text.")
  @Css()
  [NumberFieldTargets.tooltipPopover]: CssClassOrProps;

  @Description("Adds styles to Number Field's simple view edit state")
  @Css()
  [NumberFieldTargets.simpleViewEdit]: CssClassOrProps;

  @Description("Adds styles to Number Field's simple view readonly state")
  @Css()
  [NumberFieldTargets.simpleViewReadOnly]: CssClassOrProps
}

export class NumberFieldStyling extends StylingModel<NumberFieldStyleTargets> {
  @Description("Number Field's subcomponents that can accept additional styles.")
  @Property()
  declare targets: NumberFieldStyleTargets
}
