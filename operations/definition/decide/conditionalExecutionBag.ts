import { CollectionOf } from '@tsed/schema'

import type { DecideCondition } from './decideCondition'
import { RootDecide } from './rootDecide'
import { Operation } from '../../interface/operations.interface'

export class ConditionalExecutionBag {
  @CollectionOf(RootDecide)
  conditions: DecideCondition[]

  @CollectionOf(Operation)
  operations: Operation[]
}
