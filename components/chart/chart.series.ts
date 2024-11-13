import { Description, Enum, Example, Hidden, Optional, Required } from '@tsed/schema'

import { ChartRefreshTarget } from './chart.refreshTarget'
import { ChartTypes } from './chart.types'

export class ChartSeries {
  @Required()
  @Description('The unique identifier for the series of the Chart component.')
  id: string

  @Required()
  @Enum(ChartTypes)
  @Description('The type of chart to be displayed for the series.')
  type: ChartTypes

  @Optional()
  @Description(
    'The color of the new series to be displayed in the Chart component. Accepts color hex code, prefixed with #. ex: #990000 for dark red.',
  )
  @Example('#990000')
  color?: string

  @Hidden()
  data?: [string | number, number | undefined][]

  @Optional()
  @Description('The label of the series. Shown in the Legend and when the user hovers over the chart.')
  label?: string

  @Required()
  @Description('The .')
  refreshTarget: ChartRefreshTarget

  @Optional()
  @Description(
    'The logical grouping name of the series, which then becomes stacked with other series that use the exact same group name.',
  )
  stackGroup?: string

  @Hidden()
  visible = true
}
