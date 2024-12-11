import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { TableSetFilterTypesOperationOptions } from './tableSetFilterTypes.options'
import { OpsBuilderStable, Stable } from '../../../../decorators/stability'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TABLE_SET_FILTER_TYPES)
@Description('Set the types and custom options for column filters in the Table component.')
@Stable()
@OpsBuilderStable()
export class TableSetFilterTypesOperation extends Operation<OperationTypes.TABLE_SET_FILTER_TYPES> {
  @Required()
  public type = OperationTypes.TABLE_SET_FILTER_TYPES as const

  @Required()
  public options: TableSetFilterTypesOperationOptions = new TableSetFilterTypesOperationOptions()
}
