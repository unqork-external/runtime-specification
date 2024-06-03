import { Any, Property } from '@tsed/schema'

export class TableSetGlobalFilterVisibilityOperationOptions {
  @Property()
  targetKey: string

  @Any('boolean', 'string')
  enableGlobalFilter: boolean | string
}
