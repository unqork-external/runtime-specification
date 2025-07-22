import { Description, Example, Required, Optional } from '@tsed/schema'

import { TrimmedDescription } from '../../../../decorators/schema'
import { OperationOptions } from '../../interface'

@TrimmedDescription(`
  EMIT_EVENT will emit an event in the system.

  This Operation is only supported for use in Extension modules (modules tagged with "extension").
`)
export class EmitEventOperationOptions extends OperationOptions {
  @Optional()
  //TODO: Should we change this at some point?
  @Description('This is not used for this event but is required by all operation options')
  targetKey: string

  @Required()
  @Example('myCustomEvent')
  @Description('a creator defined name of an event to fire in the system')
  event: string

  @Optional()
  @Example('{value: "this is a value"}')
  @Description('data that can be sent with the event')
  payload: Record<string, any>
}
