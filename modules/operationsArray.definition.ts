import { OneOf } from '@tsed/schema'

import { Operation } from '../operations/'

/**
 * TODO: When working on applying operations at runtime, explore applying the decorator's work at runtime
 *  Goal being to ensure User defined operations are also part of the runtime spec :)
 *
 *  Hint:
 *  https://stackoverflow.com/questions/47741166/js-apply-decorator-programmatically
 */
export class OperationsArray {
  @OneOf(Operation)
  operations: Operation[]
}
