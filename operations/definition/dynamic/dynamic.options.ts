import { Description, Optional, Required } from '@tsed/schema'

import { OperationOptions } from '../../interface'

export class DynamicOperationOptions extends OperationOptions {
  @Optional()
  @Description(
    "Key or path to send operation to. If specified, overrides any `targetKey` in dynamic operation's options",
  )
  targetKey?: string

  @Required()
  @Description('Formula or interpolation string that resolves to a full operation')
  operation: string
}
