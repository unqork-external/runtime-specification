import { DiscriminatorValue, Required } from '@tsed/schema'

import { FocusOperationOptions } from './focus.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.FOCUS)
export class FocusOperation extends Operation<OperationTypes.FOCUS> {
  public type = OperationTypes.FOCUS as const
  @Required()
  public options: FocusOperationOptions = new FocusOperationOptions()
}
