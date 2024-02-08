import { Property } from '@tsed/schema'

import { RowPinningState } from '../../../components/muiBasicTable/rows/pinning/rowPinningState'

export class TableSetRowPinningOperationOptions {
  @Property()
  targetKey: string

  @Property()
  rowPinningState: RowPinningState
}
