import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { TableSetGroupingCriteriaOperationOptions } from './tableSetGroupingCriteria.options'
import { OpsBuilderStable, Stable } from '../../../../decorators/stability'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'
@Description('Sets columns to group on the Table component.')
@DiscriminatorValue(OperationTypes.TABLE_SET_GROUPING_CRITERIA)
@Stable()
@OpsBuilderStable()
export class TableSetGroupingCriteriaOperation extends Operation<OperationTypes.TABLE_SET_GROUPING_CRITERIA> {
  public type = OperationTypes.TABLE_SET_GROUPING_CRITERIA as const

  @Required()
  public options: TableSetGroupingCriteriaOperationOptions = new TableSetGroupingCriteriaOperationOptions()
}
