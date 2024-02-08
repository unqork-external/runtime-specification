import { Optional } from '@tsed/schema'

import { ComponentEventHandlers, EventToOps, TargetEventOps } from '../../events/component.eventHandlers'

export class ProtectedFieldEvents extends ComponentEventHandlers {
  @Optional()
  declare targets?: TargetEvents
}

export class TargetEvents implements TargetEventOps {
  [key: string]: EventToOps

  @Optional()
  root: EventToOps
  @Optional()
  label: EventToOps
  @Optional()
  tooltip: EventToOps
  @Optional()
  input: EventToOps
  @Optional()
  errors: EventToOps
}
