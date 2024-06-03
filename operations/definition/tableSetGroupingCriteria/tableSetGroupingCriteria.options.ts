import { Property } from '@tsed/schema'

import { OneOrMany } from '../../../../decorators/schema/oneOrMany.decorator'

export class TableSetGroupingCriteriaOperationOptions {
  @Property()
  targetKey: string

  @Property()
  @OneOrMany('string')
  groupBy: string | string[]
}
