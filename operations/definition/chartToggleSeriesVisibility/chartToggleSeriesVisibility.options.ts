import { CollectionOf, Description, Example, Required } from '@tsed/schema'

export class ChartToggleSeriesVisibilityOperationOptions {
  @Required()
  @Description('The Property ID for the target Chart component.')
  targetKey: string

  @Required()
  @CollectionOf('string')
  @Description('The IDs of the series to target the visibility toggle.')
  @Example(['seriesA', 'seriesB'])
  targetIds: string[]

  @Required()
  @Description('The new state of the series visibility.')
  visible: boolean
}
