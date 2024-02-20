import { DiscriminatorValue, Required } from '@tsed/schema'

import { SetComponentStateOperationOptions } from './setComponentState.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.SET_COMPONENT_STATE)
export class SetComponentStateOperation extends Operation<OperationTypes.SET_COMPONENT_STATE> {
  public type = OperationTypes.SET_COMPONENT_STATE as const

  @Required()
  public options: SetComponentStateOperationOptions = new SetComponentStateOperationOptions()
}
