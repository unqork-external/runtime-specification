import { Any, Description, Required } from '@tsed/schema'

export class TableSetGlobalFilterVisibilityOperationOptions {
  @Required()
  @Description('Key of the Table component to toggle global filter visibility.')
  targetKey: string

  @Required()
  @Description('Disable/enable the global filtering feature and hide/show the search icon.')
  @Any('boolean', 'string')
  enableGlobalFilter: boolean | string
}
