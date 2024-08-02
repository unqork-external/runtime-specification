import { CollectionOf, Description, MinItems, Required } from '@tsed/schema'

import { Operation, OperationOptions } from '../../interface'

export class TryCatchOperationOptions extends OperationOptions {
  @CollectionOf(Operation)
  @Required()
  @MinItems(1)
  @Description('Array of operations to attempt')
  try: Operation[]

  @CollectionOf(Operation)
  @Required()
  @MinItems(1)
  @Description('Operations to run in the event an error is thrown from the tried operations')
  catch: Operation[] = []
}
