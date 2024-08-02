import { Description, Required } from '@tsed/schema'

import { OpsBuilderStable, Stable } from '../../../../decorators/stability'
import { RowPinningState } from '../../../components/muiBasicTable/rows/pinning/rowPinningState'
import { TargetedOperationOptions } from '../../interface'

@Description('Sets the pinned rows of Table component.')
@Stable()
@OpsBuilderStable()
export class TableSetRowPinningOperationOptions extends TargetedOperationOptions {
  @Required()
  @Description('List of rows to be pinned to the top or bottom of the Table component.')
  rowPinningState: RowPinningState
}
