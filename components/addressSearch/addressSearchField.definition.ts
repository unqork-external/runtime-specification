import { Description, Optional } from '@tsed/schema'

import { AddressServiceType } from './addressSearchOptions.definition'
import { ReflexiveDecorator, TrimmedDescription } from '../../../decorators'
import { Field } from '../../component-composition/field/component.field.label'
import { InputHelperText, InputLabel } from '../../component-composition/input/component.input'

export class AddressSearchField extends Field {
  @Optional()
  @Description('Label for the input control.')
  label: InputLabel = new InputLabel()

  @Optional()
  @Description('Label for the street input')
  streetLabel?: string

  @Optional()
  @Description('Label for the street 2 input')
  street2Label?: string

  @Optional()
  @Description('Label for the city input')
  cityLabel?: string

  @Optional()
  @Description('Label for the state input')
  stateLabel?: string

  @Optional()
  @Description('Label for the zip input')
  zipLabel?: string

  @Optional()
  @Description('Label for the country input')
  countryLabel?: string

  @Optional()
  @Description('Helper text displayed below the input control.')
  helperText: InputHelperText = new InputHelperText()

  @Optional()
  @Description('Label displayed in the options list when suggestions are being fetched.')
  loadingLabel?: string

  @Optional()
  @Description('Label displayed when there are no options.')
  noOptionsLabel?: string

  @Optional()
  @ReflexiveDecorator({ path: 'options.serviceType', value: AddressServiceType['canada-post'] })
  @Description('Label for the country selector. This is only displayed when the options.serviceType is canada-post.')
  countrySelectorLabel?: string

  @Optional()
  @Description('Label for the close menu indicator button used by screen readers.')
  closeButtonLabel?: string

  @Optional()
  @Description('Label for the open menu indicator button used by screen readers.')
  openButtonLabel?: string

  @Optional()
  @Description('Text displayed as a placeholder label when there are no options selected.')
  placeholder?: string

  @Optional()
  @Description("Text for the component's tooltip.")
  tooltipDescription?: string

  @Optional()
  @TrimmedDescription(`
      Adds a custom CSS class to the component. This is useful for targeting this component to apply custom styles.
    `)
  customClass?: string
}
