import { Any, Description, Required } from '@tsed/schema'

import { TargetedOperationOptions } from '../../interface'

export class TableSetPageSizeOperationOptions extends TargetedOperationOptions {
  @Required()
  @Description('Sets the number of rows displayed per page.')
  @Any('number', 'string')
  pageSize: number | string
}
