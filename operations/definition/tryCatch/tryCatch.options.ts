import { CollectionOf, Description, Ignore, MinItems, Required } from '@tsed/schema'

import { Operation } from '../../interface'

export class TryCatchOperationOptions {
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

  // This can be removed once BaseOperationOperations is refactored.
  // https://unqork-jira.atlassian.net/browse/UN-27976
  // we can ignore properties with type never - Remove this decorator if this type is changed
  @Ignore()
  targetKey?: never
}
