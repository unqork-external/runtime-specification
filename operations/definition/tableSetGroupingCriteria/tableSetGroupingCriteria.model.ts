import { DiscriminatorValue, Required } from '@tsed/schema'

import { TableSetGroupingCriteriaOperationOptions } from './tableSetGroupingCriteria.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TABLE_SET_GROUPING_CRITERIA)
export class TableSetGroupingCriteriaOperation extends Operation<OperationTypes.TABLE_SET_GROUPING_CRITERIA> {
  public type = OperationTypes.TABLE_SET_GROUPING_CRITERIA as const

  @Required()
  public options: TableSetGroupingCriteriaOperationOptions = new TableSetGroupingCriteriaOperationOptions()
}
