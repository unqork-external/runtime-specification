import { Description, Required, CollectionOf } from '@tsed/schema'

import { TargetedOperationOptions } from '../../interface'

export class TableRemoveRowsOperationOptions extends TargetedOperationOptions {
  @Description('Index(es) for the row(s) we want to remove')
  @Required()
  @CollectionOf(Number)
  targetIndexes?: number[]
}
