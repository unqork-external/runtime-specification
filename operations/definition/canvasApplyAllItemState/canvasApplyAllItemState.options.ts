import { Description, Example, Optional, Required } from '@tsed/schema'

export class CanvasApplyAllItemStateOperationOptions {
  @Required()
  @Description('key of the canvas to target')
  targetKey: string

  @Optional()
  @Description('Use to get structured data but only with the values from the desired paths per canvas item state')
  @Example('["settings.key"]')
  paths?: string[]
}
