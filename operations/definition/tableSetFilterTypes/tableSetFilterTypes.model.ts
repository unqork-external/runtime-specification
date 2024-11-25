import { DiscriminatorValue, Required } from '@tsed/schema'

import { TableSetFilterTypesOperationOptions } from './tableSetFilterTypes.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TABLE_SET_FILTER_TYPES)
export class TableSetFilterTypesOperation extends Operation<OperationTypes.TABLE_SET_FILTER_TYPES> {
  @Required()
  public type = OperationTypes.TABLE_SET_FILTER_TYPES as const

  @Required()
  public options: TableSetFilterTypesOperationOptions = new TableSetFilterTypesOperationOptions()
}
