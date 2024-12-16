import { Default, Required } from '@tsed/schema'

import { TrimmedDescription } from '../../../decorators'

export enum EventScope {
  Self = 'self',
  Global = 'global',
}

export class SignalOptions {
  @Required()
  @Default([EventScope.Self])
  @TrimmedDescription(
    `Scopes in which this signal triggers: EventScope.Self (object itself) or EventScope.Global (all).
     Activates if any scope matches the event originator.`,
  )
  eventScopes: EventScope[] = [EventScope.Self]
}
