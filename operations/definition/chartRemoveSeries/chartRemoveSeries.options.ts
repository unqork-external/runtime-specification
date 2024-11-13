import { CollectionOf, Description, Example, Required } from '@tsed/schema'

export class ChartRemoveSeriesOperationOptions {
  @Required()
  @Description('The Property ID for the target Chart component.')
  targetKey: string

  @Required()
  @CollectionOf('string')
  @Description('The IDs of the series to be removed.')
  @Example(['seriesA'])
  targetIds: string[]
}
