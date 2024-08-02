/**
 * New Operation Schema as discussed in Confluence:
 * https://unqork-wiki.atlassian.net/wiki/spaces/PLAT/pages/2594275362/Events+Watcher+Schema#Watchers-Schema
 *
 * This should give us a scalable way of representing our event schema for Runtime2.0. If we need to change something
 * it should be changed here.
 */

import { Any, CollectionOf, Description, DiscriminatorKey, Example, Required } from '@tsed/schema'

import { InputRef } from '../../inputs/inputRef'
import { OperationTypes } from '../enums/operation-types.enum'

export class Operation<
  OpType extends OperationTypes | string = string,
  Options extends OperationOptions = OperationOptions,
> {
  @Description('A detailed summary of the operation')
  creatorSummary?: string
  @Description('Name of the operation')
  name?: string
  @DiscriminatorKey()
  type: OpType
  options: Options
  notifyImmediately?: boolean
}

/**
 * TODO - Both of these make more sense on the Operation itself
 * But ops builder currently only supports managing options, so we
 * need to keep these here for them to be usable by configurators
 *
 * In the next version of OB that allows managing events args, criteria,
 * etc, we should evaluate moving these to a better location
 */
export class OperationOptions {
  @Description(`
    Conditionally execute this operation based on a formula.
    Can set to false to temporarily disabled when debugging
  `)
  @Any('string', 'boolean')
  shouldExecute?: string | boolean

  @Description(`
    Inputs to be used within formulas in other operation options
  `)
  @CollectionOf(InputRef)
  inputs?: InputRef[]
}

export class TargetedOperationOptions extends OperationOptions {
  @Required()
  @Description('Key or path that this operation should target or operate upon')
  @Example('myComponent', 'panel.*', 'grid.row(#).col(name)')
  targetKey: string
}

export const isTargetedOperation = <T extends Operation<string, TargetedOperationOptions>>(op: Operation): op is T => {
  return (op.options as TargetedOperationOptions).targetKey !== undefined
}
