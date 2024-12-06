import { Description, Property } from '@tsed/schema'

import { RadioTargets } from './radioTargets.enum'
import { Css } from '../../../decorators/schema/css.decorator'
import { type CssClassOrProps } from '../../styling/cssClassOrProps.type'
import { StylingModel } from '../../styling/styling.model'
import { TargetsModel } from '../../viewTargets/targets.model'

export class RadioStyleTargets implements TargetsModel<RadioTargets> {
  @Description("Adds styles to Radio's ComponentWrapper.")
  @Css()
  [RadioTargets.root]: CssClassOrProps;

  @Description("Adds styles to Radio's label.")
  @Css()
  [RadioTargets.label]: CssClassOrProps;

  @Description("Adds styles to Radio's sublabel.")
  @Css()
  [RadioTargets.subLabel]: CssClassOrProps;

  @Description('Adds styles to the Tooltip sub-component Popover element')
  @Css()
  [RadioTargets.tooltipPopover]: CssClassOrProps;

  @Description('Adds styles to the Tooltip sub-component Button element')
  @Css()
  [RadioTargets.tooltipButton]: CssClassOrProps;

  @Description("Adds styles to Radio's read only text.")
  @Css()
  [RadioTargets.readOnly]: CssClassOrProps;

  @Description('Adds styles to the root of the CoreRadio sub-component')
  @Css()
  [RadioTargets.coreRadioRoot]: CssClassOrProps;

  @Description('Adds styles to the HTML option label elements of the CoreRadio sub-component')
  @Css()
  [RadioTargets.coreRadioOptionLabel]: CssClassOrProps;

  @Description('Adds styles to the HTML option input elements of the CoreRadio sub-component')
  @Css()
  [RadioTargets.coreRadioOptionInput]: CssClassOrProps;

  @Description("Adds styles to Radio's root of the Errors sub-component")
  @Css()
  [RadioTargets.errorsRoot]: CssClassOrProps;

  @Description('Adds styles to Radio UL HTML element in the Errors sub-component')
  @Css()
  [RadioTargets.errorsUnorderedList]: CssClassOrProps;

  @Description("Adds styles to Radio's each LI HTML element in the Errors sub-component")
  @Css()
  [RadioTargets.errorsUnorderedListItem]: CssClassOrProps;

  @Description("Adds styles to Radio's each FieldError sub-component in Errors")
  @Css()
  [RadioTargets.errorsFieldError]: CssClassOrProps
}

export class RadioStyling extends StylingModel<RadioStyleTargets> {
  @Property()
  declare targets: RadioStyleTargets
}
