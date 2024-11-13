import { CollectionOf, Description, Required } from '@tsed/schema'

import { ChartSeries } from '../../../components'

export class ChartSetSeriesOperationOptions {
  @Required()
  @Description('The Property ID for the target Chart component.')
  targetKey: string

  @Required()
  @Description('The series configuration to update.')
  @CollectionOf(ChartSeries)
  series: ChartSeries[]
}
