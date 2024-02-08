import { Optional } from '@tsed/schema'

import type { RuntimeEvent } from './event-types.config'
import { WatcherEvents } from './watchers/watcher.events'
import { OperationsArray } from '../modules/operationsArray.definition'

export type EventToOps = Partial<Record<RuntimeEvent, OperationsArray>>
export type TargetEventOps = Record<string, EventToOps>

export class ComponentEventHandlers extends WatcherEvents {
  @Optional()
  targets?: TargetEventOps
  @Optional()
  BLUR?: OperationsArray
  @Optional()
  CLEAR?: OperationsArray
  @Optional()
  FOCUS?: OperationsArray
  @Optional()
  DYNAMIC_STATE_CHANGE?: OperationsArray
  @Optional()
  EDIT_SUBMISSION?: OperationsArray
  @Optional()
  EXECUTE?: OperationsArray
  @Optional()
  INITIALIZE?: OperationsArray
  @Optional()
  KEY_DOWN?: OperationsArray
  @Optional()
  MOUSE_UP?: OperationsArray
  @Optional()
  NEW_SUBMISSION?: OperationsArray
  @Optional()
  CHANGE?: OperationsArray
  @Optional()
  ON_POST_EXECUTE?: OperationsArray
  @Optional()
  READY?: OperationsArray
  @Optional()
  ON_CLICK?: OperationsArray
  @Optional()
  ON_MOUSE_OVER?: OperationsArray
  @Optional()
  BEFORE_UNLOAD?: OperationsArray
  @Optional()
  ON_FINISH_COUNTING?: OperationsArray
  @Optional()
  ON_DROP?: OperationsArray
  @Optional()
  REFRESH?: OperationsArray
  @Optional()
  ON_POSITION_OPEN?: OperationsArray
  @Optional()
  ON_POSITION_CLOSE?: OperationsArray
}
