import { Description } from '@tsed/schema'

enum AggregationFunction {
  Sum = 'sum',
  Count = 'count',
  Extent = 'extent',
  Max = 'max',
  Mean = 'mean',
  Median = 'median',
  Min = 'min',
  UniqueCount = 'uniqueCount',
  Unique = 'unique',
}
export class Aggregation {
  @Description('a boolean that determines if the table should aggregate the column')
  isAggregated: boolean
  @Description('a string that can be used to give more context to the data for the column')
  label?: string
  @Description('a string that tells the table how to aggregate the data for the column')
  aggregateFunc: AggregationFunction
}
