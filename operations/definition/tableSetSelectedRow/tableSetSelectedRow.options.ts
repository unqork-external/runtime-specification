import { Property } from '@tsed/schema'

import { RowSelection } from '../../../components/muiBasicTable/selection/rowSelection'

export class TableSetSelectedRowOperationOptions {
  @Property()
  targetKey: string

  @Property()
  selectedRows: RowSelection
}
