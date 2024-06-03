import { Description } from '@tsed/schema'

import { Css } from '../../../../decorators/schema/css.decorator'
import { type CssClassOrProps } from '../../../styling/cssClassOrProps.type'
import { TextfieldTargets } from '../targets/textfieldTargets.enum'

export class TextfieldStyleTargets {
  @Description("Adds styles to Textfield's ComponentWrapper.")
  @Css()
  [TextfieldTargets.ROOT]: CssClassOrProps;

  @Description("Adds styles to Textfield's character limit text.")
  @Css()
  [TextfieldTargets.CHARACTER_LIMIT]: CssClassOrProps;

  @Description("Adds styles to Textfield's error message.")
  @Css()
  [TextfieldTargets.ERRORS]: CssClassOrProps;

  @Description("Adds styles to Textfield's helper text.")
  @Css()
  [TextfieldTargets.HELPER_TEXT]: CssClassOrProps;

  @Description("Adds styles to Textfield's input field.")
  @Css()
  [TextfieldTargets.INPUT]: CssClassOrProps;

  @Description("Adds styles to Textfield's label.")
  @Css()
  [TextfieldTargets.LABEL]: CssClassOrProps;

  @Description("Adds styles to Textfield's prefix.")
  @Css()
  [TextfieldTargets.PREFIX]: CssClassOrProps;

  @Description("Adds styles to Textfield's read only text.")
  @Css()
  [TextfieldTargets.READ_ONLY]: CssClassOrProps;

  @Description("Adds styles to Textfield's simple edit view.")
  @Css()
  [TextfieldTargets.SIMPLE_EDIT]: CssClassOrProps;

  @Description("Adds styles to Textfield's simple edit's read only text.")
  @Css()
  [TextfieldTargets.SIMPLE_READ_ONLY]: CssClassOrProps;

  @Description("Adds styles to Textfield's suffix.")
  @Css()
  [TextfieldTargets.SUFFIX]: CssClassOrProps;

  @Description("Adds styles to Textfield's tooltip button.")
  @Css()
  [TextfieldTargets.TOOLTIP_BUTTON]: CssClassOrProps;

  @Description("Adds styles to Textfield's tooltip popover text.")
  @Css()
  [TextfieldTargets.TOOLTIP_POPOVER]: CssClassOrProps
}
