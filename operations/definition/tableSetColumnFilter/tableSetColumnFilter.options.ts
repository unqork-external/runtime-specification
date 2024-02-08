import { CollectionOf, Property } from '@tsed/schema'

import { ColumnFilter } from '../../../components/muiBasicTable/filters/columnFilter'

export class TableSetColumnFilterOperationOptions {
  @Property()
  targetKey: string

  @Property()
  @CollectionOf(ColumnFilter)
  filters: ColumnFilter[]
}
