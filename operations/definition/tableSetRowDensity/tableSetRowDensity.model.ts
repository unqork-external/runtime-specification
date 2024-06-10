import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { TableSetRowDensityOptions } from './tableSetRowDensity.options'
import { Stable } from '../../../../decorators/stability/stable.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TABLE_SET_ROW_DENSITY)
@Description('Sets the amount of padding around cell content for all rows of the Table component.')
@Stable()
export class TableSetRowDensityOperation extends Operation<OperationTypes.TABLE_SET_ROW_DENSITY> {
  public type = OperationTypes.TABLE_SET_ROW_DENSITY as const

  @Required()
  public options: TableSetRowDensityOptions = new TableSetRowDensityOptions()
}
