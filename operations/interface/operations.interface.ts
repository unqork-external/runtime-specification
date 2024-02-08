/**
 * New Operation Schema as discussed in Confluence:
 * https://unqork-wiki.atlassian.net/wiki/spaces/PLAT/pages/2594275362/Events+Watcher+Schema#Watchers-Schema
 *
 * This should give us a scalable way of representing our event schema for Runtime2.0. If we need to change something
 * it should be changed here.
 */

import { Description, DiscriminatorKey } from '@tsed/schema'

import { OperationTypes } from '../enums/operation-types.enum'

export class Operation<OpType extends OperationTypes | string = string> {
  @DiscriminatorKey()
  type: OpType
  options: BaseOperationOptions
  @Description('Name of the operation')
  public name?: string
}

export class BaseOperationOptions {
  @Description('The key or path to the container we intend to target for an operation')
  // @deprecated - the Runtime should not care that a string known as "targetKey" may exist
  targetKey?: string
  value?: unknown
  applyImmediately?: boolean
}
