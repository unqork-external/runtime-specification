import { Any, Description, Required } from '@tsed/schema'

import { TargetedOperationOptions } from '../../interface'

export class TableSetGlobalFilterVisibilityOperationOptions extends TargetedOperationOptions {
  @Required()
  @Description('Disable/enable the global filtering feature and hide/show the search icon.')
  @Any('boolean', 'string')
  enableGlobalFilter: boolean | string
}
