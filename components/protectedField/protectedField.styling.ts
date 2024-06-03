import { Description } from '@tsed/schema'

import { ProtectedFieldTargets } from './protectedField.targets.enum'
import { Css } from '../../../decorators/schema/css.decorator'
import { StylingModel } from '../../styling'
import { type CssClassOrProps } from '../../styling/cssClassOrProps.type'
import { TargetsModel } from '../../viewTargets/targets.model'

export class ProtectedFieldStyleTargets implements TargetsModel<ProtectedFieldTargets> {
  @Description("Adds styles to ProtectedField's ComponentWrapper.")
  @Css()
  [ProtectedFieldTargets.root]: CssClassOrProps;

  @Description("Adds styles to ProtectedField's label.")
  @Css()
  [ProtectedFieldTargets.label]: CssClassOrProps;

  @Description("Adds styles to ProtectedField's tooltip button.")
  @Css()
  [ProtectedFieldTargets.tooltipButton]: CssClassOrProps;

  @Description("Adds styles to ProtectedField's tooltip popover text.")
  @Css()
  [ProtectedFieldTargets.tooltipPopover]: CssClassOrProps;

  @Description("Adds styles to ProtectedField's input field.")
  @Css()
  [ProtectedFieldTargets.input]: CssClassOrProps;

  @Description("Adds styles to ProtectedField's error message.")
  @Css()
  [ProtectedFieldTargets.errors]: CssClassOrProps;

  @Description("Adds styles to ProtectedField's input prefix.")
  @Css()
  [ProtectedFieldTargets.inputPrefix]: CssClassOrProps;

  @Description("Adds styles to ProtectedField's input suffix.")
  @Css()
  [ProtectedFieldTargets.inputSuffix]: CssClassOrProps;

  @Description("Adds styles to ProtectedField's input wrapper.")
  @Css()
  [ProtectedFieldTargets.inputWrapper]: CssClassOrProps;

  @Description("Adds styles to ProtectedField's readOnly view.")
  @Css()
  [ProtectedFieldTargets.readOnly]: CssClassOrProps
}

export class ProtectedFieldStyling extends StylingModel<ProtectedFieldStyleTargets> {
  @Description('ProtectedField subComponents that can accept additional styles.')
  targets: ProtectedFieldStyleTargets
}
