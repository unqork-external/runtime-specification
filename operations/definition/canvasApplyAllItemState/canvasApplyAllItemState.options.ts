import { Description, Example, Optional } from '@tsed/schema'

import { TargetedOperationOptions } from '../../interface'

export class CanvasApplyAllItemStateOperationOptions extends TargetedOperationOptions {
  @Optional()
  @Description('Use to get structured data but only with the values from the desired paths per canvas item state')
  @Example('["settings.key"]')
  paths?: string[]
}
