import { Any, Description, Property } from '@tsed/schema'

export class TableSetPageSizeOperationOptions {
  @Description('The key for the component we want to set page size')
  @Property()
  targetKey: string

  @Description('Page size')
  @Any('number', 'string')
  pageSize: number | string
}
