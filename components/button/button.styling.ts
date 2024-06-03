import { Description, Property } from '@tsed/schema'

import { ButtonTargets } from './buttonTargets.enum'
import { Css } from '../../../decorators/schema/css.decorator'
import { type CssClassOrProps } from '../../styling/cssClassOrProps.type'
import { StylingModel } from '../../styling/styling.model'
import { TargetsModel } from '../../viewTargets/targets.model'

export class ButtonStyleTargets implements TargetsModel<ButtonTargets> {
  @Css()
  @Description('Adds styles to Button root ComponentWrapper.')
  [ButtonTargets.root]: CssClassOrProps;

  @Css()
  @Description("Adds styles to Button's button HTML element.")
  [ButtonTargets.button]: CssClassOrProps;

  @Css()
  @Description("Adds styles to Button's left icon.")
  [ButtonTargets.leftIcon]: CssClassOrProps;

  @Css()
  @Description("Adds styles to Button's right icon.")
  [ButtonTargets.rightIcon]: CssClassOrProps;

  @Css()
  @Description("Adds styles to Button's text label.")
  [ButtonTargets.label]: CssClassOrProps;

  @Css()
  @Description("Adds styles to Button's loading icon.")
  [ButtonTargets.loadingIcon]: CssClassOrProps;

  @Css()
  @Description('Adds styles to Errors component root, which is rendered within the Button component.')
  [ButtonTargets.errorsRoot]: CssClassOrProps;

  @Css()
  @Description('Adds styles to Errors component UL element.')
  [ButtonTargets.errorsUnorderedList]: CssClassOrProps;

  @Css()
  @Description('Adds styles to Errors component LI elements.')
  [ButtonTargets.errorsUnorderedListItem]: CssClassOrProps;

  @Css()
  @Description('Adds styles to Errors Field error root element, which is rendered within the LI elements.')
  [ButtonTargets.errorsFieldError]: CssClassOrProps;

  // Styles specific to the <ButtonSimpleView />
  @Css()
  @Description("Adds styles to ButtonSimpleView's root, which wraps the button HTML element.")
  [ButtonTargets.simpleViewRoot]: CssClassOrProps;

  @Css()
  @Description("Adds styles to ButtonSimpleView's button HTML element.")
  [ButtonTargets.simpleViewButton]: CssClassOrProps
}

export class ButtonStyling extends StylingModel<ButtonStyleTargets> {
  @Property()
  targets: ButtonStyleTargets
}
