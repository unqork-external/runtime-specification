import { Property } from '@tsed/schema'

export class TableSetColumnFiltersVisibilityOperationOptions {
  @Property()
  targetKey: string

  @Property()
  enableColumnFilters: boolean | string
}
