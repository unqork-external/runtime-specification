import { Description, Example, Required, Optional } from '@tsed/schema'

import { OperationOptions } from '../../interface'

export class EmitEventOperationOptions extends OperationOptions {
  @Required()
  @Example('myCustomEvent')
  @Description('a creator defined name of an event to fire in the system')
  event: string

  @Optional()
  @Example('{value: "this is a value"}')
  @Description('data that can be sent with the event')
  payload: Record<string, any>
}
