import { Description, Required } from '@tsed/schema'

import { GeneralInput } from '../../interface/input.interface'

export class DynamicOperationOptions {
  @Description(
    "Key or path to send operation to. If specified, overrides any `targetKey` in dynamic operation's options",
  )
  targetKey?: string

  @Description('Optional inputs for use in dynamic operation')
  inputs?: GeneralInput[]

  @Required()
  @Description('Formula or interpolation string that resolves to a full operation')
  operation: string
}
