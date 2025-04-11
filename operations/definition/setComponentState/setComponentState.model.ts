import { DiscriminatorValue, Required } from '@tsed/schema'

import { SetComponentStateOperationOptions } from './setComponentState.options'
import { Alpha, DisplayName } from '../../../../decorators'
import { AutogenDisabled } from '../../decorators/autogenDisabled.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DisplayName('Set Component State')
@DiscriminatorValue(OperationTypes.SET_COMPONENT_STATE)
@Alpha()
@AutogenDisabled()
export class SetComponentStateOperation extends Operation<OperationTypes.SET_COMPONENT_STATE> {
  public type = OperationTypes.SET_COMPONENT_STATE as const

  @Required()
  public options: SetComponentStateOperationOptions = new SetComponentStateOperationOptions()
}
