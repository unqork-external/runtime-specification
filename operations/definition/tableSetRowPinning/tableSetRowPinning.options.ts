import { Description, Required } from '@tsed/schema'

import { OpsBuilderStable, Stable } from '../../../../decorators/stability'
import { RowPinningState } from '../../../components/muiBasicTable/rows/pinning/rowPinningState'

@Description('Sets the pinned rows of Table component.')
@Stable()
@OpsBuilderStable()
export class TableSetRowPinningOperationOptions {
  @Required()
  @Description('Key of the Table component to perform row pinning.')
  targetKey: string

  @Required()
  @Description('List of rows to be pinned to the top or bottom of the Table component.')
  rowPinningState: RowPinningState
}
