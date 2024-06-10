import { Any, Description, Required } from '@tsed/schema'

export class TableSetPageSizeOperationOptions {
  @Required()
  @Description('The key of the Table component to set page size.')
  targetKey: string

  @Required()
  @Description('Sets the number of rows displayed per page.')
  @Any('number', 'string')
  pageSize: number | string
}
