import { DiscriminatorValue, Required } from '@tsed/schema'

import { TableSetRowDensityOptions } from './tableSetRowDensity.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TABLE_SET_ROW_DENSITY)
export class TableSetRowDensityOperation extends Operation<OperationTypes.TABLE_SET_ROW_DENSITY> {
  public type = OperationTypes.TABLE_SET_ROW_DENSITY as const

  @Required()
  public options: TableSetRowDensityOptions = new TableSetRowDensityOptions()
}
