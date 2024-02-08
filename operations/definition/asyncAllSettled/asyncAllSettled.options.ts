import { CollectionOf, Description, MinItems, Required } from '@tsed/schema'

import { Operation } from '../../interface'

export class AsyncAllSettledOperationOptions {
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

  // This can be removed once BaseOperationOperations is refactored.
  // https://unqork-jira.atlassian.net/browse/UN-27976
  targetKey?: never
}
