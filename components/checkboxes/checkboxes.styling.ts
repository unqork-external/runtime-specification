import { Description, Property } from '@tsed/schema'

import { CheckboxesTargets } from './checkboxesTargets.enum'
import { Css } from '../../../decorators/schema/css.decorator'
import { type CssClassOrProps } from '../../styling/cssClassOrProps.type'
import { StylingModel } from '../../styling/styling.model'
import { TargetsModel } from '../../viewTargets/targets.model'

export class CheckboxesStyleTargets implements TargetsModel<CheckboxesTargets> {
  @Css()
  @Description('Adds styles to checkboxes root ComponentWrapper.')
  [CheckboxesTargets.root]: CssClassOrProps;

  @Css()
  @Description('Adds styles to checkboxes read only component.')
  [CheckboxesTargets.readOnly]: CssClassOrProps;

  @Description('Adds styles to Checkboxes label element.')
  @Css()
  [CheckboxesTargets.label]: CssClassOrProps;

  @Description('Adds styles to Checkboxes sub-label element.')
  @Css()
  [CheckboxesTargets.subLabel]: CssClassOrProps;

  @Description('Adds styles to Checkboxes tooltip button element.')
  @Css()
  [CheckboxesTargets.tooltipButton]: CssClassOrProps;

  @Description('Adds styles to Checkboxes tooltip popover element.')
  @Css()
  [CheckboxesTargets.tooltipPopover]: CssClassOrProps;

  @Description('Adds styles to Checkboxes helper text element.')
  @Css()
  [CheckboxesTargets.helperText]: CssClassOrProps;

  @Description('Adds styles to Checkboxes checkbox columns wrapper element.')
  @Css()
  [CheckboxesTargets.checkboxColumnsWrapper]: CssClassOrProps;

  @Description('Adds styles to Checkboxes checkbox column elements.')
  @Css()
  [CheckboxesTargets.checkboxColumns]: CssClassOrProps;

  @Description('Adds styles to Checkboxes checkbox wrapper elements.')
  @Css()
  [CheckboxesTargets.checkboxWrapper]: CssClassOrProps;

  @Description('Adds styles to Checkboxes checkbox label wrapper elements.')
  @Css()
  [CheckboxesTargets.checkboxLabelWrapper]: CssClassOrProps;

  @Description('Adds styles to Checkboxes checkbox label elements.')
  @Css()
  [CheckboxesTargets.checkboxLabel]: CssClassOrProps;

  @Description('Adds styles to Checkboxes checkbox label text elements.')
  @Css()
  [CheckboxesTargets.checkboxLabelText]: CssClassOrProps;

  @Description('Adds styles to Checkboxes checkbox elements.')
  @Css()
  [CheckboxesTargets.checkbox]: CssClassOrProps;

  @Css()
  @Description('Adds styles to Errors component root, which is rendered within the Checkboxes component.')
  [CheckboxesTargets.errorsRoot]: CssClassOrProps;

  @Css()
  @Description('Adds styles to Errors component UL element.')
  [CheckboxesTargets.errorsUnorderedList]: CssClassOrProps;

  @Css()
  @Description('Adds styles to Errors component LI elements.')
  [CheckboxesTargets.errorsUnorderedListItem]: CssClassOrProps;

  @Css()
  @Description('Adds styles to Errors Field error root element, which is rendered within the LI elements.')
  [CheckboxesTargets.errorsFieldError]: CssClassOrProps
}

export class CheckboxesStyling extends StylingModel<CheckboxesStyleTargets> {
  @Property()
  targets: CheckboxesStyleTargets
}
