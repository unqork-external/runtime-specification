import { Description } from '@tsed/schema'

import { Css } from '../../../../decorators/schema/css.decorator'
import { type CssClassOrProps } from '../../../styling/cssClassOrProps.type'
import { SimpleSelectTargets } from '../targets/simpleSelectTargets.enum'

export class SimpleSelectStyleTargets {
  @Description("Adds styles to SimpleSelect's ComponentWrapper.")
  @Css()
  [SimpleSelectTargets.root]: CssClassOrProps;

  @Description("Adds styles to SimpleSelect's control wrapper.")
  @Css()
  [SimpleSelectTargets.controlWrapper]: CssClassOrProps;

  @Description("Adds styles to SimpleSelect's control")
  @Css()
  [SimpleSelectTargets.control]: CssClassOrProps;

  @Description("Adds styles to Simple Select's popper.")
  @Css()
  [SimpleSelectTargets.popper]: CssClassOrProps;

  @Description("Adds styles to SimpleSelect's label.")
  @Css()
  [SimpleSelectTargets.label]: CssClassOrProps;

  @Description("Adds styles to SimpleSelect's left & right adornment wrapper.")
  @Css()
  [SimpleSelectTargets.adornments]: CssClassOrProps;

  @Description("Adds styles to SimpleSelect's right adornment wrapper.")
  @Css()
  [SimpleSelectTargets.adornmentsRight]: CssClassOrProps;

  @Description("Adds styles to SimpleSelect's right adornment wrapper.")
  @Css()
  [SimpleSelectTargets.adornmentsLeft]: CssClassOrProps;

  @Description("Adds styles to SimpleSelect's read-only view.")
  @Css()
  [SimpleSelectTargets.readOnly]: CssClassOrProps;

  @Description("Adds styles to SimpleSelect's selected value.")
  @Css()
  [SimpleSelectTargets.selectedValue]: CssClassOrProps;

  @Css()
  @Description("Adds styles to SimpleSelect's Errors component root.")
  [SimpleSelectTargets.errorsRoot]: CssClassOrProps;

  @Css()
  @Description("Adds styles to SimpleSelect's Errors component UL element.")
  [SimpleSelectTargets.errorsUnorderedList]: CssClassOrProps;

  @Css()
  @Description("Adds styles to SimpleSelect's Errors component LI elements.")
  [SimpleSelectTargets.errorsUnorderedListItem]: CssClassOrProps;

  @Css()
  @Description("Adds styles to SimpleSelect's Errors field error element, which is rendered within the LI elements.")
  [SimpleSelectTargets.errorsFieldError]: CssClassOrProps;

  @Description("Adds styles to SimpleSelect's simple view Errors tooltip")
  @Css()
  [SimpleSelectTargets.errorsTooltip]: CssClassOrProps;

  @Description("Adds styles to SimpleSelect's simple view Errors icon")
  @Css()
  [SimpleSelectTargets.errorsIcon]: CssClassOrProps
}
