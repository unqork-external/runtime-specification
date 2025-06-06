import { Description, Property } from '@tsed/schema'

import { AddressSearchTargets } from './addressSearchTargets.enum'
import { Css } from '../../../decorators/schema/css.decorator'
import { type CssClassOrProps } from '../../styling/cssClassOrProps.type'
import { StylingModel } from '../../styling/styling.model'
import type { TargetsModel } from '../../viewTargets/targets.model'

export class AddressSearchStyleTargets implements TargetsModel<AddressSearchTargets> {
  @Css()
  @Description('Wrapper styles')
  [AddressSearchTargets.root]: CssClassOrProps;

  @Description('Label styles')
  @Css()
  [AddressSearchTargets.label]: CssClassOrProps;

  @Description('Tooltip styles')
  @Css()
  [AddressSearchTargets.tooltip]: CssClassOrProps;

  @Description('Tooltip button styles')
  @Css()
  [AddressSearchTargets.tooltipButton]: CssClassOrProps;

  @Description('Tooltip popover styles')
  @Css()
  [AddressSearchTargets.tooltipPopover]: CssClassOrProps;

  @Description('Search input styles')
  @Css()
  [AddressSearchTargets.searchInput]: CssClassOrProps;

  @Description('Search input Container styles')
  @Css()
  [AddressSearchTargets.searchInputContainer]: CssClassOrProps;

  @Description('Loading icon styles')
  @Css()
  [AddressSearchTargets.loadingIcon]: CssClassOrProps;

  @Description('Loading label styles')
  @Css()
  [AddressSearchTargets.loadingLabel]: CssClassOrProps;

  @Description('Popup indicator styles')
  @Css()
  [AddressSearchTargets.popupIndicatorButton]: CssClassOrProps;

  @Description('Helper text styles')
  @Css()
  [AddressSearchTargets.helperText]: CssClassOrProps;

  @Description('Errors wrapper styles')
  @Css()
  [AddressSearchTargets.errors]: CssClassOrProps;

  @Description('Menu styles')
  @Css()
  [AddressSearchTargets.menu]: CssClassOrProps;

  @Description('Option styles')
  @Css()
  [AddressSearchTargets.option]: CssClassOrProps;

  @Description('No options label styles')
  @Css()
  [AddressSearchTargets.noOptionsLabel]: CssClassOrProps;

  @Description('Read only wrapper styles')
  @Css()
  [AddressSearchTargets.readOnlyWrapper]: CssClassOrProps;

  @Description('Read only label styles')
  @Css()
  [AddressSearchTargets.readOnlyLabel]: CssClassOrProps;

  @Description('Read only content styles')
  @Css()
  [AddressSearchTargets.readOnlyContent]: CssClassOrProps;

  @Description('Styles applied to all address part root container elements')
  @Css()
  [AddressSearchTargets.addressPartFieldRoot]: CssClassOrProps;

  @Description('Styles applied to all address part field wrapper elements')
  @Css()
  [AddressSearchTargets.addressPartFieldWrapper]: CssClassOrProps;

  @Description('Styles applied to all address part inputs')
  @Css()
  [AddressSearchTargets.addressPartInput]: CssClassOrProps;

  @Description('Styles applied to all address part labels')
  @Css()
  [AddressSearchTargets.addressPartLabel]: CssClassOrProps;

  @Description('Street Input styles')
  @Css()
  [AddressSearchTargets.streetInput]: CssClassOrProps;

  @Description('Street Label styles')
  @Css()
  [AddressSearchTargets.streetLabel]: CssClassOrProps;

  @Description('Street2 Input styles')
  @Css()
  [AddressSearchTargets.street2Input]: CssClassOrProps;

  @Description('Street2 Label styles')
  @Css()
  [AddressSearchTargets.street2Label]: CssClassOrProps;

  @Description('City Input styles')
  @Css()
  [AddressSearchTargets.cityInput]: CssClassOrProps;

  @Description('City Label styles')
  @Css()
  [AddressSearchTargets.cityLabel]: CssClassOrProps;

  @Description('State Input styles')
  @Css()
  [AddressSearchTargets.stateInput]: CssClassOrProps;

  @Description('State Label styles')
  @Css()
  [AddressSearchTargets.stateLabel]: CssClassOrProps;

  @Description('Zip Input styles')
  @Css()
  [AddressSearchTargets.zipInput]: CssClassOrProps;

  @Description('Zip Label styles')
  @Css()
  [AddressSearchTargets.zipLabel]: CssClassOrProps;

  @Description('Country Input styles')
  @Css()
  [AddressSearchTargets.countryInput]: CssClassOrProps;

  @Description('Country Label styles')
  @Css()
  [AddressSearchTargets.countryLabel]: CssClassOrProps;

  @Description('Country select dropdown')
  @Css()
  [AddressSearchTargets.countrySelectControl]: CssClassOrProps;

  @Description('Core Search Input Field wrapper styles')
  @Css()
  [AddressSearchTargets.searchInputFieldWrapper]: CssClassOrProps;

  @Description('Search Wrapper styles')
  @Css()
  [AddressSearchTargets.searchWrapper]: CssClassOrProps;

  @Description('Canada Post wrapper styles')
  @Css()
  [AddressSearchTargets.caPostWrapper]: CssClassOrProps;

  @Description('Canada Post Input wrapper styles')
  @Css()
  [AddressSearchTargets.caPostInput]: CssClassOrProps;

  @Description('Canada Post select dropdown label styles')
  @Css()
  [AddressSearchTargets.caPostSelectLabel]: CssClassOrProps;

  @Description('Canada Post select dropdown option styles')
  @Css()
  [AddressSearchTargets.caPostSelectOption]: CssClassOrProps
}

export class AddressSearchStyling extends StylingModel<AddressSearchStyleTargets> {
  @Property()
  declare targets: AddressSearchStyleTargets
}
