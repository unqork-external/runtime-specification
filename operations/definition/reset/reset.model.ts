import { DiscriminatorValue, Required } from '@tsed/schema'

import { ResetOperationOptions } from './reset.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.RESET)
export class ResetOperation extends Operation<OperationTypes.RESET> {
  public type = OperationTypes.RESET as const

  @Required()
  public options: ResetOperationOptions = new ResetOperationOptions()
}
