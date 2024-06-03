import { CollectionOf, Property } from '@tsed/schema'

import { SortingState } from '../../../components/muiBasicTable/sorting/sortingState'

export class TableSortByColumnOperationOptions {
  @Property()
  targetKey: string

  @CollectionOf(SortingState)
  sortingState: SortingState[]
}
