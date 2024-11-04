import { Description, Enum, Hidden, Optional, Required } from '@tsed/schema'

import { ChartRefreshTarget } from './chart.refreshTarget'
import { ChartTypes } from './chart.types'

export class ChartSeries {
  @Required()
  @Description('Series ID for operations.')
  id: string

  @Required()
  @Enum(ChartTypes)
  @Description('Type of the chart.')
  type: ChartTypes

  @Optional()
  @Description('Color for the series in the chart.')
  color?: string

  @Hidden()
  data?: [string | number, number | undefined][]

  @Optional()
  @Description('Series label.')
  label?: string

  @Required()
  @Description('Data source configuration.')
  refreshTarget: ChartRefreshTarget

  @Optional()
  @Description('Stacks all series of the same group name.')
  stackGroup?: string
}
