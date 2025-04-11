import { Default, Description, Enum, Optional, Required } from '@tsed/schema'

import { countryFilterExample, countryISOExample, locationExample } from './addressSearch.examples'
import { Examples, ReflexiveDecorator } from '../../../decorators'

export enum AddressServiceType {
  'google-places' = 'google-places',
  'canada-post' = 'canada-post',
}

export class AddressSearchOptions {
  @Required()
  @Description(
    `The name of the places service to use. This needs to reference a service setup in the environment's services administration.`,
  )
  service: string

  @Required()
  @Enum(AddressServiceType)
  @Description(`The type of places api used. This can be Google Places or Canada Post`)
  serviceType: AddressServiceType

  @Optional()
  @ReflexiveDecorator({ path: 'options.serviceType', value: AddressServiceType['google-places'] })
  @Description(
    `A grouping of places to which you would like to restrict your results. Currently, you can use components to filter by up to 5 countries. Countries must be passed as a two character, ISO 3166-1 Alpha-2 compatible country code.
    
    Multiple countries must be passed as multiple country:XX filters, with the pipe character | as a separator.`,
  )
  @Examples(countryFilterExample)
  countryFilter?: string

  @Optional()
  @ReflexiveDecorator({ path: 'options.serviceType', value: AddressServiceType['google-places'] })
  @Description(
    `The point around which to retrieve place information. This must be specified as latitude,longitude. The radius parameter must also be provided when specifying a location. If radius is not provided, the location parameter is ignored.
    
    This is only used when the options.serviceType is google-places.`,
  )
  @Examples(locationExample)
  location?: string

  @Optional()
  @ReflexiveDecorator({ path: 'options.serviceType', value: AddressServiceType['google-places'] })
  @Description(`The distance (in meters) within which to return place results. The maximum allowed radius is 50,000 meters.  
  
  You may bias results to a specified circle by passing a location and a radius parameter. Doing so instructs the service to prefer showing results within that circle; results outside of the defined area may still be displayed. 
  
  This is only used when the options.serviceType is google-places.`)
  radius?: number

  @Optional()
  @Default('CA')
  @ReflexiveDecorator({ path: 'options.serviceType', value: AddressServiceType['canada-post'] })
  @Description(
    `An ISO 3166-1 Alpha-2 compatible country code used to filter the results to a specific country.
    
    This is only used when the options.serviceType is canada-post.`,
  )
  @Examples(countryISOExample)
  countryISO: string = 'CA'
}
