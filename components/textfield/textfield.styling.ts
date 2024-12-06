import { Description } from '@tsed/schema'

import { TextfieldTargets } from './textfieldTargets.enum'
import { Css } from '../../../decorators/schema/css.decorator'
import { type CssClassOrProps, StylingModel } from '../../styling'
import { TargetsModel } from '../../viewTargets/targets.model'

@Description('The possible targets for Textfield component styling.')
export class TextfieldStylingTargets implements TargetsModel<TextfieldTargets> {
  @Description('Adds styles to Textfield root ComponentWrapper.')
  @Css()
  [TextfieldTargets.root]: CssClassOrProps;

  @Description('Adds styles to Textfield input element.')
  @Css()
  [TextfieldTargets.input]: CssClassOrProps;

  @Description('Adds styles to Textfield input prefix element.')
  @Css()
  [TextfieldTargets.inputPrefix]: CssClassOrProps;

  @Description('Adds styles to Textfield input suffix element.')
  @Css()
  [TextfieldTargets.inputSuffix]: CssClassOrProps;

  @Description('Adds styles to Textfield validation error list element.')
  @Css()
  [TextfieldTargets.errors]: CssClassOrProps;

  @Description('Adds styles to Textfield label element.')
  @Css()
  [TextfieldTargets.label]: CssClassOrProps;

  @Description('Adds styles to Textfield tooltip element.')
  @Css()
  [TextfieldTargets.tooltip]: CssClassOrProps;

  @Description('Adds styles to Textfield tooltip button element.')
  @Css()
  [TextfieldTargets.tooltipButton]: CssClassOrProps;

  @Description('Adds styles to Textfield tooltip popover element.')
  @Css()
  [TextfieldTargets.tooltipPopover]: CssClassOrProps;

  @Description('Adds styles to Textfield helper text element.')
  @Css()
  [TextfieldTargets.helperText]: CssClassOrProps;

  @Description('Adds styles to Textfield character limit element when max length validation exists.')
  @Css()
  [TextfieldTargets.characterLimit]: CssClassOrProps;

  @Description('Adds styles to Textfield when set to Read Only.')
  @Css()
  [TextfieldTargets.readOnly]: CssClassOrProps;

  @Description('Adds styles to Textfield simple edit view for Tables.')
  @Css()
  [TextfieldTargets.simpleEdit]: CssClassOrProps;

  @Description('Adds styles to Textfield simple read only view for Tables.')
  @Css()
  [TextfieldTargets.simpleReadOnly]: CssClassOrProps
}

@Description('An object containing styling for the component.')
export class TextfieldStyling extends StylingModel<TextfieldStylingTargets> {
  declare targets: TextfieldStylingTargets
}
