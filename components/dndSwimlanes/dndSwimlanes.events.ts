import { Optional } from '@tsed/schema'

import type { TargetEventOps } from '../../events/component.eventHandlers'
import { ComponentEventHandlers, EventToOps } from '../../events/component.eventHandlers'
import { OperationsArray } from '../../modules'

export type DndSwimlanesEventsToOps = EventToOps & Record<DndSwimlanesEventTypes.ON_SWIMLANES_MOVE, OperationsArray>

export enum DndSwimlanesEventTypes {
  ON_SWIMLANES_MOVE = 'onSwimlanesMove',
}

export class DndSwimlanesTargetEvents implements TargetEventOps {
  [key: string]: EventToOps

  @Optional()
  root: DndSwimlanesEventsToOps
}

export class DndSwimlanesEvents extends ComponentEventHandlers {
  @Optional()
  declare targets?: DndSwimlanesTargetEvents
}
