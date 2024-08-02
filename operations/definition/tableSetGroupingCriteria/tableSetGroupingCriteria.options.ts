import { Description, Required } from '@tsed/schema'

import { OneOrMany } from '../../../../decorators/schema/oneOrMany.decorator'
import { TargetedOperationOptions } from '../../interface'

export class TableSetGroupingCriteriaOperationOptions extends TargetedOperationOptions {
  @Required()
  @Description('The label of the column(s) to group the Table component by.')
  @OneOrMany('string')
  groupBy: string | string[]
}
