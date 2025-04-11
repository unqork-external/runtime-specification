import type { EventType } from '../../../events/eventType.enum'
import type { Operation } from '../../operations/interface/operations.interface'
import type { Signal } from '../signal.config'
import type { SignalOptions } from '../signalOptions/signalOptions'

/**
 * Return type for createSignal. This will be undefined if operationsData is undefined, otherwise it will be Signal.
 */
type ConditionalSignal<T> = T extends undefined ? undefined : Signal

/**
 * Creates a signal object with the given parameters.
 *
 * @param id - The ID of the signal.
 * @param type - The type of the signal.
 * @param operationsData - The operations to perform when the triggering event is emitted.
 * @param args - Additional arguments for the signal.
 * @param options - Options for the signal.
 * @returns The created signal object or undefined if operationsData is undefined.
 */
export function createSignal<T extends Array<Operation | undefined> | undefined>(
  id: string,
  type: EventType | string,
  operationsData: T,
  args?: Record<string, any>,
  options?: SignalOptions,
): ConditionalSignal<T> {
  if (operationsData === undefined) return undefined as ConditionalSignal<T>

  const operations = operationsData.filter((x) => Boolean(x)) as Operation[]
  return {
    id,
    type,
    operations,
    args,
    ...(options && { options }),
  } as ConditionalSignal<T>
}
