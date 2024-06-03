import type { EventType, Operation, Signal } from '@unqork/runtime-types'

import { createSignal } from './createSignal'

export const createSignalIf = <Condition extends boolean | undefined>(
  condition: Condition | undefined,
  id: string,
  type: EventType | string,
  operationsData: Array<Operation | undefined> | undefined,
  args?: Record<string, any>,
): Signal | undefined => {
  if (!condition) return
  return createSignal(id, type, operationsData, args)
}
