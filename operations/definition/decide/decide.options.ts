import { CollectionOf, Enum, Optional } from '@tsed/schema'

import { ConditionalExecutionBag } from './conditionalExecutionBag'
import { DecideInputs } from './decideInputs'
import { DecisionTypes } from './decisionTypes.enum'
import { OperationOptions } from '../../interface'

export class DecideOptions extends OperationOptions {
  @Enum(DecisionTypes)
  decisionType: DecisionTypes

  @Optional()
  chainDecisions?: boolean

  @Optional()
  chainDecisionsBackwards?: boolean

  @CollectionOf(DecideInputs)
  declare inputs: DecideInputs[]

  @CollectionOf(ConditionalExecutionBag)
  outputs: ConditionalExecutionBag[]
}
