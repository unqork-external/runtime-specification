import { CollectionOf, Description, MinItems, Required } from '@tsed/schema'

import { ReflexiveInputCondition } from './ReflexiveInputCondition'
import { OperationOptions } from '../../interface'

export class ToggleReflexiveInputOperationOptions extends OperationOptions {
  @Required()
  @Description('The key of the input that should be reflexive.')
  targetKey: string

  @Required()
  @MinItems(1)
  @CollectionOf(ReflexiveInputCondition)
  conditions: ReflexiveInputCondition[]
}
