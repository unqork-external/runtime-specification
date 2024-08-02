import { Description, Required } from '@tsed/schema'

import { TargetedOperationOptions } from '../../interface'

export class TableSetRowExpandedOperationOptions extends TargetedOperationOptions {
  @Required()
  @Description('The key of the parent row group to expand or collapse.')
  targetGroupRow: string

  @Required()
  @Description('Indicates if the parent row group should be expanded or collapsed.')
  isRowExpanded: boolean
}
