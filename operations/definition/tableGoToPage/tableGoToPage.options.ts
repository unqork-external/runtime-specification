import { Any, Description, Required } from '@tsed/schema'

export class TableGoToPageOperationOptions {
  @Description('Key of the Table component to change pagination position of')
  @Required()
  targetKey: string

  @Description('The page number user wants to navigate to. Page number is based on zero based index.')
  @Required()
  @Any('number', 'string')
  pageNumber: number | string
}
