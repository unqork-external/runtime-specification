import { Property } from '@tsed/schema'

import { ColumnPinningState } from '../../../components/muiBasicTable/columns/pinning/columnPinningState'

export class TableSetColumnPinningOperationOptions {
  @Property()
  targetKey: string
  @Property()
  columnPinningState: ColumnPinningState
}
