import { Description, Example, Optional, Required } from '@tsed/schema'

import { CanvasItemStatus } from '../../../components'
import { TargetedOperationOptions } from '../../interface'

export class CanvasSetItemStatusOperationOptions extends TargetedOperationOptions {
  @Description('ID of the item to set this status on')
  @Example('f7bb5ebd-fcea-49f9-9cff-44fe81b51152')
  @Optional()
  itemId?: string

  @Description('Component key for the item to set this status on')
  @Example('myPanel')
  @Optional()
  itemKey?: string

  @Description('Status object to set or null to clear status')
  @Required()
  status: CanvasItemStatus | null
}
