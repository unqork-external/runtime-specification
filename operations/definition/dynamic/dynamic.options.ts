import { CollectionOf, Description, Required } from '@tsed/schema'

import { InputRef } from '../../../inputs/inputRef'
import { OperationOptions } from '../../interface'

export class DynamicOperationOptions extends OperationOptions {
  @Description(
    "Key or path to send operation to. If specified, overrides any `targetKey` in dynamic operation's options",
  )
  targetKey?: string

  @Required()
  @Description('Formula or interpolation string that resolves to a full operation')
  operation: string

  @Description(`
    Inputs to be used within formulas in other operation options.
  `)
  @CollectionOf(InputRef)
  inputs?: InputRef[]
}
