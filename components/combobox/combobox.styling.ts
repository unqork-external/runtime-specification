import { Description, Property } from '@tsed/schema'

import { ComboboxTargets } from './comboboxTargets.enum'
import { Css } from '../../../decorators/schema/css.decorator'
import { type CssClassOrProps } from '../../styling/cssClassOrProps.type'
import { StylingModel } from '../../styling/styling.model'
import { TargetsModel } from '../../viewTargets/targets.model'

export class ComboboxStyleTargets implements TargetsModel<ComboboxTargets> {
  @Css()
  @Description('Clear button styles.')
  [ComboboxTargets.clearButton]: CssClassOrProps;

  @Css()
  @Description('Control styles.')
  [ComboboxTargets.control]: CssClassOrProps;

  @Css()
  @Description('Error wrapper styles.')
  [ComboboxTargets.errorsFieldError]: CssClassOrProps;

  @Css()
  @Description('Error icon wrapper styles when in simple view.')
  [ComboboxTargets.errorsIcon]: CssClassOrProps;

  @Css()
  @Description('Error tooltip styles when in simple view.')
  [ComboboxTargets.errorsTooltip]: CssClassOrProps;

  @Css()
  @Description('Helper text styles.')
  [ComboboxTargets.helperText]: CssClassOrProps;

  @Css()
  @Description('Icon container styles.')
  [ComboboxTargets.icon]: CssClassOrProps;

  @Css()
  @Description('Label styles.')
  [ComboboxTargets.label]: CssClassOrProps;

  @Css()
  @Description('Loading label styles.')
  [ComboboxTargets.loadingLabel]: CssClassOrProps;

  @Css()
  @Description('No options label styles.')
  [ComboboxTargets.noOptionsLabel]: CssClassOrProps;

  @Css()
  @Description('Option description styles.')
  [ComboboxTargets.optionDescription]: CssClassOrProps;

  @Css()
  @Description('Option group list item styles.')
  [ComboboxTargets.optionGroupItem]: CssClassOrProps;

  @Css()
  @Description('Option icon container styles.')
  [ComboboxTargets.optionIcon]: CssClassOrProps;

  @Css()
  @Description('Option item styles.')
  [ComboboxTargets.optionItem]: CssClassOrProps;

  @Css()
  @Description('Option label styles.')
  [ComboboxTargets.optionLabel]: CssClassOrProps;

  @Css()
  @Description('Option text styles.')
  [ComboboxTargets.optionText]: CssClassOrProps;

  @Css()
  @Description('Popover wrapper styles.')
  [ComboboxTargets.popover]: CssClassOrProps;

  @Css()
  @Description('Popup indicator button styles.')
  [ComboboxTargets.popupIndicatorButton]: CssClassOrProps;

  @Css()
  @Description('Read only styles.')
  [ComboboxTargets.readOnly]: CssClassOrProps;

  @Css()
  @Description('Wrapper styles.')
  [ComboboxTargets.root]: CssClassOrProps;

  @Css()
  @Description('Search input styles.')
  [ComboboxTargets.searchInput]: CssClassOrProps;

  @Css()
  @Description('Selected option tag styles (when multiple is enabled).')
  [ComboboxTargets.selectedOptionTag]: CssClassOrProps;

  @Css()
  @Description('Selected option tag label delete button styles (when multiple is enabled).')
  [ComboboxTargets.selectedOptionTagDeleteButton]: CssClassOrProps;

  @Css()
  @Description('Selected option tag label text styles (when multiple is enabled).')
  [ComboboxTargets.selectedOptionTagLabel]: CssClassOrProps;

  @Css()
  @Description('Styles for the root component (when in simple view).')
  [ComboboxTargets.simpleView]: CssClassOrProps;

  @Css()
  @Description('Styles for the simple view text mode.')
  [ComboboxTargets.simpleViewText]: CssClassOrProps;

  @Css()
  @Description('Selected option tag styles (when in a simple view).')
  [ComboboxTargets.simpleViewSelectedOption]: CssClassOrProps;

  @Css()
  @Description('Selected option tag label text styles (when in a simple view).')
  [ComboboxTargets.simpleViewSelectedOptionLabel]: CssClassOrProps;

  @Css()
  @Description('Tooltip button styles.')
  [ComboboxTargets.tooltipButton]: CssClassOrProps;

  @Css()
  @Description('Tooltip popover styles.')
  [ComboboxTargets.tooltipPopover]: CssClassOrProps
}

export class ComboboxStyling extends StylingModel<ComboboxStyleTargets> {
  @Property()
  declare targets: ComboboxStyleTargets
}
