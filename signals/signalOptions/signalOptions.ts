import { Default, Required } from '@tsed/schema'

import { TrimmedDescription } from '../../../decorators'

export enum EventScope {
  Target = 'target',
  Self = 'self',
  Child = 'child',
  /**
   * @deprecated This will potentially be removed when module level events rolls
   * out. Just used in places where it's needed for backwards compatibility for
   * now.
   */
  Global = 'global',
}

export class SignalOptions {
  @Required()
  @Default([EventScope.Self])
  @TrimmedDescription(
    `Determines when this signal will run its operations in response to events that have different originators:
      EventScope.Target - will run if the event originator targetm matches this signal target
      EventScope.Self - will run if the event originator key matches the key of the object this signal is on
      EventScope.Global - will always run, no matter the event originator
     `,
  )
  eventScopes: EventScope[] = [EventScope.Self]
}
