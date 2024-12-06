import { Description, Property } from '@tsed/schema'

import { EmailTargets } from './emailTargets.enum'
import { Css } from '../../../decorators/schema/css.decorator'
import { type CssClassOrProps } from '../../styling/cssClassOrProps.type'
import { StylingModel } from '../../styling/styling.model'
import { TargetsModel } from '../../viewTargets/targets.model'
import { DateInputTargets } from '../dateInput/targets/dateInputTargets.enum'

export class EmailStyleTargets implements TargetsModel<EmailTargets> {
  @Css()
  @Description('Adds styles to Email root ComponentWrapper.')
  [EmailTargets.root]: CssClassOrProps;

  @Css()
  @Description('Adds styles to Email ReadOnly target.')
  [EmailTargets.readOnly]: CssClassOrProps;

  @Css()
  @Description('Adds styles to Email Label target.')
  [EmailTargets.label]: CssClassOrProps;

  @Css()
  @Description('Adds styles to Email Input target.')
  [EmailTargets.input]: CssClassOrProps;

  @Css()
  @Description('Adds styles to Email HelperText target.')
  [EmailTargets.helperText]: CssClassOrProps;

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
  [DateInputTargets.errorsFieldError]: CssClassOrProps;

  @Css()
  @Description('Adds styles to Email Tooltip Button target.')
  [EmailTargets.tooltipButton]: CssClassOrProps;

  @Css()
  @Description('Adds styles to Email Tooltip Popover target.')
  [EmailTargets.tooltipPopover]: CssClassOrProps;

  @Css()
  @Description('Adds styles to Email Prefix target.')
  [EmailTargets.inputPrefix]: CssClassOrProps;

  @Css()
  @Description('Adds styles to Email Suffix target.')
  [EmailTargets.inputSuffix]: CssClassOrProps
}

export class EmailStyling extends StylingModel<EmailStyleTargets> {
  @Property()
  declare targets: EmailStyleTargets
}
