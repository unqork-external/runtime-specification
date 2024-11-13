import { CollectionOf, Description, Example, Required } from '@tsed/schema'

import { ChartSeries } from '../../../components'

export class ChartAddSeriesOperationOptions {
  @Required()
  @Description('The Property ID for the target Chart component.')
  targetKey: string

  @Description(
    'The index to insert the newly created series, starting at 0. If unset, adds the series to the end. Existing series on the same index will be pushed below. Negative indexes add from the bottom.',
  )
  @Example(0)
  targetIndex?: number

  @Required()
  @Description('The new series to add.')
  @CollectionOf(ChartSeries)
  series: ChartSeries[]
}
