import { Description, Example, Optional, Required } from '@tsed/schema'

import { CanvasItemStatus } from '../../../components'

// TODO - update to TargetedOperationOptions once †hat PR is merged
export class CanvasSetItemStatusOperationOptions {
  @Description('Target key of the canvas component that holds this item')
  @Required()
  targetKey: string

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
