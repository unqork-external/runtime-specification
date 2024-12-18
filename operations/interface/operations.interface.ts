import { Any, CollectionOf, Default, Description, DiscriminatorKey } from '@tsed/schema'

import { InputRef } from '../../inputs/inputRef'
import { SyntaxObject } from '../../syntax'
import { OperationTypes } from '../enums/operation-types.enum'

export class Operation<
  OpType extends OperationTypes | string = string,
  Options extends OperationOptions = OperationOptions,
> {
  @DiscriminatorKey()
  type: OpType

  //TODO: UQE-8764 => Without 'any' type, the build fails.
  //  Figure out how to make ts happy after removing it.
  options: Options | any

  @Description('Name of the operation')
  name?: string

  @Description('A detailed summary of the operation')
  creatorSummary?: string

  notifyImmediately?: boolean
}

export class OperationOptions {
  @Description(`
    Conditionally execute this operation.
    Can set to false to temporarily disabled when debugging.
  `)
  @Any('string', 'boolean')
  @Default(true)
  shouldExecute?: boolean | string | SyntaxObject = true
}
