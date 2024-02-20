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
  @Description('Name of the operation')
  name?: string
  @DiscriminatorKey()
  type: OpType
  options: any
  notifyImmediately?: boolean
}
