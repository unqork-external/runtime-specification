import { Description, Required } from '@tsed/schema'

import { ColumnPinningState } from '../../../components/muiBasicTable/columns/pinning/columnPinningState'

export class TableSetColumnPinningOperationOptions {
  @Required()
  @Description('Key of the Table component to set column pinning.')
  targetKey: string

  @Required()
  @Description('Lists of columns to pin.')
  columnPinningState: ColumnPinningState
}
