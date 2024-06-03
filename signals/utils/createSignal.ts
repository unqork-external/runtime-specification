import type { Operation } from '../../operations/interface/operations.interface'
import type { EventType } from '../eventTypes/eventType.enum'
import type { Signal } from '../signal.config'

export const createSignal = (
  id: string,
  type: EventType | string,
  operationsData: Array<Operation | undefined> | undefined,
  args?: Record<string, any>,
): Signal | undefined => {
  if (operationsData === undefined) return

  const operations = operationsData.filter((x) => Boolean(x)) as Operation[]
  return {
    id,
    type,
    operations,
    args,
  } as Signal
}
