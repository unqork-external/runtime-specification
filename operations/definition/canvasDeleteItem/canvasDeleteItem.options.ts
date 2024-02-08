import { Description, Required } from '@tsed/schema'

export class CanvasDeleteItemOperationOptions {
  @Required()
  @Description('key of the canvas to target')
  targetKey: string

  @Required()
  @Description('the id of canvas item to delete')
  canvasItemId: string
}
