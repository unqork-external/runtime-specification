import { Property } from '@tsed/schema'

export class ColumnFilter {
  @Property()
  id: string
  @Property()
  value: unknown
}
