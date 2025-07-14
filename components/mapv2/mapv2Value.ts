import { Description, Required } from '@tsed/schema'

export class Coords {
  @Required()
  @Description('The latitude of the address.')
  lat: number

  @Required()
  @Description('The longitude of the address.')
  lng: number
}

export class MapValue {
  @Required()
  @Description('The raw address or query text that was geocoded..')
  query: string

  @Required()
  @Description('The resulting latitude / longitude.')
  coords: Coords = new Coords()
}
