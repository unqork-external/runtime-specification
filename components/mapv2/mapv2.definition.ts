import { Const, Default, Description, DiscriminatorValue, Optional, Property } from '@tsed/schema'

import { Mapv2Styling } from './mapv2.styling'
import { Mapv2Field } from './mapv2Field.definition'
import { Mapv2Options } from './mapv2Options.definition'
import { Mapv2Targets } from './mapv2Targets.enum'
import { MapValue } from './mapv2Value'
import { ViewTargets } from '../../../decorators'
import { BaseComponentDefinition } from '../../base-component-interface'
import { Display } from '../../component-composition'
import type { SignalTargets } from '../../signals'

@DiscriminatorValue('mapv2')
@ViewTargets(Mapv2Targets)
export class Mapv2ComponentDefinition extends BaseComponentDefinition {
  @Const('mapv2')
  type: 'mapv2' = 'mapv2' as const

  @Optional()
  declare styling?: Mapv2Styling

  @Optional()
  declare signals?: SignalTargets<Mapv2Targets>

  @Optional()
  display?: Display = new Display()

  @Property()
  field: Mapv2Field = new Mapv2Field()

  @Optional()
  @Description('The API key to access Google Maps API.')
  googleKey?: string

  @Optional()
  mapOptions?: Mapv2Options = new Mapv2Options()

  @Optional()
  value?: MapValue = new MapValue()

  @Default(600)
  @Description(
    'The number of milliseconds that pass before this component calls the Google Maps API before using the Data Reference Key value' +
      'The default value is 600 ms.',
  )
  debounce: number = 600

  @Default('United States')
  @Description('The default location on browser load.')
  defaultLocation: string = 'United States'

  @Default(8)
  @Description(
    "The map's zoom level based on the location set in The Default Location on Browser Load field. " +
      'Set a value between 1 (World Map) and 22 (Street Level).The default value is 8.',
  )
  defaultZoom: number = 8

  @Default(15)
  @Description(
    'The level of zoom after Set a value between 1 (World Map) and 22 (Street Level).' +
      'The default for this setting is 15.',
  )
  pointZoom: number = 15

  @Default('400px')
  @Description('Set the height of the map view port in pixels (px).The default value is 400px.')
  mapHeight: string = '400px'

  @Default('100%')
  @Description('Set the width of the map view port in percentage (%) or in pixels (px). The default value is 100%.')
  mapWidth: string = '100%'
}
