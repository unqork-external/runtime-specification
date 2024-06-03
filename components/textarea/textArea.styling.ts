import { Description } from '@tsed/schema'

import { TextAreaTargets } from './textAreaTargets.enum'
import { Css } from '../../../decorators/schema/css.decorator'
import { type CssClassOrProps, StylingModel } from '../../styling'
import { TargetsModel } from '../../viewTargets/targets.model'

export class TextAreaStyleTargets implements TargetsModel<TextAreaTargets> {
  @Description("Adds styles to TextArea's character limit text.")
  @Css()
  [TextAreaTargets.characterLimit]: CssClassOrProps;

  @Description("Adds styles to TextArea's error message.")
  @Css()
  [TextAreaTargets.errors]: CssClassOrProps;

  @Description("Adds styles to TextArea's helper text.")
  @Css()
  [TextAreaTargets.helperText]: CssClassOrProps;

  @Description("Adds styles to TextArea's input field.")
  @Css()
  [TextAreaTargets.input]: CssClassOrProps;

  @Description("Adds styles to TextArea's label.")
  @Css()
  [TextAreaTargets.label]: CssClassOrProps;

  @Description("Adds styles to TextArea's prefix.")
  @Css()
  [TextAreaTargets.inputPrefix]: CssClassOrProps;

  @Description("Adds styles to TextArea's read only text.")
  @Css()
  [TextAreaTargets.readOnly]: CssClassOrProps;

  @Description("Adds styles to TextArea's ComponentWrapper.")
  @Css()
  [TextAreaTargets.root]: CssClassOrProps;

  @Description("Adds styles to TextArea's suffix.")
  @Css()
  [TextAreaTargets.inputSuffix]: CssClassOrProps;

  @Description("Adds styles to TextArea's tooltip button.")
  @Css()
  [TextAreaTargets.tooltipButton]: CssClassOrProps;

  @Description("Adds styles to TextArea's tooltip popover text.")
  @Css()
  [TextAreaTargets.tooltipPopover]: CssClassOrProps
}

export class TextAreaStyling extends StylingModel<TextAreaStyleTargets> {
  @Description("TextArea's subcomponents that can accept additional styles.")
  targets: TextAreaStyleTargets
}
