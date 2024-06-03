import { Description, Property } from '@tsed/schema'

import { SingleCheckboxTargets } from './singleCheckboxTargets'
import { Css } from '../../../decorators/schema/css.decorator'
import { type CssClassOrProps, StylingModel } from '../../styling'
import { TargetsModel } from '../../viewTargets/targets.model'

class SingleCheckboxStyleTargets implements TargetsModel<SingleCheckboxTargets> {
  @Css()
  @Description('Adds styles to ComponentWrapper.')
  [SingleCheckboxTargets.root]: CssClassOrProps;

  @Css()
  @Description('Adds styles to ReadOnly')
  [SingleCheckboxTargets.readOnly]: CssClassOrProps;

  @Css()
  @Description("Adds styles to Checkbox's label.")
  [SingleCheckboxTargets.label]: CssClassOrProps;

  @Css()
  @Description("Adds styles to Checkbox's input.")
  [SingleCheckboxTargets.input]: CssClassOrProps;

  @Css()
  @Description('Adds styles to Errors')
  [SingleCheckboxTargets.errors]: CssClassOrProps;

  @Css()
  @Description("Adds styles to Tooltip's button")
  [SingleCheckboxTargets.tooltipButton]: CssClassOrProps;

  @Css()
  @Description("Adds styles to Tooltip's popover")
  [SingleCheckboxTargets.tooltipPopover]: CssClassOrProps;

  @Css()
  @Description('Adds styles to HelperText')
  [SingleCheckboxTargets.helperText]: CssClassOrProps;

  @Css()
  @Description("Adds styles to Checkbox's left adornmment.")
  [SingleCheckboxTargets.adornmentLeft]: CssClassOrProps;

  @Css()
  @Description("Adds styles to Checkbox's right adornmment.")
  [SingleCheckboxTargets.adornmentRight]: CssClassOrProps
}

export class SingleCheckboxStyling extends StylingModel<SingleCheckboxStyleTargets> {
  @Property()
  targets: SingleCheckboxStyleTargets
}
