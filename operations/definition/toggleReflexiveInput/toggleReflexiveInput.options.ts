import { Description, Required } from '@tsed/schema'

import { Unknown } from '../../../../decorators/schema'
import { OperationOptions } from '../../interface'

export class ToggleReflexiveInputOperationOptions extends OperationOptions {
  @Required()
  @Description('The key of the input that should be reflexive.')
  targetKey: string

  @Required()
  @Description('The component path to the key that should be watched to toggle the reflexive input.')
  pathToValue: string

  @Required()
  @Unknown()
  @Description('The value of `pathToValue` that should toggle the reflexive input.')
  expectedValue: unknown
}
