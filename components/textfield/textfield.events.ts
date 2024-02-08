import { Optional } from '@tsed/schema'

import type { TargetEventOps } from '../../events/component.eventHandlers'
import { ComponentEventHandlers, EventToOps } from '../../events/component.eventHandlers'

export class TextfieldEvents extends ComponentEventHandlers {
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
  helperText: EventToOps
  @Optional()
  errors: EventToOps
}
