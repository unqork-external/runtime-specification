import { OperationsArray } from '../modules/operationsArray.definition'

export interface EventHandler {
  [eventType: string]: OperationsArray
}
