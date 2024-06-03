import { Any, Property } from '@tsed/schema'

export class TableSetColumnFiltersVisibilityOperationOptions {
  @Property()
  targetKey: string

  @Any('boolean', 'string')
  enableColumnFilters: boolean | string
}
