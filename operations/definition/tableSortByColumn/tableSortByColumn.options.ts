import { CollectionOf, Description, Required } from '@tsed/schema'

import { SortingState } from '../../../components/muiBasicTable/sorting/sortingState'
import { TargetedOperationOptions } from '../../interface'

export class TableSortByColumnOperationOptions extends TargetedOperationOptions {
  @Required()
  @Description(
    'Collection of objects containing the id of the column to sort, and a boolean indicating whether the column should be sorted.',
  )
  @CollectionOf(SortingState)
  sortingState: SortingState[]
}
