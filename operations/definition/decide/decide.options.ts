import { CollectionOf, Enum, Optional } from '@tsed/schema'

import { ConditionalExecutionBag } from './conditionalExecutionBag'
import { DecideInputs } from './decideInputs'
import { DecisionTypes } from './decisionTypes.enum'

export class DecideOptions {
  @Enum(DecisionTypes)
  decisionType: DecisionTypes
  @Optional()
  chainDecisions?: boolean
  @Optional()
  chainDecisionsBackwards?: boolean
  @CollectionOf(DecideInputs)
  inputs: DecideInputs[]
  @CollectionOf(ConditionalExecutionBag)
  outputs: ConditionalExecutionBag[]
}
