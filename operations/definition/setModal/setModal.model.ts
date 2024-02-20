import { DiscriminatorValue, Required } from '@tsed/schema'

import { SetModalOptions } from './setModal.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.SET_MODAL)
export class SetModalOperation extends Operation<OperationTypes.SET_MODAL> {
  public type = OperationTypes.SET_MODAL as const

  @Required()
  public options: SetModalOptions = new SetModalOptions()
}
