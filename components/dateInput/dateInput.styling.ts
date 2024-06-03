import { Description, Property } from '@tsed/schema'

import { DateInputTargets } from './targets/dateInputTargets.enum'
import { Css } from '../../../decorators/schema/css.decorator'
import type { CssClassOrProps } from '../../styling/cssClassOrProps.type'
import type { StylingModel } from '../../styling/styling.model'
import { TargetsModel } from '../../viewTargets/targets.model'

class DateInputStyleTargets implements TargetsModel<DateInputTargets> {
  @Css()
  @Description("Adds styles to Component's ComponentWrapper subcomponent.")
  [DateInputTargets.root]: CssClassOrProps;

  @Css()
  @Description("Adds styles to Component's Label subcomponent.")
  [DateInputTargets.label]: CssClassOrProps;

  @Css()
  @Description("Adds styles to Component's Tooltip subcomponent button.")
  [DateInputTargets.tooltipButton]: CssClassOrProps;

  @Css()
  @Description("Adds styles to Component's Tooltip subcomponent popover.")
  [DateInputTargets.tooltipPopover]: CssClassOrProps;

  @Css()
  @Description("Adds styles to Component's div with role='presentation' wrapping the input and suffix subcomponents.")
  [DateInputTargets.inputGroup]: CssClassOrProps;

  @Css()
  @Description("Adds styles to Component's input subcomponent.")
  [DateInputTargets.coreDateInput]: CssClassOrProps;

  @Css()
  @Description("Adds styles to Component's SimpleView input subcomponent.")
  [DateInputTargets.simpleViewInput]: CssClassOrProps;

  @Css()
  @Description("Adds styles to Component's SimpleView view subcomponent.")
  [DateInputTargets.simpleViewView]: CssClassOrProps;

  @Css()
  @Description("Adds styles to Component's ReadOnly subcomponent.")
  [DateInputTargets.readOnly]: CssClassOrProps;

  @Css()
  @Description("Adds styles to Component's Errors subcomponent.")
  [DateInputTargets.suffix]: CssClassOrProps;

  @Css()
  @Description('Adds styles to Errors subcomponent root.')
  [DateInputTargets.errorsRoot]: CssClassOrProps;

  @Css()
  @Description('Adds styles to Errors subcomponent UL element.')
  [DateInputTargets.errorsUnorderedList]: CssClassOrProps;

  @Css()
  @Description('Adds styles to Errors subcomponent LI elements.')
  [DateInputTargets.errorsUnorderedListItem]: CssClassOrProps;

  @Css()
  @Description('Adds styles to Errors Field error root element, which is rendered within the LI elements.')
  [DateInputTargets.errorsFieldError]: CssClassOrProps
}

export class DateInputStyling implements StylingModel<DateInputStyleTargets> {
  @Property()
  targets: DateInputStyleTargets
}
