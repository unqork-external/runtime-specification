import { CollectionOf, Description, Required } from '@tsed/schema'

import { SortingState } from '../../../components/muiBasicTable/sorting/sortingState'

export class TableSortByColumnOperationOptions {
  @Required()
  @Description('Key of the Table component to perform column sorting.')
  targetKey: string

  @Required()
  @Description(
    'Collection of objects containing the id of the column to sort, and a boolean indicating whether the column should be sorted.',
  )
  @CollectionOf(SortingState)
  sortingState: SortingState[]
}
