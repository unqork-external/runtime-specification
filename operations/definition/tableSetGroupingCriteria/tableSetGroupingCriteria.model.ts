import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { TableSetGroupingCriteriaOperationOptions } from './tableSetGroupingCriteria.options'
import { Stable } from '../../../../decorators/stability/stable.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'
@Description('Sets columns to group on the Table component.')
@Stable()
@DiscriminatorValue(OperationTypes.TABLE_SET_GROUPING_CRITERIA)
export class TableSetGroupingCriteriaOperation extends Operation<OperationTypes.TABLE_SET_GROUPING_CRITERIA> {
  public type = OperationTypes.TABLE_SET_GROUPING_CRITERIA as const

  @Required()
  public options: TableSetGroupingCriteriaOperationOptions = new TableSetGroupingCriteriaOperationOptions()
}
