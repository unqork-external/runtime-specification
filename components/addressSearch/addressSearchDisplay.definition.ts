import { Default, Description, Optional } from '@tsed/schema'

import { AddressServiceType } from './addressSearchOptions.definition'
import { ReflexiveDecorator } from '../../../decorators'
import { InputDisplay } from '../../component-composition'

export class AddressSearchDisplay extends InputDisplay {
  @Optional()
  @Default(false)
  @Description('Whether to hide the address search box.')
  hideSearch: boolean = false

  @Optional()
  @Default(false)
  @Description('Whether to show the street input field.')
  street: boolean = false

  @Optional()
  @Default(false)
  @Description('Whether to show the street 2 input field.')
  street2: boolean = false

  @Optional()
  @Default(false)
  @Description('Whether to show the city input field.')
  city: boolean = false

  @Optional()
  @Default(false)
  @Description('Whether to show the state input field.')
  state: boolean = false

  @Optional()
  @Default(false)
  @Description('Whether to show the zip input field.')
  zip: boolean = false

  @Optional()
  @Default(false)
  @Description('Whether to show the country input field.')
  country: boolean = false

  @Optional()
  @Default(false)
  @ReflexiveDecorator({ path: 'options.serviceType', value: AddressServiceType['canada-post'] })
  @Description(
    'Allow a user to select the country to restrict results. This is only displayed when the options.serviceType is canada-post.',
  )
  countrySelector: boolean = false

  @Optional()
  @Default(false)
  @ReflexiveDecorator({ path: 'options.serviceType', value: AddressServiceType['google-places'] })
  @Description(
    'Show address in the address parts inputs in shortened format (ie Ave instead of Avenue, NY instead of New York, etc). This is only displayed when the options.serviceType is google-places.',
  )
  shortFormatAddress: boolean = false
}
