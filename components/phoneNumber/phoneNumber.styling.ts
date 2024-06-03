import { Description, Required } from '@tsed/schema'

import { PhoneNumberTargets } from './phoneNumberTargets.enum'
import { Css } from '../../../decorators/schema/css.decorator'
import { StylingModel } from '../../styling'
import { type CssClassOrProps } from '../../styling/cssClassOrProps.type'
import { TargetsModel } from '../../viewTargets/targets.model'
import { DateInputTargets } from '../dateInput/targets/dateInputTargets.enum'

export class PhoneNumberStyleTargets implements TargetsModel<PhoneNumberTargets> {
  @Description("Adds styles to PhoneNumber's ComponentWrapper.")
  @Css()
  [PhoneNumberTargets.root]: CssClassOrProps;

  @Description("Adds styles to PhoneNumber's label component.")
  @Css()
  [PhoneNumberTargets.label]: CssClassOrProps;

  @Description("Adds styles to PhoneNumber's input component.")
  @Css()
  [PhoneNumberTargets.input]: CssClassOrProps;

  @Description("Adds styles to PhoneNumber's tooltip button.")
  @Css()
  [PhoneNumberTargets.tooltipButton]: CssClassOrProps;

  @Description("Adds styles to PhoneNumber's tooltip popover.")
  @Css()
  [PhoneNumberTargets.tooltipPopover]: CssClassOrProps;

  @Description("Adds styles to PhoneNumber's prefix component.")
  @Css()
  [PhoneNumberTargets.inputPrefix]: CssClassOrProps;

  @Description("Adds styles to PhoneNumber's suffix component.")
  @Css()
  [PhoneNumberTargets.inputSuffix]: CssClassOrProps;

  @Description("Adds styles to PhoneNumber's read only component.")
  @Css()
  [PhoneNumberTargets.readOnly]: CssClassOrProps;

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
  [DateInputTargets.errorsFieldError]: CssClassOrProps;

  @Description("Adds styles to Intl PhoneNumber's dropdown component.")
  @Css()
  [PhoneNumberTargets.countryDopdown]: CssClassOrProps;

  @Description("Adds styles to Intl PhoneNumber's options.")
  @Css()
  [PhoneNumberTargets.countryDropdownOption]: CssClassOrProps
}

export class PhoneNumberStyling extends StylingModel<PhoneNumberStyleTargets> {
  @Required()
  targets: PhoneNumberStyleTargets
}
