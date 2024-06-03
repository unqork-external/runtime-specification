import { Description, Property } from '@tsed/schema'

import { DropdownTargets } from './dropdownTargets.enum'
import { Css } from '../../../decorators/schema/css.decorator'
import { type CssClassOrProps, StylingModel } from '../../styling'
import { type TargetsModel } from '../../viewTargets/targets.model'

export class DropdownStyleTargets implements TargetsModel<DropdownTargets> {
  @Description('CSS target located on the Dropdown root ComponentWrapper')
  @Css()
  [DropdownTargets.root]: CssClassOrProps;

  @Description('CSS target located on the Label sub-component')
  @Css()
  [DropdownTargets.label]: CssClassOrProps;

  @Description('CSS target located on the Tooltip sub-component Popover element')
  @Css()
  [DropdownTargets.tooltipPopover]: CssClassOrProps;

  @Description('CSS target located on the Tooltip sub-component Button element')
  @Css()
  [DropdownTargets.tooltipButton]: CssClassOrProps;

  @Description('CSS target located on the HelperText sub-component')
  @Css()
  [DropdownTargets.helperText]: CssClassOrProps;

  @Description('CSS target located on the ReadOnly sub-component')
  @Css()
  [DropdownTargets.readOnly]: CssClassOrProps;

  @Description('CSS target located on the root of the CoreDropdown sub-component')
  @Css()
  [DropdownTargets.dropdownRoot]: CssClassOrProps;

  @Description('CSS target located on the HTML select element of the CoreDropdown sub-component')
  @Css()
  [DropdownTargets.dropdownSelectControl]: CssClassOrProps;

  @Description('CSS target located on the HTML option elements of the CoreDropdown sub-component')
  @Css()
  [DropdownTargets.dropdownOption]: CssClassOrProps;

  @Description(
    'CSS target located on an HTML option element in the CoreDropdown sub-component (visible when no value is selected)',
  )
  @Css()
  [DropdownTargets.dropdownEmptyOption]: CssClassOrProps;

  @Description(
    'CSS target located on a HTML option element in the CoreDropdown sub-component containing the placeholder content',
  )
  @Css()
  [DropdownTargets.dropdownPlaceholderOption]: CssClassOrProps;

  @Description('CSS target located on the root of the Errors sub-component')
  @Css()
  [DropdownTargets.errorsRoot]: CssClassOrProps;

  @Description('CSS target located on the UL HTML element in the Errors sub-component')
  @Css()
  [DropdownTargets.errorsUnorderedList]: CssClassOrProps;

  @Description('CSS target located on each LI HTML element in the Errors sub-component')
  @Css()
  [DropdownTargets.errorsUnorderedListItem]: CssClassOrProps;

  @Description('CSS target located on each FieldError sub-component in Errors')
  @Css()
  [DropdownTargets.errorsFieldError]: CssClassOrProps
}

export class DropdownStyling extends StylingModel<DropdownStyleTargets> {
  @Property()
  targets: DropdownStyleTargets
}
