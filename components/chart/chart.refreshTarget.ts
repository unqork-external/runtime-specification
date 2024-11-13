import { Default, Description, Optional, Property, Required } from '@tsed/schema'

import { ChartPropertyMap } from './chart.propertyMap'

export class ChartRefreshTarget {
  @Required()
  @Description('The property ID of the component that holds the data for the series.')
  target: string

  @Optional()
  @Description('The property in the component state that holds the data for the series.')
  @Default('value')
  @Property('string')
  property = 'value'

  @Required()
  @Description(
    'Property map indicating which properties in the data reference component value array map to X and Y values.',
  )
  propertyMap: ChartPropertyMap
}
