import { Const, Description, DiscriminatorValue, Required } from '@tsed/schema'

import { TableRenameColumnOperationOptions } from './tableRenameColumn.options'
import { OpsBuilderStable, Stable } from '../../../../decorators/stability'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TABLE_RENAME_COLUMN)
@Description('Renames column labels of the Table component.')
@Stable()
@OpsBuilderStable()
export class TableRenameColumnOperation extends Operation<OperationTypes.TABLE_RENAME_COLUMN> {
  @Const(OperationTypes.TABLE_RENAME_COLUMN)
  public type = OperationTypes.TABLE_RENAME_COLUMN as const

  @Required()
  public options: TableRenameColumnOperationOptions = new TableRenameColumnOperationOptions()
}
