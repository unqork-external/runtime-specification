import { Description, Required } from '@tsed/schema'

import { TargetedOperationOptions } from '../../interface'

export class CanvasDeleteItemOperationOptions extends TargetedOperationOptions {
  @Required()
  @Description('the id of canvas item to delete')
  canvasItemId: string
}
