import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { ToggleOptions } from './toggle.options'
import { DisplayName } from '../../../../decorators'
import { Stable } from '../../../../decorators/stability'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DisplayName('Toggle')
@DiscriminatorValue(OperationTypes.TOGGLE)
@Description('Toggles a boolean property.')
@Stable()
export class ToggleOperation extends Operation<OperationTypes.TOGGLE> {
  public type = OperationTypes.TOGGLE as const

  @Required()
  public options: ToggleOptions = new ToggleOptions()
}
