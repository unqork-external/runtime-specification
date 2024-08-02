import { Any, Description, Required } from '@tsed/schema'

import { TargetedOperationOptions } from '../../interface'

export class TableGoToPageOperationOptions extends TargetedOperationOptions {
  @Description('The page number user wants to navigate to. Page number is based on zero based index.')
  @Required()
  @Any('number', 'string')
  pageNumber: number | string
}
