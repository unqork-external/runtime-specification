import { Description } from '@tsed/schema'

import { TargetedOperationOptions } from '../../interface'

export class MenuToggleAtOptions extends TargetedOperationOptions {
  @Description('Which element should we anchor this menu to?')
  anchorKey: string
}
