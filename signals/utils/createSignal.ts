import type { EventType } from '../../../events/eventType.enum'
import type { Operation } from '../../operations/interface/operations.interface'
import type { Signal } from '../signal.config'
import type { SignalOptions } from '../signalOptions/signalOptions'

export const createSignal = (
  id: string,
  type: EventType | string,
  operationsData: Array<Operation | undefined> | undefined,
  args?: Record<string, any>,
  options?: SignalOptions,
): Signal | undefined => {
  if (operationsData === undefined) return

  const operations = operationsData.filter((x) => Boolean(x)) as Operation[]
  return {
    id,
    type,
    operations,
    args,
    ...(options && { options }),
  } as Signal
}
