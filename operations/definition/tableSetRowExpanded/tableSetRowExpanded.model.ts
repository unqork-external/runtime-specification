import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { TableSetRowExpandedOperationOptions } from './tableSetRowExpanded.options'
import { OpsBuilderStable, Stable } from '../../../../decorators/stability'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@Description('Expands/Collapses a parent row group in the Table component.')
@DiscriminatorValue(OperationTypes.TABLE_SET_ROW_EXPANDED)
@Stable()
@OpsBuilderStable()
export class TableSetRowExpandedOperation extends Operation<OperationTypes.TABLE_SET_ROW_EXPANDED> {
  public type = OperationTypes.TABLE_SET_ROW_EXPANDED as const

  @Required()
  public options: TableSetRowExpandedOperationOptions = new TableSetRowExpandedOperationOptions()
}
