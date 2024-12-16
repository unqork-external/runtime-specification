import { OneOf } from '@tsed/schema'

import { Operation } from '../operations/'

export class OperationsArray {
  @OneOf(Operation)
  operations: Operation[]
}
