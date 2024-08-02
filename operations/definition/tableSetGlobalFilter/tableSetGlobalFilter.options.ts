import { Description, Required } from '@tsed/schema'

import { TargetedOperationOptions } from '../../interface'

export class TableSetGlobalFilterOperationOptions extends TargetedOperationOptions {
  @Required()
  @Description('Value to be filtered across all columns of the Table component')
  filter: string
}
