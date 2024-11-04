import { Default, Description, Optional, Required } from '@tsed/schema'

import { ChartPropertyMap } from './chart.propertyMap'

export class ChartRefreshTarget {
  @Required()
  @Description('Property ID of the referenced component where the data resides.')
  target: string

  @Optional()
  @Description('Value of the referenced component where the data resides.')
  @Default('value')
  property = 'value'

  @Required()
  @Description(
    'Property map indicating which properties in the data reference component value array map to x and y values.',
  )
  propertyMap: ChartPropertyMap
}
