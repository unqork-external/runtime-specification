import { Description } from '@tsed/schema'

import { Aggregation } from './aggregation/aggregation'

export class ColumnState {
  @Description('boolean to handle showing or hiding column filters')
  showColumnFilters: boolean = false
  @Description('a map for column aggregation data')
  aggregation: Record<string, Aggregation>
}
