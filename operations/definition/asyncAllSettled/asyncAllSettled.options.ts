import { CollectionOf, Description, Ignore, MinItems, Required } from '@tsed/schema'

import { Operation, OperationOptions } from '../../interface'

export class AsyncAllSettledOperationOptions extends OperationOptions {
  @CollectionOf(Operation)
  @Required()
  @MinItems(1)
  @Description(
    'Async operations that will run in parallel. When all have either resolved or rejected, this operation will finish',
  )
  operations: Operation[]

  @Description(
    'Controls if once all promises have settled, if this operation will throw with the rejected values. Default: false.',
  )
  throwOnAnyRejection?: boolean = false
}
