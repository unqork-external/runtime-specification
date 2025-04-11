import { AdditionalProperties, Description, Optional } from '@tsed/schema'

@AdditionalProperties(String)
export class AddressSearchValue {
  @Optional()
  @Description('The human-readable address of the selected place.')
  formatted?: string

  @Optional()
  @Description('The street of the selected place.')
  street?: string

  @Optional()
  @Description('The second street of the selected place.')
  street2?: string

  @Optional()
  @Description('The state, province, oblast, or prefecture of the selected place.')
  state?: string

  @Optional()
  @Description('The city, town, neighborhood, borough, or district of the selected place.')
  city?: string

  @Optional()
  @Description('The postal code of the selected place.')
  zip?: string

  @Optional()
  @Description('The country of the selected place.')
  country?: string;

  // Additional metadata provided by the address service
  [key: string]: string | undefined
}
