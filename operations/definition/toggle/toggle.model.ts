import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { ToggleOptions } from './toggle.options'
import { OpsBuilderStable, Stable } from '../../../../decorators/stability'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TOGGLE)
@Description('Toggle a boolean property. Only works on boolean properties.')
@Stable()
@OpsBuilderStable()
export class ToggleOperation extends Operation<OperationTypes.TOGGLE> {
  public type = OperationTypes.TOGGLE as const

  @Required()
  public options: ToggleOptions = new ToggleOptions()
}
