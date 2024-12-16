import { Description, Example, Required } from '@tsed/schema'

import { OperationOptions } from '../../interface'

export class ClearOptions extends OperationOptions {
  @Required()
  @Example('textfield')
  @Description('key of target to apply the clear operation')
  public targetKey: string

  @Example(['textfield', 'textarea'])
  @Description('List of component types to ignore when the clear operation runs.')
  DO_NOT_USE_ignoreChildComponentTypes?: string[]
}
