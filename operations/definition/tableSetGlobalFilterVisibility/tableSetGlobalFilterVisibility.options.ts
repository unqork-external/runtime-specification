import { Property } from '@tsed/schema'

export class TableSetGlobalFilterVisibilityOperationOptions {
  @Property()
  targetKey: string

  @Property()
  enableGlobalFilter: boolean | string
}
