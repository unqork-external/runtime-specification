import { Property } from '@tsed/schema'

export class TableSetGroupingCriteriaOperationOptions {
  @Property()
  targetKey: string
  @Property()
  groupBy: string | string[]
}
