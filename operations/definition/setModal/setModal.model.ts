import { DiscriminatorValue, Required } from '@tsed/schema'

import { SetModalOptions } from './setModal.options'
import { Alpha } from '../../../../decorators'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.SET_MODAL)
@Alpha()
export class SetModalOperation extends Operation<OperationTypes.SET_MODAL> {
  public type = OperationTypes.SET_MODAL as const

  @Required()
  public options: SetModalOptions = new SetModalOptions()
}
