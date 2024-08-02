import { Description, Example } from '@tsed/schema'

import { TargetedOperationOptions } from '../../interface'

export class ClearOptions extends TargetedOperationOptions {
  @Example(['textfield', 'textarea'])
  @Description('List of component types to ignore when the clear operation runs.')
  DO_NOT_USE_ignoreChildComponentTypes?: string[]
}
