import { Description, Required } from '@tsed/schema'

import { ColumnPinningState } from '../../../components/muiBasicTable/columns/pinning/columnPinningState'
import { TargetedOperationOptions } from '../../interface'

export class TableSetColumnPinningOperationOptions extends TargetedOperationOptions {
  @Required()
  @Description('Lists of columns to pin.')
  columnPinningState: ColumnPinningState
}
