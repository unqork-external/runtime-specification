import { Required, Description } from '@tsed/schema'

import { Unknown } from '../../../../decorators'

export class ReflexiveInputCondition {
  @Required()
  @Description('The component path to the key that should be watched to toggle the reflexive input.')
  pathToValue: string

  @Required()
  @Unknown()
  @Description('The value of `pathToValue` that should toggle the reflexive input.')
  expectedValue: unknown
}
