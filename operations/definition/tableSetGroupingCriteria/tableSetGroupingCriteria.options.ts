import { Description, Required } from '@tsed/schema'

import { OneOrMany } from '../../../../decorators/schema/oneOrMany.decorator'

export class TableSetGroupingCriteriaOperationOptions {
  @Required()
  @Description('Key of the Table component to perform column grouping.')
  targetKey: string

  @Required()
  @Description('The label of the column(s) to group the Table component by.')
  @OneOrMany('string')
  groupBy: string | string[]
}
