import { Property } from '@tsed/schema'

export class TableSetGlobalFilterOperationOptions {
  @Property()
  targetKey: string

  @Property()
  filter: string
}
