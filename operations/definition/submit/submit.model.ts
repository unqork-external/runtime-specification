import { DiscriminatorValue, Required } from '@tsed/schema'

import { SubmitOptions } from './submit.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.SUBMIT)
export class SubmitOperation extends Operation<OperationTypes.SUBMIT> {
  public type = OperationTypes.SUBMIT as const

  @Required()
  public options: SubmitOptions = new SubmitOptions()
}
